import { useColorMode } from '@vueuse/core';

const theme = useColorMode();

export default function useTheme() {
  return theme;
}
function setGiscusTheme(theme:string){
  let giscus = document.querySelector("#comments")?.shadowRoot?.querySelector("iframe");
  giscus?.contentWindow?.postMessage({
      giscus: {
          setConfig: { theme: theme, }
          ,
      },
  }, "https://giscus.app");
  giscus?.addEventListener('load',()=>{
      giscus?.contentWindow?.postMessage({
          giscus: {
              setConfig: { theme: theme, }
              ,
          },
      }, "https://giscus.app");
  })
}
export function toLight(){
  document.querySelector("html")?.classList.remove("dark");
  document.querySelector("html")?.classList.remove("!bg-slate-900");
  document.querySelector("#artibody")?.classList.remove("markdown-body-dark");
  document.querySelector("#artibody")?.classList.add("markdown-body");
  setGiscusTheme('light');
}
export function toDark(){
  document.querySelector("html")?.classList.add("dark");
  document.querySelector("html")?.classList.add("!bg-slate-900");
  document.querySelector("#artibody")?.classList.remove("markdown-body");
  document.querySelector("#artibody")?.classList.add("markdown-body-dark");
  setGiscusTheme('dark');
}
