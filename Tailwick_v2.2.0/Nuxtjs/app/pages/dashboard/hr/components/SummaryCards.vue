<template>
  <div class="col-span-1">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
      <div class="card">
        <div class="card-body">
          <div class="grid grid-cols-4">
            <div class="col-span-3">
              <p class="text-base text-default-500 font-medium">Total Employee</p>
              <h5 class="text-3xl font-medium mt-4"><span data-target="615">615</span></h5>
            </div>
            <div>
              <client-only>
                <VueApexCharts type="radialBar" height="110" :options="totalEmployeeOptions" :series="totalEmployeeseries" />
              </client-only>
            </div>
          </div>
          <div class="flex items-center justify-between gap-3 mt-8">
            <p class="font-medium text-sm text-default-600"><span class="font-medium text-success">15%</span> Increase</p>
            <p class="font-semibold text-base text-default-400">This Month</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="grid grid-cols-4">
            <div class="col-span-3">
              <p class="text-base text-default-500 font-medium">Total Application</p>
              <h5 class="text-3xl font-medium mt-4"><span data-target="174">174</span></h5>
            </div>
            <client-only>
              <VueApexCharts type="radialBar" height="110" :options="totalApplicationOptions" :series="totalApplicationseries" />
            </client-only>
            <div id="totalApplication"></div>
          </div>
          <div class="flex items-center justify-between gap-3 mt-8">
            <p class="font-medium text-sm text-default-600"><span class="font-medium text-success">26%</span> Increase</p>
            <p class="font-semibold text-base text-default-400">This Month</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="grid grid-cols-4">
            <div class="col-span-3">
              <p class="text-base text-default-500 font-medium">Hired Candidates</p>
              <h5 class="text-3xl font-medium mt-4"><span data-target="64">64</span></h5>
            </div>
            <client-only>
              <VueApexCharts type="radialBar" height="110" :options="hiredCandidatesOptions" :series="hiredCandidatesseries" />
            </client-only>
            <div id="hiredCandidates"></div>
          </div>
          <div class="flex items-center justify-between gap-3 mt-8">
            <p class="font-medium text-sm text-default-600"><span class="font-medium text-danger">0.5%</span> Increase</p>
            <p class="font-semibold text-base text-default-400">This Month</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="grid grid-cols-4">
            <div class="col-span-3">
              <p class="text-base text-default-500 font-medium">Rejected Candidates</p>
              <h5 class="text-3xl font-medium mt-4"><span data-target="110">110</span></h5>
            </div>
            <client-only>
              <VueApexCharts type="radialBar" height="110" :options="rejectedCandidatesOptions" :series="rejectedCandidatesseries" />
            </client-only>
            <div id="rejectedCandidates"></div>
          </div>
          <div class="flex items-center justify-between gap-3 mt-8">
            <p class="font-medium text-sm text-default-600"><span class="font-medium text-danger">16%</span> Increase</p>
            <p class="font-semibold text-base text-default-400">This Month</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { hiredCandidatesOptions, hiredCandidatesseries, rejectedCandidatesOptions, rejectedCandidatesseries, totalApplicationOptions, totalApplicationseries, totalEmployeeOptions, totalEmployeeseries } from './data'
</script>
