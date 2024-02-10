<template>
    <div class="z-50 fixed right-9 bottom-9 rounded-full p-1 shadow-md toTop">
    <div class="font-semibold p-2.5 rounded-sm bg-accent-success text-primary-lg hover:bg-accent-y cursor-pointer transition" @click="scrollTop">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
        >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>
    </div>
    </div>
</template>
<script lang="ts">
export default {
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
