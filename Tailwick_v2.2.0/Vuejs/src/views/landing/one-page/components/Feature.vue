<template>
  <section id="features" class="relative py-32 bg-default-900">
    <div class="container">
      <div class="grid lg:grid-cols-12 grid-cols-1 gap-5">
        <div class="lg:col-span-5 relative z-20 lg:order-1 order-2">
          <div class="relative z-10 grid lg:grid-cols-2 grid-cols-3 gap-5">
            <div class="lg:col-span-2">
              <img :src="widgets" alt="" class="rounded-xl ms-auto" />
            </div>
            <div class="lg:col-span-1 lg:mt-5">
              <img :src="widgets3" alt="" class="rounded-xl" />
            </div>
            <div class="lg:col-span-1 lg:mt-5">
              <img :src="widgets2" alt="" class="rounded-xl" />
            </div>
          </div>
        </div>
        <div class="lg:col-span-7 relative z-20 lg:-mt-72 lg:order-2 order-1">
          <img :src="home" alt="" class="rounded-xl shadow-2xl" />
        </div>
      </div>
      <div class="mt-24">
        <h1 class="mb-16 capitalize text-white font-semibold text-4xl leading-normal">Build for anyone who works with Tailwick</h1>
      </div>
    </div>
    <div class="absolute rotate-45 size-125 border border-dashed border-default-300/40 rounded-full -start-80 bottom-48 z-10 lg:block hidden md:block"></div>
    <div class="absolute rotate-45 size-175 border border-dashed border-default-300/40 rounded-full -start-96 bottom-24 z-10 lg:block hidden md:block"></div>
  </section>
  <section class="relative z-20 pb-32 bg-default-100 dark:bg-default-950">
    <div class="container">
      <div class="grid lg:grid-cols-3 gap-6">
        <div class="card rounded-md shadow-md transition-all duration-300 hover:-translate-y-2 -mt-36">
          <div class="card-body">
            <div class="flex flex-col gap-y-6">
              <img :src="chat" alt="" class="rounded-md shadow" />
              <div>
                <span class="inline-flex items-center py-0.5 px-2.5 rounded text-xs font-medium border border-primary/30 bg-primary/15 text-primary">Popular Apps</span>
                <h6 class="text-lg font-semibold mt-3 mb-2 text-default-800">
                  <RouterLink to="">Chat with Client & Employee</RouterLink>
                </h6>
                <p class="mb-3 text-base text-default-500">A chat UI, or user interface, is one of the first things users see when using a web or mobile application to communicate.</p>
                <RouterLink to="" class="text-primary text-base flex items-center gap-1.5">
                  Read More
                  <Icon icon="lucide:move-right" class="size-4"></Icon>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="card rounded-md shadow-md transition-all duration-300 hover:-translate-y-2 lg:-mt-36">
          <div class="card-body">
            <div class="flex flex-col gap-y-6">
              <img :src="email" alt="" class="rounded-md shadow" />
              <div>
                <span class="inline-flex items-center py-0.5 px-2.5 rounded text-xs font-medium border border-secondary/30 bg-secondary/15 text-secondary">Email Apps</span>
                <h6 class="text-lg font-semibold mt-3 mb-2 text-default-800">
                  <RouterLink to="">Exciting New Features Await You</RouterLink>
                </h6>
                <p class="mb-3 text-base text-default-500">A chat UI, or user interface, is one of the first things users see when using a web or mobile application to communicate.</p>
                <RouterLink to="" class="text-primary text-base flex items-center gap-1.5">
                  Read More
                  <Icon icon="lucide:move-right" class="size-4"></Icon>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="card rounded-md shadow-md transition-all duration-300 hover:-translate-y-2 lg:-mt-36">
          <div class="card-body">
            <div class="flex flex-col gap-y-6">
              <img :src="overview" alt="" class="rounded-md shadow" />
              <div>
                <span class="inline-flex items-center py-0.5 px-2.5 rounded text-xs font-medium border border-danger/20 bg-danger/15 text-danger">HR Management</span>
                <h6 class="text-lg font-semibold mt-3 mb-2 text-default-800">
                  <RouterLink to="">Unleash Your Creativity with Our Latest Tools</RouterLink>
                </h6>
                <p class="mb-3 text-base text-default-500">A chat UI, or user interface, is one of the first things users see when using a web or mobile application to communicate.</p>
                <RouterLink to="" class="text-primary text-base flex items-center gap-1.5">
                  Read More
                  <Icon icon="lucide:move-right" class="size-4"></Icon>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-10 rounded-md mt-20 bg-default-900 dark:bg-default-900">
        <div class="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
          <div class="text-center">
            <h3 class="mb-2 text-white text-2xl font-semibold"><span data-target="4" class="me-1">4</span>+</h3>
            <p class="text-base text-default-500">Multiple Layouts</p>
          </div>
          <div class="text-center">
            <h3 class="mb-2 text-white text-2xl font-semibold"><span data-target="12" class="me-1">12</span>+</h3>
            <p class="text-base text-default-500">Multi Languages</p>
          </div>
          <div class="text-center">
            <h3 class="mb-2 text-white text-2xl font-semibold"><span data-target="7" class="me-1">7</span>+</h3>
            <p class="text-base text-default-500">Apps & Dashboard</p>
          </div>
          <div class="text-center">
            <h3 class="mb-2 text-white text-2xl font-semibold"><span data-target="4" class="me-1">4</span>+</h3>
            <p class="text-base text-default-500">Multiple Modes</p>
          </div>
          <div class="text-center">
            <h3 class="mb-2 text-white text-2xl font-semibold"><span data-target="36500" class="me-1">36500</span>+</h3>
            <p class="text-base text-default-500">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import overview from '@/assets/images/landing/order-overview.jpg'
import chat from '@/assets/images/landing/chat.jpg'
import email from '@/assets/images/landing/email.jpg'
import home from '@/assets/images/landing/home.jpg'
import widgets from '@/assets/images/landing/widgets.jpg'
import widgets3 from '@/assets/images/landing/widgets-3.jpg'
import widgets2 from '@/assets/images/landing/widgets-2.jpg'
import { RouterLink } from 'vue-router'
</script>
