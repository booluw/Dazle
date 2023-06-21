<template>
  <div class="">
    <section
      class="flex flex-col items-center md:flex-row gap-10 py-10 px-5 md:py-0 md:px-20"
    >
      <div class="md:w-1/2 flex flex-col gap-5">
        <h1
          class="font-bold text-4xl md:text-6xl text-secondary heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          Comprehensive Program Management Solutions, Every time You Need It.
        </h1>
        <p class="">
          We are a group of Earned Value Management experts who provide
          comprehensive Project management analysis to help your team make
          informed decisions and achieve your program goals.
        </p>
        <div class="flex flex-col md:flex-row gap-5 md:gap-10 md:w-2/3">
          <nuxt-link
            to="#about-us"
            class="scale block md:w-1/2 bg-primary bg-gradient-to-l to-primary from-secondary text-white p-3 rounded-lg text-center hover:transition hover:from-primary hover:to-secondary"
          >
            Learn More
          </nuxt-link>
          <div
            class="scale md:w-1/2 p-[1px] bg-gradient-to-r from-primary to-secondary rounded-lg hover:transition hover:to-primary hover:from-secondary"
          >
            <nuxt-link
              to="/our-services"
              class="block bg-white text-primary p-3 rounded-lg text-center"
            >
              <span
                class="text-secondary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:transition hover:to-primary hover:from-secondary"
              >
                Explore Services
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <img src="~/assets/imgs/Group 14.png" class="md:w-1/2 scaleUp" />
    </section>
    <section
      class="flex flex-wrap justify-between p-5 md:px-10 md:py-20 bg-white"
    >
      <div
        class="w-1/2 md:w-1/3 p-5 flex flex-col items-center border-r scaleUp"
      >
        <img
          src="~/assets/svgs/Community.svg"
          class="w-10 md:w-14 mb-3 md:mb-5"
        />
        <h3 class="text-xl md:text-2xl font-bold">10+</h3>
        <p class="uppercase text-xs opacity-75">satisfied clients</p>
      </div>
      <div
        class="w-1/2 md:w-1/3 p-5 flex flex-col items-center md:border-r scaleUp"
      >
        <img
          src="~/assets/svgs/Apartmant.svg"
          class="w-10 md:w-14 mb-3 md:mb-5"
        />
        <h3 class="text-xl md:text-2xl font-bold">40+</h3>
        <p class="uppercase text-xs opacity-75">successful projects</p>
      </div>
      <div
        class="w-1/2 md:w-1/3 p-5 mt-5 md:mt-0 flex flex-col items-center scaleUp"
      >
        <img
          src="~/assets/svgs/Building.svg"
          class="w-10 md:w-14 mb-3 md:mb-5"
        />
        <h3 class="text-xl md:text-2xl font-bold">20+</h3>
        <p class="uppercase text-xs opacity-75">years experience</p>
      </div>
    </section>
    <section
      class="flex flex-wrap justify-center items-center gap-5 p-5 md:px-10 md:py-20 bg-white"
    >
      <img
        src="~/assets/imgs/image 4.png"
        class="w-52 h-auto transition grayscale hover:grayscale-0"
      />
      <img
        src="~/assets/imgs/image 5.png"
        class="w-52 h-auto transition grayscale hover:grayscale-0"
      />
    </section>
    <section
      class="px-5 py-10 flex flex-col md:flex-row gap-5 md:gap-10 md:p-20 bg-gray-200"
    >
      <div class="md:w-1/2 md:mt-10">
        <h2 class="text-secondary text-2xl md:text-4xl font-bold header">
          Our Services
        </h2>
        <p class="my-5">
          We offer a wide range of Earned Value Management (EVMS) analysis,
          including cost/schedule analysis, PMO/CAM/IPT support, WBS structure
          creation and/or maintenance, Integrated Baseline/Joint Surveillance
          Review preparation, Baseline Change Control, and other various program
          related efforts. Our team has a wealth of experience in the referenced
          areas, and we are constantly updating our skills and knowledge to stay
          ahead of the curve.
        </p>
        <nuxt-link
          to="/our-services"
          class="block w-2/3 md:w-1/4 bg-primary bg-gradient-to-l to-primary from-secondary text-white p-3 rounded-lg text-center hover:transition hover:from-primary hover:to-secondary text-white text-center p-4 rounded-lg hover:transition"
        >
          Explore All
        </nuxt-link>
      </div>
      <div
        class="md:w-1/2 flex gap-5 md:gap-10 overflow-x-auto pb-4 pl-14 md:pl-0 scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-xl scrollbar-track-transparent"
      >
        <div
          class="w-64 md:w-1/2 bg-white shadow-lg rounded-xl p-8 flex-shrink-0 hover:bg-secondary hover:text-white transition flex flex-col gap-4"
        >
          <svg
            width="32"
            height="47"
            viewBox="0 0 52 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.6 35.1999H33.15C42.1247 35.1999 49.4 27.9245 49.4 18.9499C49.4 9.97517 42.1247 2.69985 33.15 2.69985H18.85C9.87532 2.69985 2.6 9.97517 2.6 18.9499C2.6 29.2387 9.38171 35.5297 16.8011 39.3939C20.486 41.3131 24.1977 42.5534 27.0046 43.3137C27.5794 43.4693 28.1138 43.6042 28.6 43.7203V35.1999ZM31.2 46.8999C31.2 46.8999 30.2171 46.7565 28.6 46.3899C21.1071 44.6908 0 38.1964 0 18.9499C0 8.53932 8.43947 0.0998535 18.85 0.0998535H33.15C43.5605 0.0998535 52 8.53932 52 18.9499C52 29.3604 43.5605 37.7999 33.15 37.7999H31.2V46.8999Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.0001 20.9001C26.7181 20.9001 27.3001 20.3181 27.3001 19.6001C27.3001 18.8821 26.7181 18.3001 26.0001 18.3001C25.2821 18.3001 24.7001 18.8821 24.7001 19.6001C24.7001 20.3181 25.2821 20.9001 26.0001 20.9001ZM26.0001 23.5001C28.1541 23.5001 29.9001 21.7541 29.9001 19.6001C29.9001 17.4461 28.1541 15.7001 26.0001 15.7001C23.8461 15.7001 22.1001 17.4461 22.1001 19.6001C22.1001 21.7541 23.8461 23.5001 26.0001 23.5001Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.3998 20.9001C37.1177 20.9001 37.6998 20.3181 37.6998 19.6001C37.6998 18.8821 37.1177 18.3001 36.3998 18.3001C35.6818 18.3001 35.0998 18.8821 35.0998 19.6001C35.0998 20.3181 35.6818 20.9001 36.3998 20.9001ZM36.3998 23.5001C38.5537 23.5001 40.2998 21.7541 40.2998 19.6001C40.2998 17.4461 38.5537 15.7001 36.3998 15.7001C34.2458 15.7001 32.4998 17.4461 32.4998 19.6001C32.4998 21.7541 34.2458 23.5001 36.3998 23.5001Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.6 20.9001C16.3179 20.9001 16.9 20.3181 16.9 19.6001C16.9 18.8821 16.3179 18.3001 15.6 18.3001C14.882 18.3001 14.3 18.8821 14.3 19.6001C14.3 20.3181 14.882 20.9001 15.6 20.9001ZM15.6 23.5001C17.7539 23.5001 19.5 21.7541 19.5 19.6001C19.5 17.4461 17.7539 15.7001 15.6 15.7001C13.446 15.7001 11.7 17.4461 11.7 19.6001C11.7 21.7541 13.446 23.5001 15.6 23.5001Z"
              fill="currentColor"
            />
          </svg>

          <h3 class="font-bold text-xl">Program Management</h3>
          <p class="">
            We provide comprehensive program management services, designed to
            provide end-to-end support throughout the project lifecycle, from
            planning to execution and even after.
          </p>
          <router-link to="/our-services" class="font-semibold">
            Learn More...
          </router-link>
        </div>
        <div
          class="w-64 md:w-1/2 bg-white shadow-lg rounded-xl p-8 flex-shrink-0 hover:bg-secondary hover:text-white transition flex flex-col gap-4"
        >
          <svg
            width="32"
            height="56"
            viewBox="0 0 60 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.9292 14.8984V15.6341C24.9292 22.1501 20.8305 27.5099 15.7859 27.5099C10.7413 27.5099 6.64258 22.15 6.64258 15.6341C6.64258 15.424 6.64258 15.2138 6.64258 14.8984"
              stroke="currentColor"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M4.84631 10.1227C5.45594 1.2826 12.1622 1.18099 15.5154 1.68902C15.8202 1.79062 16.7348 1.68902 17.0396 1.68902C23.1363 0.876175 26.1845 7.78567 26.1845 10.8339C26.1845 11.9517 26.4423 14.6804 24.9181 16.2046C24.9181 16.2046 21.2055 11.9517 21.0023 9.51296C21.0023 9.51296 9.41866 13.8822 8.60582 10.1226C8.60582 10.1226 7.79298 13.1709 7.08162 13.9838C7.08162 13.9838 6.70583 16.3208 6.70583 17.0321C6.70606 17.0323 4.5415 13.9839 4.84631 10.1227V10.1227Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.3573 15.9628C14.3573 16.7791 13.745 17.3914 12.9286 17.3914C12.1123 17.3914 11.5 16.7791 11.5 15.9628C11.5 15.1464 12.1123 14.5341 12.9286 14.5341C13.745 14.5341 14.3573 15.1464 14.3573 15.9628Z"
              fill="currentColor"
            />
            <path
              d="M20.0721 15.9628C20.0721 16.7791 19.4599 17.3914 18.6435 17.3914C17.8271 17.3914 17.2148 16.7791 17.2148 15.9628C17.2148 15.1464 17.8271 14.5341 18.6435 14.5341C19.4599 14.5341 20.0721 15.1464 20.0721 15.9628Z"
              fill="currentColor"
            />
            <path
              d="M13.6523 21.7152C14.9733 22.4264 16.599 22.4264 17.92 21.7152"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M46.2603 41.8904C47.1459 42.6247 48.4288 42.6247 49.3145 41.8904"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.2144 54.4789V52.4979C15.2144 49.6787 18.0737 47.3928 20.933 47.3928C24.3333 50.2121 27.7336 50.2121 31.2112 47.3928C34.0704 47.3928 36.9297 49.6787 36.9297 52.4979V54.4789"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M36.9307 54.4789V52.4979C36.9307 49.6787 39.79 47.3928 42.6494 47.3928C46.0496 50.2121 49.4499 50.2121 52.9275 47.3928C55.7868 47.3928 58.6462 49.6787 58.6462 52.4979V54.4789"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.2698 37.9084C29.3078 38.475 28.8792 38.9652 28.3123 39.0033C27.7456 39.0413 27.2553 38.6127 27.2172 38.0461C27.1791 37.4794 27.6077 36.9892 28.1746 36.9512C28.1976 36.9496 28.2206 36.9489 28.2436 36.9489C28.7918 36.9312 29.2509 37.3605 29.2698 37.9084Z"
              fill="currentColor"
            />
            <path
              d="M24.5454 41.8904C25.4311 42.6247 26.714 42.6247 27.5996 41.8904"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.901 36.9489C23.924 36.9489 23.9471 36.9497 23.9701 36.9512C24.5368 36.9892 24.9655 37.4794 24.9275 38.0461C24.8894 38.6127 24.3991 39.0412 23.8323 39.0033C23.2656 38.9652 22.8368 38.475 22.8749 37.9084C22.8938 37.3605 23.3529 36.9312 23.901 36.9489Z"
              fill="currentColor"
            />
            <path
              d="M50.9856 37.9084C51.0236 38.475 50.595 38.9652 50.0282 39.0033C49.4614 39.0413 48.9711 38.6127 48.933 38.0461C48.895 37.4794 49.3235 36.9892 49.8904 36.9512C49.9134 36.9496 49.9364 36.9489 49.9595 36.9489C50.5075 36.9312 50.9666 37.3605 50.9856 37.9084Z"
              fill="currentColor"
            />
            <path
              d="M45.6164 36.9489C45.6393 36.9489 45.6624 36.9497 45.6854 36.9512C46.2522 36.9892 46.6809 37.4794 46.6428 38.0461C46.6047 38.6127 46.1144 39.0412 45.5477 39.0033C44.9809 38.9652 44.5522 38.475 44.5902 37.9084C44.609 37.3605 45.0681 36.9312 45.6164 36.9489Z"
              fill="currentColor"
            />
            <path
              d="M33.5575 37.4132C33.5664 37.5744 33.5709 37.7367 33.571 37.9002C33.7352 42.1645 30.4188 45.7581 26.1551 45.936C21.8913 45.7581 18.575 42.1645 18.7392 37.9002C18.7392 37.7914 18.7412 37.6832 18.7452 37.5755"
              stroke="currentColor"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M23.3696 33.9882C23.9061 37.8319 28.4979 32.9932 28.4979 32.9932C29.1254 34.7918 33.5557 37.4133 33.5557 37.4133C34.7357 36.321 34.1568 34.1531 33.981 33.3975C33.3974 30.2971 30.4615 28.2173 27.3431 28.6951C26.9504 28.7266 26.5558 28.7266 26.1631 28.6951C23.5677 28.3101 19.2713 28.5256 18.0256 34.002C17.4179 36.6744 18.7387 37.4129 18.7387 37.4129C18.7387 37.4129 23.0407 31.6311 23.3696 33.9882V33.9882Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M55.1974 37.5755C55.2014 37.6832 55.2033 37.7914 55.2033 37.9002C55.3675 42.1645 52.0513 45.7581 47.7875 45.936C43.5237 45.7581 40.2073 42.1645 40.3716 37.9002C40.3717 37.7367 40.3761 37.5744 40.3851 37.4132"
              stroke="currentColor"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M55.2042 37.4129C55.2042 37.4129 56.525 36.6744 55.9173 34.002C54.6716 28.5256 50.3752 28.3101 47.7798 28.6951C47.3871 28.7266 46.9925 28.7266 46.5998 28.6951C43.4814 28.2173 40.5455 30.2971 39.9619 33.3975C39.7861 34.1531 39.2072 36.321 40.3872 37.4133C40.3872 37.4133 44.8175 34.7918 45.445 32.9932C45.445 32.9932 50.0368 37.8319 50.5733 33.9882C50.9022 31.6311 55.2042 37.4129 55.2042 37.4129V37.4129Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.5 54.2502V37.0553C1.5 33.2956 5.26225 30.2474 9.0245 30.2474C10.729 31.6797 12.4335 32.5664 14.1435 32.9073"
              stroke="currentColor"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3 class="font-bold text-xl">Control Account Management</h3>
          <p class="">
            We provide excellent control account management services, designed
            to help organizations manage their finances and control their
            expenses.
          </p>
          <router-link to="/our-services" class="font-semibold">
            Learn More...
          </router-link>
        </div>
        <div
          class="w-64 md:w-1/2 bg-white shadow-lg rounded-xl p-8 flex-shrink-0 hover:bg-secondary hover:text-white transition flex flex-col gap-4"
        >
          <svg
            width="32"
            height="57"
            viewBox="0 0 42 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.287 20.9938C41.287 9.54612 31.9974 0.350311 20.6435 0.350311C9.28952 0.350311 0 9.63983 0 20.9938C0 28.8758 4.7858 35.8197 11.2603 39.2908L9.38323 56.6497L20.6435 49.1435L31.9037 56.6497L30.0267 39.2908C36.5949 35.8188 41.287 28.8758 41.287 20.9938ZM20.6435 39.7603C10.2285 39.7603 1.87702 31.3151 1.87702 20.9938C1.87702 10.5788 10.3222 2.22733 20.6435 2.22733C30.9648 2.22733 39.41 10.6725 39.41 20.9938C39.4185 23.4606 38.9389 25.9048 37.9988 28.1855C37.0588 30.4662 35.6768 32.5384 33.9324 34.2827C32.1881 36.0271 30.1159 37.4091 27.8352 38.3492C25.5545 39.2892 23.1103 39.7688 20.6435 39.7603ZM29.0887 13.2992L31.9037 16.1143L19.236 28.7821L12.1983 21.7444L15.0134 18.9294L19.236 23.1519L29.0887 13.2992Z"
              fill="currentColor"
            />
          </svg>
          <h3 class="font-bold text-xl">Integrated Product Team</h3>
          <p class="">
            We understand how challenging it is to bring a product to the
            market, so we work closely with our clients to provide tailored
            solutions to their unique needs.
          </p>
          <router-link to="/our-services" class="font-semibold">
            Learn More...
          </router-link>
        </div>
      </div>
    </section>
    <section class="px-5 py-10 md:p-20 bg-white">
      <div class="md:w-1/3">
        <h2 class="text-secondary text-2xl md:text-4xl font-bold header">
          About Us
        </h2>
      </div>
      <div class="flex flex-col md:flex-row gap-5 gap-10 mt-5">
        <div class="md:w-1/2">
          <img
            src="~/assets/imgs/About-us.png"
            class="h-auto w-full rounded-xl scaleUp"
          />
        </div>
        <div class="md:w-1/2">
          <p class="mb-5">
            At Dantzle & Associates, we are dedicated to providing expert
            financial analysis services to businesses and organizations of all
            sizes. Our team of experienced professionals has a deep
            understanding of the financial challenges facing businesses today,
            and we work tirelessly to help our clients achieve their goals.
            <br /><br />
            With a team made up of made up of experienced professionals in
            diverse fields, we believe we have all the tools necessary to help
            your organization succeed. We have a diverse range of backgrounds
            and expertise, including finance, accounting, and project
            management. We believe that our team's diversity is one of our
            greatest strengths, as it allows us to approach each project from
            multiple perspectives and find the best solutions for our clients.
          </p>
          <nuxt-link
            to="/about-us"
            class="block w-2/3 md:w-1/4 bg-primary bg-gradient-to-l to-primary from-secondary text-white p-3 rounded-lg text-center hover:transition hover:from-primary hover:to-secondary text-white text-center p-4 rounded-lg hover:transition"
          >
            Learn More
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="px-5 py-10 md:p-40 bg-gray-200">
      <h2
        class="text-4xl md:text-6xl text-secondary font-bold mb-5 header text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
      >
        Ready to work with us?
      </h2>
      <a href="mailto:" class="text-2xl hover:text-primary transition">
        Start a project &rarr;
      </a>
    </section>
    <section
      class="flex justify-between items-center flex-col md:flex-row p-5 md:p-20 bg-white gap-10"
    >
      <div class="md:w-1/2">
        <h2 class="text-secondary text-2xl md:text-3xl font-bold header">
          Subscribe to our newsletter
        </h2>
        <p class="text-gray-400">Never miss the latest news</p>
        <div class="flex mt-5 shadow-md rounded-xl">
          <input
            v-model="email"
            type="text"
            class="w-full border p-3 rounded-l-xl"
            placeholder="Enter Email"
          />
          <button class="bg-primary px-5 rounded-r-xl text-white">
            &rarr;
          </button>
        </div>
      </div>
      <img src="~/assets/imgs/Frame 150.png" class="md:w-1/3 h-auto scaleUp" />
    </section>
  </div>
</template>

<script>
import { animation } from '~/assets/animation'

export default {
  name: 'IndexPage',
  mixins: [animation],
  data() {
    return {
      testimonial: 2,
    }
  },
  head: {
    title: 'Home | Datzle',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `At Dantzle & Associates, we are dedicated to providing expert financial analysis services to businesses and organizations of all sizes. Our team of experienced professionals has a deep understanding of the financial challenges facing businesses today, and we work tirelessly to help our clients achieve their goals.`,
      },
    ],
  },
  methods: {
    prev() {
      this.testimonial -= 1
    },
    next() {
      this.testimonial += 1
    },
  },
}
</script>
