<template>
  <footer class="footer text-center flex items-center flex-col 
    py-4 shadow mt-4 mb-12 bg-slate-100 dark:bg-slate-800 lg:px-96 nl:px-64 sm:px-36 px-12">
    <nav class="flex flex-wrap text-sm font-medium space-x-6 my-6 dark:text-white opacity-80">
      <a href="https://nickchen.pages.dev" class="inline-block munderline after:border-b-2 ">
        <i class="fa-solid fa-house"></i>
        主页</a><a href="mailto:cjyx9@outlook.com" class="inline-block munderline after:border-b-2 ">
        <i class="fa-solid fa-envelope"></i>
        邮箱</a>
      <a href="https://github.com/nick-cjyx9" class="inline-block munderline after:border-b-2 ">
        <i class="fa-brands fa-square-github"></i>
        Github</a>
      <a href="/feed.rss" class="inline-block munderline after:border-b-2 ">
        <i class="fa-solid fa-square-rss"></i>
        RSS</a>
    </nav>

      <ul class="text-start opacity-80 text-sm dark:text-white w-full space-y-0.5">
        <li>
          <i class="fa-solid fa-signal w-5 text-center"></i> <span>有 <span id="active"><i class="fa-solid fa-spinner animate-spin"></i></span>
          个小伙伴在线</span>
        </li>
        <li>
          <i class="fa-solid fa-eye w-5 text-center"></i> <span>共 <span id="pv">
            <i class="fa-solid fa-spinner animate-spin"></i> 
          </span> 次总浏览量</span>
        </li>
        <li>
          <i class="fa-solid fa-user w-5 text-center"></i> <span>共 <span id="uv">
            <i class="fa-solid fa-spinner animate-spin"></i>
          </span> 个访客到达过这里</span>
        </li>
        <li>
          <i class="fa-solid fa-location-dot w-5 text-center"></i> <span>你可以到
          <a data-umami-event="goto umami share" href="https://umami.kanata-blog.eu.org/share/ofBFLDZwCthMZzRP/blog"
            target="_blank" class="underline">这里</a> 看看博客的数据。</span>
        </li>
      </ul>
      <!-- fontawesome 吃相难看，早日润 iconify -->

    <span class="font-serif dark:text-white w-full text-end opacity-50 pr-2 my-4">&copy; 2023 <a
        data-umami-event="goto my github profile" class="font-serif inline-block munderline after:border-b-2 "
        href="https://github.com/nick-cjyx9" target="_blank">Nick Chen</a></span>
  </footer>
</template>
