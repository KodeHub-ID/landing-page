<script setup>
  import DeveloperActivity from './components/icons/DeveloperActivity.vue';
  import CircleCorner from './components/CircleCorner.vue';
  import HeaderPage from './components/HeaderPage.vue';
  import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <CircleCorner />

  <main class="container m-auto flex flex-col justify-between h-full overflow-x-hidden py-10 px-5">
    <HeaderPage />

    <article class="flex justify-between">
      <section class="flex flex-col justify-center text-neutral-400 gap-2">
        <h1 class="text-heading-2 text-neutral-500 sm:text-heading-1">Coming Soon</h1>
        <p>Make your spare time more meaningful by studying with us.</p>
        <p class="font-bold">#EnjoyWithKodeHub!</p>
      </section>
      <section class="hidden sm:block">
        <DeveloperActivity class="w-72 sm:w-96 h-fit" />
      </section>
    </article>

    <FooterPage />
  </main>
</template>

<!-- <style scoped>
</style> -->
