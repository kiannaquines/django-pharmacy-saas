<template>
  <div class="lg:col-span-9 col-span-1">
    <div class="card">
      <div class="card-body">
        <h6 class="mb-4 card-title">Create Product</h6>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
          <div class="col-span-1">
            <label for="productNameInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Product Title</label>
            <input id="productNameInput" type="text" class="form-input" placeholder="Product Title" required />
            <p class="mt-1 text-default-400">Do not exceed 20 characters when entering the product name.</p>
          </div>
          <div class="col-span-1">
            <label for="productCodeInput" class="bg-transparent inline-block mb-2 font-medium">Product Code</label>
            <input id="productCodeInput" type="text" class="form-input" placeholder="Product Code" value="TWT145015" disabled required />
            <p class="mt-1 text-default-400">Code will be generated automatically</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
          <div class="col-span-1">
            <label for="qualityInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Quantity</label>
            <input type="number" id="qualityInput" class="form-input" placeholder="Quantity" required />
          </div>
          <div class="col-span-1">
            <label for="skuInput" class="inline-block mb-2 text-sm text-default-800 font-medium">SKU</label>
            <input type="text" id="skuInput" class="form-input" placeholder="TWT-LP-ALU-08" required />
          </div>
          <div class="col-span-1">
            <label for="brandInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Brand</label>
            <input type="text" id="brandInput" class="form-input" placeholder="Brand" required />
          </div>
          <div class="col-span-1">
            <label for="brandInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Category</label>
            <select class="form-input" placeholder="Select Category">
              <option value="Beauty,Health,Grocery">Beauty,Health,Grocery</option>
              <option value="Books">Books</option>
              <option value="Home,kichen,Pets">Home,kichen,Pets</option>
              <option value="Men's Fashion">Men's Fashion</option>
              <option value="Mobile,Computers">Mobile,Computers</option>
              <option value="TV,Appliances,Electronics">TV,Appliances,Electronics</option>
              <option value="Women's Fashion">Women's Fashion</option>
            </select>
          </div>
          <div class="col-span-1">
            <label for="brandInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Product Type</label>
            <select class="form-input" placeholder="Select Type">
              <option value="Boxed">Boxed</option>
              <option value="Single">Single</option>
              <option value="Unit">Unit</option>
            </select>
          </div>
          <div class="col-span-1">
            <label for="brandInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Gender </label>
            <select class="form-input" placeholder="Select Gender">
              <option value="Feamle">Feamle</option>
              <option value="Male">Male</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
          <div>
            <label for="qualityInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Colors Variant</label>
            <div class="flex gap-2 items-center flex-wrap">
              <input type="checkbox" class="form-checkbox text-primary" />
              <input type="checkbox" class="form-checkbox text-success" />
              <input type="checkbox" class="form-checkbox text-info" />
              <input type="checkbox" class="form-checkbox text-warning" />
              <input type="checkbox" class="form-checkbox text-danger" />
              <input type="checkbox" class="form-checkbox text-black" />
              <input type="checkbox" class="form-checkbox text-default-500" />
            </div>
          </div>
          <div>
            <label for="qualityInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Size</label>
            <div class="flex gap-2 items-center">
              <button class="size-7.5 text-xs text-default-500 btn border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">XS</button>
              <button class="active size-7.5 text-xs text-default-500 btn border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">S</button>
              <button class="size-7.5 text-xs text-default-500 btn border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">M</button>
              <button class="size-7.5 text-xs text-default-500 btn border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">L</button>
              <button class="size-7.5 text-xs text-default-500 btn border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">XL</button>
              <button class="size-7.5 text-xs text-default-500 btn border border-default-200 hover:bg-primary/10 hover:border-primary focus:bg-primary/10 focus:border-primary">2XL</button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 mb-5">
          <h6 class="mb-2 font-semibold text-sm text-default-800">Product Images</h6>
          <div ref="dropzoneEl" class="flex items-center justify-center bg-transparent border border-dashed rounded-md cursor-pointer dropzone border-default-300 dropzone2 dz-clickable">
            <div class="fallback">
              <Icon icon="lucide:file" type="file" multiple="multiple"></Icon>
            </div>
            <div class="w-full py-5 text-lg text-center dz-message needsclick">
              <div class="mb-3 flex justify-center">
                <Icon icon="lucide:upload-cloud" class="size-12 fill-default-200 text-default-500"></Icon>
              </div>
              <h5 class="mb-0 font-normal text-base text-default-500">Drag and drop your files or <a href="#">browse</a> your files</h5>
            </div>
          </div>
          <ul class="flex flex-wrap mb-0 gap-x-5" id="dropzone-preview2">
            <li class="mt-5" id="dropzone-preview-list">
              <div class="border rounded border-default-200 dark:border-zink-500">
                <div class="py-3 px-4 text-center">
                  <div>
                    <div class="p-2 mx-auto rounded-md size-14 bg-default-200">
                      <Icon icon="lucide:file" data-dz-thumbnail class="block size-7 w-full h-full rounded-md"></Icon>
                    </div>
                  </div>
                  <div class="pt-3">
                    <h5 class="mb-1 text-15" data-dz-name>&nbsp;</h5>
                    <p class="mb-0 text-default-500 dark:text-zink-200" data-dz-size></p>
                    <strong class="error text-danger" data-dz-errormessage></strong>
                  </div>
                  <div class="mt-2">
                    <button data-dz-remove class="px-2 py-1.5 text-xs text-white bg-danger border-danger btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20">Delete</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="grid grid-cols-1 gap-2 mb-5">
          <h6 class="font-semibold text-default-800 text-sm">Description</h6>
          <textarea class="form-input" placeholder="Enter Description" rows="5"></textarea>
        </div>
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
          <div class="col-span-1">
            <label for="productPrice" class="inline-block mb-2 text-sm text-default-800 font-medium">Price</label>
            <input type="number" id="productPrice" class="form-input" placeholder="$0.00" required />
          </div>
          <div class="col-span-1">
            <label for="productDiscounts" class="inline-block mb-2 text-sm text-default-800 font-medium">Discounts</label>
            <input type="number" id="productDiscounts" class="form-input" placeholder="0%" required />
          </div>
          <div class="col-span-1">
            <label for="brandInput" class="inline-block mb-2 text-sm text-default-800 font-medium">TAX Applicable</label>
            <select class="form-input" placeholder="Select TAX Applicable">
              <option value="Entertainment">Entertainment</option>
              <option value="Exclusive">Exclusive</option>
              <option value="none">none</option>
              <option value="Professional">Professional</option>
            </select>
          </div>
          <div class="col-span-1">
            <label for="publishDateTime" class="inline-block mb-2 text-sm text-default-800 font-medium">Publish Date &amp; Time</label>
            <input ref="inputRef" type="text" id="publishDateTime" class="form-input" placeholder="Select date & time" data-provider="flatpickr" data-date-format="d M, Y" data-enable-time="" required readonly />
          </div>
          <div class="col-span-1">
            <label for="brandInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Status</label>
            <select class="form-input">
              <option value="Draft">Draft</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Published">Published</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>
          <div class="col-span-1">
            <label for="brandInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Visibility</label>
            <select class="form-input" placeholder="Public">
              <option value="Hidden">Hidden</option>
              <option value="Publice">Publice</option>
            </select>
          </div>
          <div>
            <div>
              <label for="productTag" class="inline-block mb-2 text-sm text-default-800 font-medium">Product Tag</label>
              <input class="form-input" id="productTag" data-choices data-choices-text-unique-true type="text" value="Fashion, Clothes, Headphones" />
            </div>
          </div>
        </div>
        <div class="mt-4 flex gap-2 md:justify-end">
          <button class="bg-transparent text-danger btn border-0 hover:bg-danger/15">Reset</button>
          <button class="text-white btn bg-primary">Create Product</button>
          <button class="bg-teal-600 text-white btn hover:bg-teal-700">Draft & Preview</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import 'dropzone/dist/dropzone.css'
import { useFlatpickr } from '~/composables/useFlatpickr'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Dropzone from 'dropzone'

Dropzone.autoDiscover = false

const dropzoneEl = ref<HTMLDivElement | null>(null)
let dz: Dropzone | null = null

onMounted(() => {
  if (dropzoneEl.value) {
    dz = new Dropzone(dropzoneEl.value, {
      url: '/api/upload',
      maxFilesize: 5,
      acceptedFiles: 'image/*,.pdf,.doc,.docx',
      clickable: '.dropzone2',
      previewsContainer: '#dropzone-preview2',
      previewTemplate: (document.querySelector('#dropzone-preview-list') as HTMLElement).outerHTML
    })

    dz.on('addedfile', (file) => {
      console.log('📂 File added:', file.name)
    })

    dz.on('success', (file, response) => {
      console.log('✅ Upload success:', response)
    })

    dz.on('error', (file, errorMessage) => {
      console.error('❌ Upload error:', errorMessage)
    })
  }
})

onBeforeUnmount(() => {
  dz?.destroy()
})
const { inputRef } = useFlatpickr({
  mode: 'range',
  dateFormat: 'd M, Y'
})
</script>
