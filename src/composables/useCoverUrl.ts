import type { ImageAttrs } from 'vite-plugin-image-presets'

const covers = import.meta.glob<ImageAttrs[]>('@/images/cover/**', {
  eager: true,
  as: 'preset=cover',
  import: 'default',
})

export function useCoverUrl(file: string) {
  return covers[`/src/images/cover/${file}`][3].src
}
