<template>
  <nav class="flex space-x-4 shadow flex-wrap justify-center whitespace-nowrap lg:px-24 sm:px-5 py-0.5 sm:flex-nowrap">
    <div class="navtab font-serif">
      <a href='/'>Rina Chan's Blog</a>
    </div>
    <ul class="flex flex-wrap flex-row w-full justify-center wp:justify-normal">
      <li class="navtab">
        <a href='/'>主页</a>
      </li>
      <li class="navtab">
        <a href='/archive'>归档</a>
      </li>
      <li class="navtab">
        <a href='/tags'>标签</a>
      </li>
      <li class="navtab">
        <a href='/girls'>老婆们</a>
      </li>
      <li class="navtab">
        <a href='/about'>关于</a>
      </li>
    </ul>
    <!-- <div class="sm:basis-full"></div>   -->
    <ul class="flex">
      <li class="rounded-lg p-3 hover:bg-indigo-100 flex items-center">
        <a href='/search'><i class="fa-solid fa-magnifying-glass"></i></a>
      </li>
      <li class="rounded-lg p-3 hover:bg-indigo-100 flex items-center">
        <a href='/feed.rss'><i class="fa-solid fa-square-rss"></i></a>
      </li>
    </ul>
  </nav>
</template>

