<template>
  <div class="grid lg:grid-cols-2 gap-5 mb-6">
    <div class="hs-collapse-group space-y-3">
      <div>
        <button type="button" class="hs-collapse-toggle card px-4 mb-2 py-3 flex flex-row justify-between items-center w-full" id="hs-basic-collapse" aria-expanded="false" aria-controls="hs-basic-collapse-heading" data-hs-collapse="#hs-basic-collapse-heading">
          How to install Tailwind CSS in a project?
          <Icon icon="lucide:chevron-down" class="hs-collapse-open:hidden size-4"></Icon>
          <Icon icon="lucide:chevron-up" class="hs-collapse-open:block hidden size-4"></Icon>
        </button>
        <div id="hs-basic-collapse-heading" class="hs-collapse hidden w-full card overflow-hidden transition-[height] duration-300 shadow-md rounded-md" aria-labelledby="hs-basic-collapse">
          <div class="card-body">
            <p class="mb-3 text-sm">To install Tailwind CSS, you can use npm or yarn by running the following commands:</p>
            <ol class="flex flex-col gap-2 list-decimal list-inside">
              <li class="text-sm text-default-700">
                <b>Using npm</b>
                <div class="mt-2">
                  <code>npm install tailwindcss</code>
                </div>
              </li>
              <div class="text-center">OR</div>
              <li class="text-sm text-default-700">
                <b>Using yarn</b>
                <div class="mt-2">
                  <code>yarn add tailwindcss</code>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="hs-collapse-toggle card px-4 mb-2 py-3 flex flex-row justify-between items-center w-full" id="hs-basic-collapse" aria-expanded="false" aria-controls="hs-basic-collapse-heading1" data-hs-collapse="#hs-basic-collapse-heading1">
          How to enable dark mode in Tailwind CSS?
          <Icon icon="lucide:chevron-down" class="hs-collapse-open:hidden size-4"></Icon>
          <Icon icon="lucide:chevron-up" class="hs-collapse-open:block hidden size-4"></Icon>
        </button>
        <div id="hs-basic-collapse-heading1" class="hs-collapse hidden w-full card overflow-hidden transition-[height] duration-300 shadow-md rounded-md" aria-labelledby="hs-basic-collapse">
          <div class="card-body">
            <p class="mb-3 text-sm">To enable dark mode in Tailwind CSS, update your <code>tailwind.config.js</code> file with the <code>darkMode</code> option. You can choose between two different dark mode strategies: <code>media</code> or <code>class</code></p>
            <p class="mb-3 text-sm">Using <code>class</code>, the dark mode is enabled by adding a <code>.dark</code> class to an ancestor element of your components:</p>
            <code>
              <p>module.exports = {</p>
              <p class="ps-4.5">darkMode: 'class', // or 'media'</p>
              <p class="ps-4.5">// ...</p>
              <p class="ps-4.5">}</p>
            </code>
          </div>
        </div>
      </div>

      <div>
        <button type="button" class="hs-collapse-toggle card px-4 mb-2 py-3 flex flex-row justify-between items-center w-full" id="hs-basic-collapse" aria-expanded="false" aria-controls="hs-basic-collapse-heading2" data-hs-collapse="#hs-basic-collapse-heading2">
          How to use plugins in Tailwind CSS?
          <Icon icon="lucide:chevron-down" class="hs-collapse-open:hidden size-4"></Icon>
          <Icon icon="lucide:chevron-up" class="hs-collapse-open:block hidden size-4"></Icon>
        </button>

        <div id="hs-basic-collapse-heading2" class="hs-collapse hidden w-full card overflow-hidden transition-[height] duration-300 shadow-md rounded-md" aria-labelledby="hs-basic-collapse">
          <div class="card-body">
            <p class="mb-3 text-sm">To get started with your first plugin, import Tailwind’s <code>plugin</code> function from <code>tailwindcss/plugin</code>. Then inside your <code>plugins</code> array, call the imported <code>plugin</code> function with an anonymous function as the first argument.</p>
            <code class="text-sm">
              <p class="mb-4">const plugin = require('tailwindcss/plugin')</p>
              <p>module.exports = {</p>
              <p class="ps-4.5">plugins: [</p>
              <p class="ps-10">plugin(function({ addUtilities, addComponents, e, config }) {</p>
              <p class="ps-10">// Add your custom styles here</p>
              <p class="ps-10">}),</p>
              <p class="ps-4.5">]</p>
              <p>}</p>
            </code>
          </div>
        </div>
      </div>
    </div>

    <div class="hs-collapse-group space-y-3">
      <div>
        <button type="button" class="hs-collapse-toggle card px-4 mb-2 py-3 flex flex-row justify-between items-center w-full" id="hs-basic-collapse" aria-expanded="false" aria-controls="hs-basic-collapse-heading3" data-hs-collapse="#hs-basic-collapse-heading3">
          How to customize the configuration file in Tailwind CSS?
          <Icon icon="lucide:chevron-down" class="hs-collapse-open:hidden size-4"></Icon>
          <Icon icon="lucide:chevron-up" class="hs-collapse-open:block hidden size-4"></Icon>
        </button>

        <div id="hs-basic-collapse-heading3" class="hs-collapse hidden w-full card overflow-hidden transition-[height] duration-300 shadow-md rounded-md" aria-labelledby="hs-basic-collapse">
          <div class="card-body">
            <p class="mb-3 text-sm">You can customize the <code>tailwind.config.js</code> file to override the default configuration options provided by Tailwind CSS. The configuration file follows the following structure:</p>
            <code class="text-sm">
              <p>module.exports = {</p>
              <p class="ps-4.5">purge: [],</p>
              <p class="ps-4.5">theme: {</p>
              <p class="ps-8">extend: {</p>
              <p class="ps-12">...</p>
              <p class="ps-8">},</p>
              <p class="ps-4.5">},</p>
              <p class="ps-4.5">variants: {},</p>
              <p class="ps-4.5">plugins: [],</p>
              <p>}</p>
            </code>
          </div>
        </div>
      </div>

      <div>
        <button type="button" class="hs-collapse-toggle card px-4 mb-2 py-3 flex flex-row justify-between items-center w-full" id="hs-basic-collapse" aria-expanded="false" aria-controls="hs-basic-collapse-heading4" data-hs-collapse="#hs-basic-collapse-heading4">
          How to use responsive variants in Tailwind CSS?
          <Icon icon="lucide:chevron-down" class="hs-collapse-open:hidden size-4"></Icon>
          <Icon icon="lucide:chevron-up" class="hs-collapse-open:block hidden size-4"></Icon>
        </button>

        <div id="hs-basic-collapse-heading4" class="hs-collapse hidden w-full card overflow-hidden transition-[height] duration-300 shadow-md rounded-md" aria-labelledby="hs-basic-collapse">
          <div class="card-body">
            <p class="mb-3 text-sm">Tailwind CSS generates responsive variants for most utilities, allowing you to create responsive designs easily. By default, it includes four breakpoints:</p>
            <ul class="flex flex-col gap-2 list-disc list-inside mb-2 text-sm">
              <li><code>sm:</code>640px</li>
              <li><code>md:</code>768px</li>
              <li><code>lg:</code>1024px</li>
              <li><code>xl:</code>1280px</li>
            </ul>
            <code class="text-sm mt-2">
              <p>Your content here</p>
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
