export interface ContextDataType {
  title: string
  id: number
  postLink: string
  likes: string
  aiSummary: string
  comments: object[]
}

export async function getBlogContext(id: number) {
  const api_base = `https://dynablog.nickchen.top/api/blog/${id}/context`
  try {
    return await ((await fetch(api_base)).json())
  }
  catch {
    return null
  }
}

export async function like(id: number) {
  const api_base = `https://dynablog.nickchen.top/api/blog/${id}/like`
  try {
    const data = await ((await fetch(api_base, { method: 'POST' })).json())
    return data
  }
  catch {
    return null
  }
}
