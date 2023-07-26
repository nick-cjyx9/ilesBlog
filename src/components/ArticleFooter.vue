<script setup lang="ts">
const props=defineProps(['isAIGenerated','isLicensed']);
</script>
<template>
    <footer class="w-full flex flex-wrap space-y-7" v-if="isAIGenerated==false||isLicensed==true">
        <div class="w-full" v-if="!isAIGenerated"><NotGenerateByAI :is-light="true" class="w-full flex justify-center"/></div>
        <div class="w-full text-center" v-if="isLicensed">
            <i class="fa-regular fa-copyright"></i>
            LICENSED UNDER <a href="http://creativecommons.org/licenses/by-sa/4.0/deed.zh" target="_blank"
                class="w-auto h-full inline-block after:border-b-2 munderline hover:text-blue-400">CC BY-SA 4.0</a>
        </div>
    </footer>
</template>
