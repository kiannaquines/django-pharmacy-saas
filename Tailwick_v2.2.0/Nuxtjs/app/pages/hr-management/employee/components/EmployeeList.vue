<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="min-w-full inline-block align-middle">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-default-200">
            <thead class="bg-default-100 font-normal whitespace-nowrap">
              <tr class="text-sm text-default-800">
                <th scope="col" class="px-3.5 py-3 font-medium text-start">Employee ID</th>
                <th scope="col" class="px-3.5 py-3 font-medium text-start">Name</th>
                <th scope="col" class="px-3.5 py-3 font-medium text-start">Designation</th>
                <th scope="col" class="px-3.5 py-3 font-medium text-start">Email Id</th>
                <th scope="col" class="px-3.5 py-3 font-medium text-start">Phone Number</th>
                <th scope="col" class="px-3.5 py-3 font-medium text-start">Location</th>
                <th scope="col" class="px-3.5 py-3 font-medium text-start">Experience</th>
                <th scope="col" class="px-3.5 py-3 font-medium text-start">Joining Date</th>
                <th scope="col" class="px-3.5 py-3 font-medium text-start">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-default-200">
              <tr class="text-default-800 font-normal whitespace-nowrap" v-for="(item, idx) in employees" :key="idx">
                <td class="px-3.5 py-3 text-sm text-primary">{{ item.employeeId }}</td>
                <td class="px-3.5 py-3 text-sm">
                  <a href="#" class="flex gap-3 items-center">
                    <img :src="item.avatar" alt="" class="h-6 rounded-full" />
                    <h6 class="text-heading font-medium">{{ item.name }}</h6>
                  </a>
                </td>
                <td class="px-3.5 py-3 text-sm">{{ item.designation }}</td>
                <td class="px-3.5 py-3 text-sm">{{ item.email }}</td>
                <td class="px-3.5 py-3 text-sm">{{ item.phone }}</td>
                <td class="px-3.5 py-3 text-sm">{{ item.location }}</td>
                <td class="px-3.5 py-3 text-sm">{{ item.experience }}</td>
                <td class="px-3.5 py-3 text-sm">{{ item.joiningDate }}</td>
                <td class="px-3.5 py-3">
                  <div class="flex items-center gap-2">
                    <a href="#" class="flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600">
                      <Icon icon="lucide:eye" class="size-3"></Icon>
                    </a>
                    <a href="#" class="flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600" aria-haspopup="dialog" aria-expanded="false" aria-controls="employeeEdit" data-hs-overlay="#employeeEdit">
                      <Icon icon="lucide:pencil" class="size-4"></Icon>
                    </a>
                    <a href="#" class="flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600" aria-haspopup="dialog" aria-expanded="false" aria-controls="employeeDelete" data-hs-overlay="#employeeDelete">
                      <Icon icon="lucide:trash-2" class="size-4"></Icon>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <p class="text-default-500 text-sm">Showing <b>10</b> of <b>38</b> Results</p>
      <nav class="flex items-center gap-2" aria-label="Pagination">
        <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"><Icon icon="lucide:chevron-left" class="size-4 me-1"></Icon> Prev</button>
        <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button>
        <button type="button" class="btn size-7.5 bg-primary text-white">2</button>
        <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button>
        <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
          Next
          <Icon icon="lucid:chevron-right" class="size-4 ms-1"></Icon>
        </button>
      </nav>
    </div>
  </div>
  <div id="employeeEdit" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="employeeEditlabel">
    <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 max-w-md lg:w-full m-3 mx-auto min-h-[calc(100%-56px)] flex items-center">
      <div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto">
        <div class="card-header">
          <h3 id="employeeEditlabel" class="font-semibold text-base text-default-800">Edit Employee Data</h3>
          <button type="button" aria-label="Close" data-hs-overlay="#employeeEdit">
            <span class="sr-only">Close</span>
            <Icon icon="lucide:x" class="size-5"></Icon>
          </button>
        </div>
        <div class="card-body overflow-y-auto lg:h-full h-160">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div class="lg:col-span-12 flex justify-center">
              <div class="relative mx-auto mb-4 rounded-full shadow-md size-24 bg-default-200">
                <img :src="dummy" alt="Profile" class="object-cover w-full h-full rounded-full user-profile-image" />
                <div class="absolute bottom-0 right-0 flex items-center justify-center rounded-full size-8 bg-default-50 shadow-lg cursor-pointer">
                  <input id="profile-img-file-input" name="profile-img-file-input" type="file" class="hidden" />
                  <label for="profile-img-file-input" class="flex items-center justify-center w-full h-full rounded-full cursor-pointer">
                    <Icon icon="lucide:image-plus" class="size-4 text-default-400"></Icon>
                  </label>
                </div>
              </div>
            </div>
            <div class="lg:col-span-12">
              <label for="employeeId" class="block mb-2 text-sm font-medium text-default-700">Employee ID</label>
              <input type="text" id="employeeId" value="#TWE1001528" class="form-input" disabled />
            </div>
            <div class="lg:col-span-12">
              <label for="employeeInput" class="block mb-2 text-sm font-medium text-default-700">Name</label>
              <input type="text" id="employeeInput" placeholder="Employee name" value="Willie Torres" class="form-input" />
            </div>
            <div class="lg:col-span-12">
              <label for="emailInput" class="block mb-2 text-sm font-medium text-default-700">Email</label>
              <input type="email" id="emailInput" placeholder="example@tailwick.com" value="willie@tailwick.com" class="form-input" />
            </div>
            <div class="lg:col-span-6">
              <label for="phoneNumberInput" class="block mb-2 text-sm font-medium text-default-700">Phone Number</label>
              <input type="text" id="phoneNumberInput" placeholder="Enter phone number" value="070 3715 3689" class="form-input" />
            </div>
            <div class="lg:col-span-6">
              <label for="locationInput" class="block mb-2 text-sm font-medium text-default-700">Location</label>
              <input type="text" id="locationInput" placeholder="Enter location" class="form-input" />
            </div>
            <div class="lg:col-span-6">
              <label for="joiningDateInput" class="block mb-2 text-sm font-medium text-default-700">Joining Date</label>
              <input type="date" id="joiningDateInput" value="05 Feb, 2020" class="form-input" />
            </div>
            <div class="lg:col-span-6">
              <label for="experienceInput" class="block mb-2 text-sm font-medium text-default-700">Experience</label>
              <input type="text" id="experienceInput" placeholder="0.0" class="form-input" />
            </div>
            <div class="lg:col-span-12">
              <label for="designationSelect" class="block mb-2 text-sm font-medium text-default-700">Designation</label>
              <select id="designationSelect" class="form-input">
                <option selected>Angular Developer</option>
                <option>ASP.Net Developer</option>
                <option>NodeJS Developer</option>
                <option>Project Manager</option>
                <option>React Developer</option>
                <option>Team Leader</option>
                <option>UI / UX Designer</option>
                <option>VueJs Developer</option>
                <option>Web Designer</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-footer flex justify-end gap-2">
          <button type="button" class="btn bg-transparent border-0 text-danger hover:bg-danger/10" data-hs-overlay="#employeeEdit">Cancel</button>
          <button type="button" class="btn bg-primary text-white">Update</button>
        </div>
      </div>
    </div>
  </div>
  <div id="employeeDelete" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="employeeDelete-label">
    <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 mx-auto min-h-[calc(100%-56px)] flex items-center">
      <div class="w-full flex flex-col card shadow-2xs border border-default-200 rounded-xl pointer-events-auto px-6 py-8 relative">
        <div class="absolute top-3 end-3">
          <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#employeeDelete">
            <span class="sr-only">Close</span>
            <Icon icon="lucide:x" class="size-5"></Icon>
          </button>
        </div>
        <h3 class="font-semibold text-base text-default-800 text-center">
          <!-- <img :src="delete" alt="" class="size-12 mx-auto" /> -->
          <div class="mt-5 text-center">
            <h5 class="mb-1 text-lg font-semibold text-default-800">Are you sure?</h5>
            <p class="text-default-500 text-sm font-normal">Are you certain you want to delete this record?</p>
            <div class="mt-5 flex gap-2 justify-center">
              <button class="btn text-danger bg-transparent hover:bg-danger/10" aria-label="Close">Cancel</button>
              <button class="btn bg-danger text-white">Yes,Delete It!</button>
            </div>
          </div>
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dummy from '~/assets/images/user/user-dummy-img.jpg'
import { Icon } from '@iconify/vue'
// import delete from '~/assets/images/delete.png'
import img1 from '~/assets/images/user/user-1.jpg'
import img2 from '~/assets/images/user/user-2.jpg'
import img3 from '~/assets/images/user/user-3.jpg'
import img4 from '~/assets/images/user/user-4.jpg'

