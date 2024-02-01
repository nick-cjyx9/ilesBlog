<template>
    <div class="w-full h-96" id="container"></div>
    <GiscusComment vlient:idle/>
</template>
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
