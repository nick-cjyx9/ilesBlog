<template>
    <div v-if="isShow" class="z-50 fixed right-9 bottom-9 rounded-full p-0.5 lg:p-1.5 shadow-md bg-slate-100 dark:bg-slate-800">
    <div class="dark:text-white font-semibold p-2.5 rounded-sm bg-accent-success text-primary-lg hover:bg-accent-y cursor-pointer transition" @click="scrollTop">
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
  data () {
    return {
      elTop: 0,
      isShow: false
    }
  },  
  mounted () {
    window.addEventListener('scroll', this.scrolling);
  },
  
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrolling () {
      const scrolltoTop = window.pageYOffset;
      const scrollLength = scrolltoTop - this.elTop;
      this.elTop = scrolltoTop;
      if (scrollLength < 0 && this.elTop < 1200) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
}
</script>
