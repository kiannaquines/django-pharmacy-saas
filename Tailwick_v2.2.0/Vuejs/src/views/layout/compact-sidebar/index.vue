<template>
  <Vertical>
    <PageTitle subtitle="Layouts" title="Compact Sidenav" />
    <div class="card">
      <div class="flex py-3 mb-5 rounded-md mx-4 mt-4">
        <Icon icon="tabler:info-circle" class="size-4 text-primary-700" style="margin-top: 3px"></Icon>&nbsp;
        <div class="text-sm text-default-800 leading-relaxed">
          <p>
            To enable the <strong> medium-sized (compact) sidebar</strong>, add
            <code class="px-1 py-0.5 bg-default-100 rounded text-xs">data-sidenav-size="md"</code>
            to the <code class="px-1 py-0.5 bg-default-100 rounded text-xs">&lt;html&gt;</code> tag. To apply this dynamically, use
            <code class="px-1 py-0.5 bg-default-100 rounded text-xs">setSideNavSize('md')</code>
            from the <code class="px-1 py-0.5 bg-default-100 rounded text-xs">useLayout</code>.
          </p>
        </div>
      </div>
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import { useLayout } from '@/stores/layout'
import { Icon } from '@iconify/vue'
import { onBeforeUnmount, onMounted } from 'vue'

const { setSideNavSize, reset } = useLayout()

onMounted(() => {
  setSideNavSize('md')
})

onBeforeUnmount(() => {
  reset()
})
</script>
