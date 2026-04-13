<template>
  <div class="bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] min-h-screen flex justify-center items-center">
    <div class="relative">
      <div class="bg-card/70 rounded-lg w-2/3 mx-auto">
        <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0">
          <div class="lg:col-span-5">
            <div class="text-center px-10 py-12">
              <div class="mt-8">
                <h4 class="mb-2 text-primary text-xl font-semibold">Verify Email</h4>
                <p class="text-base mb-8 text-default-500">Please enter the 4 digit code sent to tailwick@themesdesign.in</p>
              </div>
              <form action="/">
                <div class="grid grid-cols-4 gap-2">
                  <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
                  <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
                  <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
                  <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
                </div>
                <div class="mt-10">
                  <button type="button" class="btn bg-primary text-white w-full">Confirm</button>
                </div>
              </form>
            </div>
          </div>
          <AuthRight />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthRight from '~/components/AuthRight.vue'
</script>
