<template>
    <div class="w-full h-full" id="container"></div>
</template>
<script client:load>
window.umami.track('404');
</script>
<style scoped>
@media only screen and (max-width: 600px) {
    #container {
        background: url('/404_hor.png') center no-repeat;
        background-size: cover;
    }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
    #container {
        background: url('/404.png') center no-repeat;
        background-size: cover;
    }
}

@media only screen and (min-width: 1024px) {
    #container {
        background: url('/404.png') center no-repeat;
        background-size: cover;
    }
}
</style>
