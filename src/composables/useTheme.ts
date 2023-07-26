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
export function setLight(){
    document.cookie = 'theme=light;';
    document.querySelector("html")?.classList.remove("dark");
    document.querySelector("html")?.classList.remove("!bg-slate-900");
    document.querySelector("#artibody")?.classList.remove("markdown-body-dark");
    document.querySelector("#artibody")?.classList.add("markdown-body");
    setGiscusTheme('light');
}
export function setDark(){
    document.cookie = 'theme=dark;';
    document.querySelector("html")?.classList.add("dark");
    document.querySelector("html")?.classList.add("!bg-slate-900");
    document.querySelector("#artibody")?.classList.remove("markdown-body");
    document.querySelector("#artibody")?.classList.add("markdown-body-dark");
    setGiscusTheme('dark');
}
function getCookie(cname:string){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

export function useTheme(){
    let theme = getCookie('theme');
    // https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
    if(theme=='' && window.matchMedia){
        if(window.matchMedia('(prefers-color-scheme: dark)').matches)
        { theme='dark'; }else{ theme='light'; }
    }else{ theme='light'; }
    return theme;
}

export function initTheme(){
    let theme = getCookie('theme');
    console.log(theme);
    // https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
    if(theme=='' && window.matchMedia){
        if(window.matchMedia('(prefers-color-scheme: dark)').matches)
        { theme='dark'; setDark();return theme;}else{ theme='light'; setLight(); return theme;}
    }else if(theme=='dark'){ setDark(); return theme;}else{ theme='light';setLight(); }
    return theme;
}