type EmployeeType = {
  employeeId: string
  name: string
  avatar: string
  designation: string
  email: string
  phone: string
  location: string
  experience: string
  joiningDate: string
}

const employees: EmployeeType[] = [
  {
    employeeId: '#TWE1001528',
    name: 'Willie Torres',
    avatar: img1,
    designation: 'Nuxt JS Developer',
    email: 'willie@tailwick.com',
    phone: '070 3715 3689',
    location: 'United States',
    experience: '3 Year',
    joiningDate: '05 Feb, 2020'
  },
  {
    employeeId: '#TWE1001524',
    name: 'Patricia Garcia',
    avatar: img2,
    designation: 'ASP.Net Developer',
    email: 'PatriciaJGarcia@tailwick.com',
    phone: '077 7317 7572',
    location: 'Brazil',
    experience: '0.5 Year',
    joiningDate: '12 Aug, 2023'
  },
  {
    employeeId: '#TWE1001506',
    name: 'Tonya Johnson',
    avatar: img3,
    designation: 'Project Manager',
    email: 'TonyaEJohnson@tailwick.com',
    phone: '079 2383 2340',
    location: 'Denmark',
    experience: '0 Year',
    joiningDate: '11 Nov, 2023'
  },
  {
    employeeId: '#TWE1001502',
    name: 'Jose White',
    avatar: img4,
    designation: 'React Developer',
    email: 'ameida@tailwick.com',
    phone: '03476 56 14 12',
    location: 'Philippines',
    experience: '1.5 Year',
    joiningDate: '09 Jun, 2022'
  },
  {
    employeeId: '#TWE1001503',
    name: 'Juliette Fecteau',
    avatar: img1,
    designation: 'Sr. Angular Developer',
    email: 'JulietteFecteau@tailwick.com',
    phone: '07231 96 25 88',
    location: 'Belgium',
    experience: '1.9 Year',
    joiningDate: '11 May, 2021'
  },
  {
    employeeId: '#TWE1001504',
    name: 'Jonas Frederiksen',
    avatar: img2,
    designation: 'Team Leader',
    email: 'jonas@tailwick.com',
    phone: '61 53 62 05',
    location: 'France',
    experience: '2.9 Year',
    joiningDate: '18 Jan, 2019'
  },
  {
    employeeId: '#TWE1001505',
    name: 'Kim Broberg',
    avatar: img4,
    designation: 'UI / UX Designer',
    email: 'KimBroberg@tailwick.com',
    phone: '040 382 2096',
    location: 'Finland',
    experience: '1.2 Year',
    joiningDate: '23 April, 2021'
  }
]
</script>
