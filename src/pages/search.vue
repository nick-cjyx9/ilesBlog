<template layout="base">
    <div class="holder w-full min-h-[500px] p-8">
        <form class="w-full mx-auto" id="searchForm">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="searchBox"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="输入关键词搜索博文" required />
                <button type="submit"
                    class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>

        <div class="flex flex-col text-important p-8">
            搜索结果
            <ul class="list-none" id="searchContainer">
                🥰请输入搜索内容...
            </ul>
            <small class="text-minor w-full text-end mt-3">Build with <a href="https://www.fusejs.io/"
                    class="text-link">fuse.js</a> - 高级语法参见<a href="https://www.fusejs.io/api/query.html"
                    class="text-link">此处</a></small>
        </div>
    </div>
    <!-- tailwind -->
    <div class="hidden px-4 break-all h-[100px] overflow-hidden text-ellipsis">${processedContent}</div>
    <li class="hidden w-full text-minor-link px-3 py-1" role="button"><a
            href="/post/${result['item']['pathName'].replace('.mdx','')}" class="w-full">${counter} - <span
                class="underline">${processedTitle}</span></a></li>
</template>
<script client:load lang="ts">
import Fuse from 'fuse.js'
import type { FuseResult } from 'fuse.js'
const fuseOptions = { keys: ["title", "content", "tags"], includeMatches: true };
const list = await (await fetch('/fuse/data.json')).json()
const fuse = new Fuse(list, fuseOptions);
const searchForm = document.getElementById('searchForm')
interface fuseItem {
    title: string | undefined,
    pathName: string,
    content: string,
    tags: string | undefined
}
if(searchForm) searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchPattern = (document.getElementById('searchBox')as HTMLInputElement | null)!.value;
    let results:Array<FuseResult<fuseItem>> = fuse.search(searchPattern)
    const container = document.getElementById('searchContainer')
    let counter = 1
    let injectHtml = ``
    results.forEach(result => {
        let processedTitle = result['item']['title']
        let processedContent = result['item']['content']
        let hasDiff = false
        if (result['matches'])
        result['matches'].forEach((match) => {
            if (match['key'] == 'title') for (let indice of [...match['indices']].reverse())
                processedTitle = processedTitle!.slice(0, indice[0]) + `<span style="color:chocolate;">${processedTitle!.slice(indice[0], indice[1] + 1)}</span>` + processedTitle!.slice(indice[1] + 1, processedTitle!.length)
            if (match['key'] == 'content') {
                for (let indice of [...match['indices']].reverse())
                    processedContent = processedContent.slice(0, indice[0]) + `<span style="color:chocolate;">${processedContent.slice(indice[0], indice[1] + 1)}</span>` + processedContent.slice(indice[1] + 1, processedContent.length); hasDiff = true
            }
        })
        if (!hasDiff) processedContent = ''
        else processedContent = `<div class="px-4 break-all h-[100px] overflow-hidden text-ellipsis">${processedContent}</div>`
        injectHtml += `\n<li class="w-full text-minor-link px-3 py-1" role="button"><a href="/post/${result['item']['pathName'].replace('.mdx', '')}" class="w-full">${counter} - <span class="underline">${processedTitle}</span></a></li>${processedContent}`
        counter++
    });
    container!.innerHTML = injectHtml.trim() === '' ? "暂无内容" : injectHtml
})
</script>