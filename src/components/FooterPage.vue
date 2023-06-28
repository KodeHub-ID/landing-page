<template>
  <footer class="flex justify-center align-middle gap-5 md:gap-10 py-2 flex-col sm:flex-row">
    <div class="text-center my-auto">
      <p class="font-bold">Get Notified when We Launch!</p>
      <p class="text-neutral-400 text-sm">
        *don't worry, we will not spamming you ;)
      </p>
    </div>
    <form class="my-auto flex md:gap-3 justify-between border border-black rounded-xl p-2 bg-neutral-50">
      <input
        class="form-input p-0 border-none text-sm"
        type="text"
        placeholder="type your email"
      />
      <button class="shrink-0 bg-secondary-500 text-white py-2 px-4 rounded-xl hover:bg-secondary-400 text-sm">
        Notify Me
      </button>
    </form>
  </footer>
</template>
