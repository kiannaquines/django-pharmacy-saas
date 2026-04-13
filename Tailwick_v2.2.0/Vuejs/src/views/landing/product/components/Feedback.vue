<template>
  <section id="Feedback" class="relative lg:pb-28 md:pb-18 pb-12">
    <div class="container">
      <div class="mx-auto md:mb-8 text-center lg:w-3xl">
        <h1 class="leading-normal capitalize md:text-4xl text-3xl font-semibold text-default-800">What Our Customer Says</h1>
      </div>
      <Swiper :slidesPerView="3" :space-between="30" :loop="true" :modules="[Pagination]" :pagination="{ clickable: true }" class="mySwiper">
        <SwiperSlide v-for="(item, index) in reviews" :key="index">
          <div class="p-5 text-center aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear">
            <div class="mx-auto rounded-full size-20" :class="item.bgColor">
              <img :src="item.avatar" alt="" class="rounded-full size-20" />
            </div>
            <p class="mt-6 text-default-600 text-base">"{{ item.comment }}"</p>
            <h6 class="mt-4 mb-2 text-base text-default-900 font-semibold">
              <RouterLink to="">{{ item.name }}</RouterLink>
            </h6>
            <div class="text-yellow-500 flex items-center justify-center gap-1">
              <Icon icon="lucide:star" v-for="star in item.stars" :key="star" class="fill-yellow-500 size-3.5"></Icon>
            </div>
          </div>
        </SwiperSlide>
        <div class="swiper-pagination"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
import { Pagination } from 'swiper/modules'
import avatar9 from '@/assets/images/user/avatar-9.png'
import avatar2 from '@/assets/images/user/avatar-2.png'
import avatar4 from '@/assets/images/user/avatar-4.png'
import avatar7 from '@/assets/images/user/avatar-7.png'
import { RouterLink } from 'vue-router'

interface Review {
  avatar: string
  name: string
  comment: string
  stars: number[]
  bgColor: string
}

const reviews: Review[] = [
  {
    avatar: avatar9,
    name: 'Anthony Hobbs',
    comment: 'ThemesDesign used Anydesk to fix the bug in Flask and django version. I highly recommend this product!',
    stars: [1, 2, 3, 4, 5],
    bgColor: 'bg-purple-500/10'
  },
  {
    avatar: avatar2,
    name: 'Angela Ulligan',
    comment: 'The best templates which is supported multiple programming languages with beautiful templates. thank you for the valuable template.',
    stars: [1, 2, 3, 4, 5],
    bgColor: 'bg-primary/10'
  },
  {
    avatar: avatar4,
    name: 'muratoztrkk01',
    comment: 'I encountered a few errors in the design of the product detail page in Angular. I contacted the support team and they established.',
    stars: [1, 2, 3, 4, 5],
    bgColor: 'bg-amber-500/10'
  },
  {
    avatar: avatar7,
    name: 'Christine Marbury',
    comment: "This theme is very good. I really recommend it. It's very good optimized, elegant, well documented, etc.",
    stars: [1, 2, 3, 4, 5],
    bgColor: 'bg-danger/10'
  }
]
</script>
