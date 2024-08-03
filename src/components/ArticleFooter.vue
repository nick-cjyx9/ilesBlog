<script setup lang="ts">
defineProps(['isAIGenerated', 'isLicensed'])
</script>

<template>
  <footer v-if="isAIGenerated === false || isLicensed === true" class="w-full flex flex-wrap mt-[28px]">
    <!-- <div v-if="!isAIGenerated" class="w-full mr-10 mt-1"> -->
    <!-- <NotGenerateByAI :is-light="true" class="w-full flex dark:hidden justify-end float-right" /><NotGenerateByAI :is-light="false" class="w-full dark:flex hidden justify-end float-right" /> -->
    <!-- </div> -->
    <div v-if="isLicensed" class="w-full text-end px-10">
      © LICENSED UNDER <a
        href="http://creativecommons.org/licenses/by-sa/4.0/deed.zh" target="_blank"
        class="hint w-auto h-full inline-block after:border-b-2 munderline"
      >CC BY-SA 4.0</a>
    </div>
  </footer>
</template>
