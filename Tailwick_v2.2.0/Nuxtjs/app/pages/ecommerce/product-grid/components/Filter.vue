<template>
  <div class="col-span-1 lg:block hidden">
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-between gap-3">
          <h6 class="card-title">Filter</h6>
          <div class="shrink-0">
            <a href="#" class="underline transition-all duration-200 text-default-700 text-sm ease-linear hover:text-primary">Clear All </a>
          </div>
        </div>
        <div class="mt-4">
          <div class="relative">
            <input type="text" id="hs-leading-icon" name="hs-leading-icon" class="ps-9 form-input form-input-sm w-full" placeholder="Search for..." />
            <div class="absolute inset-y-0 start-0 flex items-center z-20 ps-3">
              <Icon icon="lucide:search" class="size-3.5 text-default-600"></Icon>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="hs-accordion-group" data-hs-accordion-always-open="">
            <div class="hs-accordion active mt-4" id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button class="hs-accordion-toggle underline inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-default-800 rounded-lg disabled:opacity-50 text-sm disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                Color
                <Icon icon="lucide:chevron-down" class="iconify text-base hs-accordion-active:hidden block"></Icon>
                <Icon icon="lucide:chevron-up" class="iconify text-base hs-accordion-active:block hidden"></Icon>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <div class="mt-4 flex gap-2">
                  <input id="color1" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-primary bg-primary checked:bg-primary checked:border-primary focus:ring-0" />
                  <input id="color2" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-red-300 bg-red-300 checked:bg-red-300 checked:border-red-300 focus:ring-0" />
                  <input id="color3" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-green-300 bg-green-300 checked:bg-green-300 checked:border-green-300 focus:ring-0" />
                  <input id="color4" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-default-500 bg-default-500 checked:bg-default-500 checked:border-default-500 focus:ring-0" />
                  <input id="color5" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-purple-500 bg-purple-500 checked:bg-purple-500 checked:border-purple-500 focus:ring-0" />
                  <input id="color6" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-sky-500 bg-sky-500 checked:bg-sky-500 checked:border-sky-500 focus:ring-0" />
                  <input id="color7" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-yellow-500 bg-yellow-500 checked:bg-yellow-500 checked:border-yellow-500 focus:ring-0" />
                  <input id="color8" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-green-500 bg-green-500 checked:bg-green-500 checked:border-green-500 focus:ring-0" />
                  <input id="color9" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-default-800 bg-default-800 checked:bg-default-800 checked:border-default-800 focus:ring-0" />
                  <input id="color10" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-default-200 bg-default-200 checked:bg-default-200 checked:border-default-200 focus:ring-0" />
                  <input id="color11" type="checkbox" value="" class="size-5 cursor-pointer rounded-sm border border-emerald-300 bg-emerald-300 checked:bg-emerald-300 checked:border-emerald-300 focus:ring-0" />
                </div>
              </div>
            </div>
            <div class="hs-accordion active mt-4" id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button class="hs-accordion-toggle underline inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-default-800 rounded-lg disabled:opacity-50 text-sm disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                Price
                <Icon icon="lucide:chevron-down" class="iconify text-base hs-accordion-active:hidden block"></Icon>
                <Icon icon="lucide:chevron-up" class="iconify text-base hs-accordion-active:block hidden"></Icon>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <div class="mt-4 flex gap-2 flex-col">
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="priceAll" />
                    <label for="priceAll" class="text-sm text-default-800 align-middle cursor-pointer"> All </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="price1" />
                    <label for="price1" class="text-sm text-default-800 align-middle cursor-pointer"> $0.00 – $110.00 </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="price2" />
                    <label for="price2" class="text-sm text-default-800 align-middle cursor-pointer"> $110.00 – $220.00 </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="price3" />
                    <label for="price3" class="text-sm text-default-800 align-middle cursor-pointer"> $220 - $330 </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="price4" />
                    <label for="price4" class="text-sm text-default-800 align-middle cursor-pointer"> $330 - $550 </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="price5" />
                    <label for="price5" class="text-sm text-default-800 align-middle cursor-pointer"> $550+ </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="price6" />
                    <label for="price6" class="text-sm text-default-800 align-middle cursor-pointer"> Low to High </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="price7" />
                    <label for="price7" class="text-sm text-default-800 align-middle cursor-pointer"> High to Low </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="hs-accordion active mt-4" id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button class="hs-accordion-toggle underline inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-default-800 rounded-lg disabled:opacity-50 text-sm disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                Product Category
                <Icon icon="lucide:chevron-down" class="iconify text-base hs-accordion-active:hidden block"></Icon>
                <Icon icon="lucide:chevron-up" class="iconify text-base hs-accordion-active:block hidden"></Icon>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <div class="mt-4 flex gap-2 flex-col">
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="categoryAll" />
                    <label for="categoryAll" class="text-sm text-default-800 align-middle cursor-pointer"> All </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="category1" />
                    <label for="category1" class="text-sm text-default-800 align-middle cursor-pointer"> Mobiles, Computers </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="category2" />
                    <label for="category2" class="text-sm text-default-800 align-middle cursor-pointer"> TV, Appliances, Electronics </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="category3" />
                    <label for="category3" class="text-sm text-default-800 align-middle cursor-pointer"> Men's Fashion </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="category4" />
                    <label for="category4" class="text-sm text-default-800 align-middle cursor-pointer"> Women's Fashion </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="category5" />
                    <label for="category5" class="text-sm text-default-800 align-middle cursor-pointer"> Home, Kitchen, Pets </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="category6" />
                    <label for="category6" class="text-sm text-default-800 align-middle cursor-pointer"> Beauty, Health, Grocery </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="category7" />
                    <label for="category7" class="text-sm text-default-800 align-middle cursor-pointer"> Books </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="hs-accordion active mt-4" id="hs-basic-with-title-and-arrow-stretched-heading-four">
              <button class="hs-accordion-toggle underline inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-default-800 rounded-lg disabled:opacity-50 text-sm disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                Rating
                <Icon icon="lucide:chevron-down" class="iconify text-base hs-accordion-active:hidden block"></Icon>
                <Icon icon="lucide:chevron-up" class="iconify text-base hs-accordion-active:block hidden"></Icon>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <div class="mt-4 flex gap-2 flex-col">
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="ratingAll" />
                    <label for="ratingAll" class="text-sm text-default-800 align-middle cursor-pointer"> All </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="rating5" />
                    <label for="rating5" class="text-sm flex items-center gap-1 text-default-800 align-middle cursor-pointer">
                      <Icon icon="lucide:star" class="text-yellow-500 size-4 ms-1"></Icon>
                      5 Rating
                    </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="rating4" />
                    <label for="rating4" class="text-sm flex items-center gap-1 text-default-800 align-middle cursor-pointer">
                      <Icon icon="lucide:star" class="text-yellow-500 size-4 ms-1"></Icon>
                      4 Rating and Up
                    </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="rating3" />
                    <label for="rating3" class="text-sm flex items-center gap-1 text-default-800 align-middle cursor-pointer">
                      <Icon icon="lucide:star" class="text-yellow-500 size-4 ms-1"></Icon>
                      3 Rating and Up
                    </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="rating2" />
                    <label for="rating2" class="text-sm flex items-center gap-1 text-default-800 align-middle cursor-pointer">
                      <Icon icon="lucide:star" class="text-yellow-500 size-4 ms-1"></Icon>
                      2 Rating and Up
                    </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="rating1" />
                    <label for="rating1" class="text-sm flex items-center gap-1 text-default-800 align-middle cursor-pointer">
                      <Icon icon="lucide:star" class="text-yellow-500 size-4 ms-1"></Icon>
                      1 Rating and Up
                    </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="rating0" />
                    <label for="rating0" class="text-sm flex items-center gap-1 text-default-800 align-middle cursor-pointer">
                      <Icon icon="lucide:star" class="text-yellow-500 size-4 ms-1"></Icon>
                      0 Rating
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="hs-accordion mt-4" id="hs-basic-with-title-and-arrow-stretched-heading-five">
              <button class="hs-accordion-toggle underline inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-default-800 rounded-lg disabled:opacity-50 text-sm disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                Gender
                <Icon icon="lucide:chevron-down" class="iconify text-base hs-accordion-active:hidden block"></Icon>
                <Icon icon="lucide:chevron-up" class="iconify text-base hs-accordion-active:block hidden"></Icon>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <div class="mt-4 flex gap-2 flex-col">
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="genderAll" />
                    <label for="genderAll" class="text-sm text-default-800 align-middle cursor-pointer"> All </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="gendermal" />
                    <label for="gendermal" class="text-sm text-default-800 align-middle cursor-pointer"> Male </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="genderFemal" />
                    <label for="genderFemal" class="text-sm text-default-800 align-middle cursor-pointer"> Female </label>
                  </div>
                  <div class="flex gap-2 items-center">
                    <input type="checkbox" class="form-checkbox checked:bg-primary" id="genderOthers" />
                    <label for="genderOthers" class="text-sm text-default-800 align-middle cursor-pointer"> Other </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
