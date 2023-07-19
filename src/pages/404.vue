<template></template>
<style>
    html,
    body {
        display: block;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    /* 手机屏幕适应 */
    @media only screen and (max-width: 600px) {
        body {
            background: url('/404_hor.png') center no-repeat;
            background-size: cover;
        }
    }

    /* 平板屏幕适应 */
    @media only screen and (min-width: 601px) and (max-width: 1024px) {
        body {
            background: url('/404.png') center no-repeat;
            background-size: cover;
        }
    }

    /* 桌面屏幕适应 */
    @media only screen and (min-width: 1024px) {
        body {
            background: url('/404.png') center no-repeat;
            background-size: cover;
        }
    }

</style>
<style lang="scss">
@import '~/assets/base.css';
</style>

