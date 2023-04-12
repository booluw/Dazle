<template>
  <div>
    <section
      class="flex flex-col md:flex-row items-center p-5 md:p-20 bg-white gap-10 mb-10 md:mb-0"
    >
      <div class="md:w-1/2 mt-5">
        <h2 class="text-secondary text-2xl md:text-4xl font-bold mb-4 heading">
          Our Services
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
        src="~/assets/imgs/ServicesGroup.png"
        class="w-full md:w-1/2 h-auto scaleUp"
      />
    </section>
    <section class="flex flex-col md:flex-row p-5 md:p-20 bg-white gap-10">
      <div class="md:w-1/2">
        <h2 class="text-secondary text-2xl md:text-4xl font-bold mb-4 header">
          Program Management
        </h2>
        <p class="">
          We provide comprehensive program management services, designed to
          provide end-to-end support throughout the project lifecycle, from
          planning to execution and even after.
        </p>
        <img src="~/assets/imgs/Frame 132.png" class="w-full h-auto mt-4 scaleUp" />
      </div>
      <div class="md:w-1/2 flex flex-col justify-start items-start">
        <p class="md:my-5 md:order-2">
          Our EVM/PM services include: Program planning and design, Project
          management, Risk management, Change management, Stakeholder
          management, Budget management, Quality management, Cost/Schedule
          management, Reporting and communication.
        </p>
        <img
          src="~/assets/imgs/Frame 132-1.png"
          class="w-full h-auto md:order-1 my-4 md:my-0 scaleUp"
        />
        <nuxt-link
          to="/our-services"
          class="inline-block bg-primary text-white text-center py-4 px-10 rounded-lg hover:opacity-75 hover:transition hover:-translate-y-1 md:order-3"
        >
          Read More
        </nuxt-link>
      </div>
    </section>

    <section class="flex flex-col md:flex-row p-5 md:p-20 bg-white gap-10">
      <div class="md:w-1/2">
        <h2 class="text-secondary text-2xl md:text-4xl font-bold mb-4 header">
          Control Account Management
        </h2>
        <p class="">
          We provide excellent control account management services, designed to
          help organizations manage their finances and control their expenses.
        </p>
        <img src="~/assets/imgs/Frame 132CAM.png" class="w-full h-auto mt-4 scaleUp" />
      </div>
      <div class="md:w-1/2 flex flex-col justify-start items-start">
        <p class="md:my-5 md:order-2">
          Our services are comprehensive, designed to provide end-to-end support
          throughout the financial lifecycle, from budgeting, Estimate At
          Completion/Latest Revised Estimate/Estimate To Completion and
          forecasting to expense tracking and reporting. Our CAM services
          include: Budgeting and Forecasting, Expense Management, Financial
          Analysis, Audit and Compliance and System Implementation.
        </p>
        <img
          src="~/assets/imgs/Frame 132CAM-1.png"
          class="w-full h-auto md:order-1 my-4 md:my-0 scaleUp"
        />
        <nuxt-link
          to="/our-services"
          class="inline-block bg-primary text-white text-center py-4 px-10 rounded-lg hover:opacity-75 hover:transition hover:-translate-y-1 md:order-3"
        >
          Read More
        </nuxt-link>
      </div>
    </section>

    <section class="flex flex-col md:flex-row p-5 md:p-20 bg-white gap-10">
      <div class="md:w-1/2">
        <h2 class="text-secondary text-2xl md:text-4xl font-bold mb-4 header">
          Integrated Product Team
        </h2>
        <p class="">
          Dantzle & Associates provides diverse Integrated Product Team (IPT)
          services to help our clients maximize their product development
          potential. We understand how challenging it is to bring a product to
          the market, so we work closely with our clients to provide tailored
          solutions to their unique needs.
        </p>
        <img src="~/assets/imgs/Frame 132IPT.png" class="w-full h-auto mt-4 scaleUp" />
      </div>
      <div class="md:w-1/2 flex flex-col justify-start items-start">
        <p class="md:my-5 md:order-2">
          Our IPT services are also comprehensive and we provide support
          throughout the development lifecycle, from ideation to launch and
          beyond. Here are some of the services we offer: Product Development
          and Management, Cross-Functional Collaboration, Technical Consulting
          and Training.
        </p>
        <img
          src="~/assets/imgs/Frame 132IPT-1.png"
          class="w-full h-auto md:order-1 my-4 md:my-0 scaleUp"
        />
        <nuxt-link
          to="/our-services"
          class="inline-block bg-primary text-white text-center py-4 px-10 rounded-lg hover:opacity-75 hover:transition hover:-translate-y-1 md:order-3"
        >
          Read More
        </nuxt-link>
      </div>
    </section>
    
    <section class="px-5 py-10 md:p-40 bg-gray-200">
      <h2 class="text-4xl md:text-6xl text-secondary font-bold mb-5 header">
        Ready to work with us?
      </h2>
      <a href="mailto:" class="text-2xl hover:text-primary transition">
        Start a project &rarr;
      </a>
    </section>
  </div>
</template>

<script>
import { animation } from '~/assets/animation';
export default {
  mixins: [animation],
  head: {
    title: 'Services | Datzle',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `We offer a wide range of financial analysis services, including financial cost analysis, PMO/CAM/IPT support, WBS structure creation/maintenance, IBR/JSR cost preparation, and BCR change control. Our team has a wealth of experience in these areas, and we are constantly updating our skills and knowledge to stay ahead of the curve.`
      }
    ],
  },
}
</script>

<style></style>
