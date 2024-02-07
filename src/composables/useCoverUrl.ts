import type { ImageAttrs } from 'vite-plugin-image-presets'

const covers = import.meta.glob<ImageAttrs[]>("@/images/cover/**", {
  eager: true,
  as: "preset=cover", // use whatever preset you want
  import: 'default', // to simplify "unwrapping" the imports
});

export function useCoverUrl(file:String){
    return covers['/src/images/cover/'+file][3]['src'];
}