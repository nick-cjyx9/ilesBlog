<template>
</template>
<script setup lang="ts">
let style = document.createElement('style');
style.innerText = `html,body {display: block;width: 100%;height: 100%;padding: 0;margin: 0;}@media only screen and (max-width: 600px) {body {background: url('/404_hor.png') center no-repeat;background-size: cover;}}@media only screen and (min-width: 601px) and (max-width: 1024px) {body {background: url('/404.png') center no-repeat;background-size: cover;}}@media only screen and (min-width: 1024px) {body {background: url('/404.png') center no-repeat;background-size: cover;}}`;
document.body.appendChild(style);
</script>
