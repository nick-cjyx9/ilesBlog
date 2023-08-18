import { computed } from 'vue'

export function usePosts () {
    const posts = $(useDocuments<Document>('~/pages/post/*.md{,x}'))
    return computed(() => posts.sort((lhs,rhs)=>{
      return rhs.frontmatter.date - lhs.frontmatter.date;
    }))
} 
