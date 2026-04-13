
import Dropzone from "dropzone"


class FileUpload {
    constructor() {
        this.init()
    }

    init() {
        if (typeof Dropzone === 'undefined') {
            console.warn('Dropzone is not loaded.')
            return
        }

        Dropzone.autoDiscover = false

        const dropzones = document.querySelectorAll('[data-plugin="dropzone"]')
        if (dropzones) {
            dropzones.forEach((dropzoneEl) => {
                const actionUrl = dropzoneEl.getAttribute('action') || '/'
                const previewContainer = dropzoneEl.dataset.previewsContainer
                const uploadPreviewTemplate = dropzoneEl.dataset.uploadPreviewTemplate

                const options = {
                    // url: actionUrl,
                    url: "https://httpbin.org/post",
                    maxFilesize: 20480, // 20 GB
                    dictDefaultMessage: "Drag & drop video files here or click to upload",

                    init() {
                        this.on("uploadprogress", (file, progress, bytesSent) => {
                            // Calculate upload speed
                            const duration = (file.upload.total / bytesSent) || 1; // avoid division by 0
                            const speed = (bytesSent / 1024 / 1024 / duration).toFixed(2); // MB/s

                            // Update progress bar width
                            const progressBar = file.previewElement.querySelector("[data-dz-uploadprogress]");
                            if (progressBar) progressBar.style.width = progress + "%";

                            // Show percentage + speed
                            const msg = file.previewElement.querySelector("[data-dz-errormessage]");
                            if (msg) msg.textContent = `${progress.toFixed(0)}% uploaded — ${speed} MB/s`;
                        });

                        this.on("success", (file) => {
                            const msg = file.previewElement.querySelector("[data-dz-errormessage]");
                            if (msg) msg.textContent = "✅ Upload complete";
                        });

                        this.on("error", (file, errorMessage) => {
                            const msg = file.previewElement.querySelector("[data-dz-errormessage]");
                            if (msg) msg.textContent = `❌ ${errorMessage}`;
                        });
                    },
                }

                if (previewContainer) {
                    options.previewsContainer = previewContainer
                }

                if (uploadPreviewTemplate) {
                    const template = document.querySelector(uploadPreviewTemplate)
                    if (template) {
                        options.previewTemplate = template.innerHTML
                    }
                }

                try {
                    new Dropzone(dropzoneEl, options)
                } catch (e) {
                    console.error('Dropzone initialization failed:', e)
                }
            })
        }
    }
}

new FileUpload()