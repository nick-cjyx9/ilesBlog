import { computed } from 'vue'
import { usePosts } from '~/composables/usePosts'

export function useTags () {
    const tags: string[] = []
    usePosts().value.forEach((post) => {
        if (post.frontmatter.tags?.length > 0) {
            post.frontmatter.tags.forEach((tag: string) => {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            })
        }
    })
    return computed(() => tags.sort())
}
