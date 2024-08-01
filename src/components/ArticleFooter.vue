<script setup lang="ts">
defineProps(['isAIGenerated', 'isLicensed'])
</script>

<template>
  <footer v-if="isAIGenerated === false || isLicensed === true" class="w-full flex flex-wrap space-y-7">
    <div v-if="!isAIGenerated" class="w-full">
      <NotGenerateByAI :is-light="true" class="w-full flex justify-center dark:hidden" /><NotGenerateByAI :is-light="false" class="w-full dark:flex justify-center hidden" />
    </div>
    <div v-if="isLicensed" class="w-full text-center">
      © LICENSED UNDER <a
        href="http://creativecommons.org/licenses/by-sa/4.0/deed.zh" target="_blank"
        class="hint w-auto h-full inline-block after:border-b-2 munderline"
      >CC BY-SA 4.0</a>
    </div>
  </footer>
</template>
