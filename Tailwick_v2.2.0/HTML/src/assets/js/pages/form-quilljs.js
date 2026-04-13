
import Quill from 'quill'

if (typeof Quill != 'undefined') {
    // Quill editor
    const snowEditor = document.getElementById('snow-editor')
    if (snowEditor) {
        new Quill(snowEditor, {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ font: [] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ color: [] }, { background: [] }],
                    [{ script: 'super' }, { script: 'sub' }],
                    [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                    ['blockquote', 'code-block'],
                    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                    [{ align: [] }],
                    ['link', 'image', 'video'],
                    ['clean'],
                ],
            },
        })
    }

    // Bubble theme
    const bubbleEditor = document.getElementById('bubble-editor')
    if (bubbleEditor) {
        new Quill('#bubble-editor', {
            theme: 'bubble',
        })
    }
}
