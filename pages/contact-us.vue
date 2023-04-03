<template>
  <div class="">
    <section
      class="flex flex-col md:flex-row items-center p-5 md:p-20 bg-white gap-10 mb-10 md:mb-0"
    >
      <div class="md:w-1/2 mt-5">
        <h2 class="text-secondary text-2xl md:text-4xl font-bold mb-4">
          Contact Us
        </h2>
        <p class="">
          We offer a wide range of financial analysis services, including
          financial cost analysis, PMO/CAM/IPT support, WBS structure
          creation/maintenance, IBR/JSR cost preparation, and BCR change
          control. Our team has a wealth of experience in these areas, and we
          are constantly updating our skills and knowledge to stay ahead of the
          curve.
        </p>
      </div>
      <img
        src="~/assets/imgs/Group 5CU.png"
        class="w-full md:w-1/2 h-auto"
      />
    </section>
    <section class="relative mb-[500px] md:mb-[600px]">
      <div class="p-5 md:px-20 py-40 gap-10 mb-10 md:mb-0 bg-primary h-[550px]"></div>
      <div class="p-5 md:p-10 absolute top-[350px] right-5 md:right-52 left-5 md:left-52 bg-white rounded-xl shadow-md">
        <h2 class="text-secondary text-2xl md:text-3xl font-bold mb-2 text-center">Connect With Our Sales Team</h2>
        <p class="text-center text-sm text-gray-400">Archito Group se présente comme un outil pluridisciplinaire et</p>
        <form class="md:w-1/2 mx-auto my-10" @submit.prevent="">
          <input v-model="message.name" type="text" class="border rounded-lg w-full p-3" placeholder="Name" />
          <input v-model="message.email" type="email" class="border rounded-lg w-full p-3 mt-5" placeholder="Email" />
          <input v-model="message.number" type="tel" class="border rounded-lg w-full p-3 my-5" placeholder="Phone Number" />
          <textarea
            v-model="message.message"
            class="border rounded-lg w-full h-28 p-3"
            placeholder="Your message"
          >
          </textarea>
          
        <button
          type="submit"
          class="mt-5 block w-full bg-primary text-white text-center py-4 px-10 rounded-lg hover:opacity-75 hover:transition hover:-translate-y-1"
        >
          Submit
        </button>
        </form>
      </div>
    </section>
    <section class="flex justify-between items-center flex-col md:flex-row p-5 md:p-20 bg-white gap-10">
      <div class="md:w-1/2">
        <h2 class="text-secondary text-2xl md:text-3xl font-bold">Subscribe to our newsletter</h2>
        <p class="text-gray-400">Never miss the latest news</p>
        <div class="flex mt-5 shadow-md rounded-xl">
          <input v-model="email" type="text" class="w-full border p-3 rounded-l-xl" placeholder="Enter Email" />
          <button class="bg-primary px-5 rounded-r-xl text-white">&rarr;</button>
        </div>
      </div>
      <img src="~/assets/imgs/Frame 150.png" class="md:w-1/3 h-auto" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        name: "",
        email: "",
        number: "",
        message: ""
      },
      email: "",
    }
  },
}
</script>

<style>

</style>