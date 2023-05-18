<template>
  <header class="p-5 md:px-20 bg-white bg-opacity-75 fixed top-0 right-0 left-0 flex items-center justify-between z-50">
    <input id="checkbox" v-model="checkbox" type="checkbox" />
    <nuxt-link to="/">
      <text-logo />
    </nuxt-link>
    <label for="checkbox" class="hamburger flex flex-col items-start gap-2 w-8 cursor-pointer md:hidden">
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
      <div class="hamburger__line hamburger__line--w-50"></div>
    </label>
    <nav class="mobile-nav fixed md:hidden top-0 right-0 left-0 bottom-0 bg-white flex flex-col items-center gap-5 pt-40">
      <nuxt-link to="/" class="opacity-85 text-gray-700 text-3xl font-[500]">Home</nuxt-link>
      <nuxt-link to="/about-us" class="opacity-85 text-gray-700 text-3xl font-[500]">About Us</nuxt-link>
      <nuxt-link to="/our-services" class="opacity-85 text-gray-700 text-3xl font-[500]">Our Services</nuxt-link>
      <nuxt-link to="/capacity-statement" class="opacity-85 text-gray-700 text-3xl font-[500]">Capacity Statement</nuxt-link>
      <nuxt-link to="/contact-us" class="opacity-85 text-gray-700 text-3xl font-[500]">Contact Us</nuxt-link>
    </nav>
    <nav class="hidden md:flex gap-5">
      <nuxt-link to="/" class="opacity-85 text-gray-700 font-[500]">Home</nuxt-link>
      <nuxt-link to="/about-us" class="opacity-85 text-gray-700 font-[500]">About Us</nuxt-link>
      <nuxt-link to="/our-services" class="opacity-85 text-gray-700 font-[500]">Our Services</nuxt-link>
      <nuxt-link to="/capacity-statement" class="opacity-85 text-gray-700 font-[500]">Capacity Statement</nuxt-link>
      <nuxt-link to="/contact-us" class="opacity-85 text-gray-700 font-[500]">Contact Us</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      checkbox: false,
    }
  },
  watch: {
    '$route.path'() {
      this.checkbox = false;
    }
  }
}
</script>

<style scoped>
  .hamburger__line {
    display: block;
    padding: 1px 0;
    background-color: #FB8A5D;
    width: 100%;
  }
  .hamburger__line--w-50 {width: 50%;}
  #checkbox {display: none;}
  .mobile-nav {transform: translateY(100%); z-index: -1;}
  #checkbox:checked ~ .mobile-nav {
    transition: transform ease-in-out .3s;
    transform: translateX(0);
  }
  .hamburger__line {transition: transform ease-in-out .3s;}
  #checkbox:checked ~ .hamburger .hamburger__line:first-child {
    transform: rotate(40deg) translate(5px, 10px);
  }
  #checkbox:checked ~ .hamburger .hamburger__line:last-child {
    width: 100%;
    transform: rotate(-40deg) translate(5px, -10px);
  }
  #checkbox:checked ~ .hamburger .hamburger__line:nth-child(2) {
    opacity: 0;
  }
  nav.hidden a {
    border-bottom: 2px solid transparent;
  }

  nav .nuxt-link-exact-active,
  nav.hidden a.nuxt-link-exact-active {
    transition: border ease-in-out .3s;
    border-bottom: 2px solid #FB8A5D;
  }
</style>
