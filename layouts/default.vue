<template>
  <div class="flex flex-col">
    <app-header />
    <nuxt-child class="mt-20 pt-1" />
    <app-footer />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>
