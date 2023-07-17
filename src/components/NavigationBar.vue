<template>
  <nav class="flex space-x-4 shadow flex-wrap justify-center whitespace-nowrap lg:px-24 sm:px-5 py-0.5 sm:flex-nowrap">
    <div class="rounded-lg p-3 text-slate-700 font-medium hover:bg-indigo-100 flex items-center text-xl font-serif">
        <span>Rina Chan's Blog</span>
    </div>
    <ul class="flex">
      <li class="rounded-lg p-3 text-slate-700 font-medium hover:bg-indigo-100 flex items-center text-xl">
        <a href='/'>主页</a>
      </li>
      <li class="rounded-lg p-3 text-slate-700 font-medium hover:bg-indigo-100 flex items-center text-xl">
        <a href='/archive'>归档</a>
      </li>
      <li class="rounded-lg p-3 text-slate-700 font-medium hover:bg-indigo-100 flex items-center text-xl">
        <a href='/tag'>标签</a>
      </li>
      <li class="rounded-lg p-3 text-slate-700 font-medium hover:bg-indigo-100 flex items-center text-xl">
        <a href='/about'>关于</a>
      </li>
    </ul>
    <div class="sm:basis-full"></div>  
    <ul class="flex">
      <li class="rounded-lg p-3 hover:bg-indigo-100 flex items-center">
        <a href='/search'><i class="fa-solid fa-magnifying-glass"></i></a>
      </li>
      <li class="rounded-lg p-3 hover:bg-indigo-100 flex items-center">
        <a href='/feed.xml'><i class="fa-solid fa-square-rss"></i></a>
      </li>
    </ul>
  </nav>
</template>

