import { computed } from 'vue'
import { usePosts } from '~/composables/usePosts'

export function useTagsCounter () {
    const tags_list = []
    usePosts().value.forEach((post) => {
        if (post.frontmatter.tags?.length > 0) {
            post.frontmatter.tags.forEach((tag) => {
                const tmp = tags_list.findIndex(obj => obj[0]==tag);
                if (tmp==-1) {
                    tags_list.push([tag, 1]);
                }else{
                    tags_list[tmp][1]++;
                }
            })
        }
    })
    return tags_list;
}
export function useTags () {
    const tags_list = []
    usePosts().value.forEach((post) => {
        if (post.frontmatter.tags?.length > 0) {
            post.frontmatter.tags.forEach((tag) => {
                if (!(tag in tags_list)) {
                    tags_list.push(tag);
                }
            })
        }
    })
    return tags_list;
}
