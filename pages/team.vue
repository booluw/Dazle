<template>
  <div class="">
    <section
      class="flex flex-col md:flex-row items-center p-5 md:p-20 bg-white gap-10 mb-10 md:mb-0"
    >
      <div class="md:w-1/2 mt-5">
        <h2 class="text-secondary text-2xl md:text-4xl font-bold mb-4">
          Our Team
        </h2>
        <p class="">
          Depuis plus de 10 ans, ROUSSEAU N°5 est une agence immobilière genevoise réputée pour la qualité de.
        </p>
      </div>
      <img
        src="~/assets/imgs/Group 5Team.png"
        class="w-full md:w-1/2 h-auto"
      />
    </section>
    <section v-for="i in 2" :key="i+20" class="flex flex-col md:flex-row justify-between p-5 md:p-20">
      <div
          v-for="i in 3"
          :key="i"
          class="md:w-1/3 mb-5 md:mr-10 overflow-hidden rounded-xl shadow"
        >
          <div class="px-5 py-32 bg-gray-500"></div>
          <div class="p-5">
            <div class="flex justify-between">
              <h3 class="font-bold">Name Surname</h3>
              &rarr;
            </div>
            <div class="">
              <p class="mb-4">Position</p>
              <div class="flex gap-4">
                <a href="mailto:" class="text-gray-600 hover:text-primary">
                  <svg
                    width="33"
                    height="24"
                    viewBox="0 0 33 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.868704 3.95638L16.6953 11.8697L32.5222 3.95628C32.4027 1.87746 30.6792 0.228516 28.5704 0.228516H4.82045C2.71168 0.228516 0.988048 1.87752 0.868704 3.95638Z"
                      fill="currentColor"
                    />
                    <path
                      d="M32.5287 8.3784L16.6953 16.2951L0.862061 8.37852V20.0201C0.862061 22.2062 2.63427 23.9784 4.82039 23.9784H28.5704C30.7566 23.9784 32.5287 22.2062 32.5287 20.0201V8.3784Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="mailto:" class="text-gray-600 hover:text-primary">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8112 0.228516H2.57352C1.60571 0.228516 0.820312 0.995443 0.820312 1.93983V22.2649C0.820312 23.2106 1.60571 23.9785 2.57352 23.9785H22.8112C23.7796 23.9785 24.5703 23.2106 24.5703 22.2649V1.93983C24.5703 0.995443 23.7796 0.228516 22.8112 0.228516ZM7.86417 20.4668H4.33993V9.13312H7.86417V20.4668ZM6.10205 7.58343C4.97293 7.58343 4.06021 6.66839 4.06021 5.54027C4.06021 4.41379 4.97293 3.49876 6.10205 3.49876C7.22852 3.49876 8.14356 4.41379 8.14356 5.54027C8.14356 6.66839 7.22852 7.58343 6.10205 7.58343ZM21.0573 20.4668H17.5387V14.9555C17.5387 13.6407 17.5129 11.9501 15.7076 11.9501C13.8742 11.9501 13.5948 13.3821 13.5948 14.8602V20.4671H10.0736V9.13312H13.453V10.6808H13.5012C13.9715 9.7902 15.1208 8.85043 16.8347 8.85043C20.3992 8.85043 21.0576 11.1971 21.0576 14.2499L21.0573 20.4668Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>
