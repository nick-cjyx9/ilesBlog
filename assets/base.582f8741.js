import{m as s}from"./vendor-vue.ffc37e11.js";import"./vite.1299367e.js";const o="f1e56e6a-ea92-4228-b77e-e448f719a75b",a="https://umami.nickchen.top/api/",c=16887456e5,i=new Date().getTime(),u={Authorization:"Bearer 1BtienyC0Jt/UOuG6Npas/nr2ZAuLPOB1kVAsnpNlNxR8VR6Ghkm9QZ9HZ93DS/hDyKR/ftZhFYmFfqWHSRMWNZyyz71z9762VcdMcEjp7pi0HEVm1CJw0kAJ+ogac0b4Kvm3rIb5nMHh59Rck95Pcp+huK5lK19a3NYceyBv4aUexKlGMx0NNKJbVIBRhGGyfMlrszBgKsj28slyjh2bH+pdCUb5gu1o+0y15SJMNjP8YPK+UOK29exQ6eABhEuzTVlHf+G+Wt8ItwXai01rH6MYn8kMSdip3sFiatuBUPJ5ASKj04PS/LS1PfP6s1ZNTjlV9HcHxHVlV2Pbko+Gcf1EfATLbnaIw==","Access-Control-Allow-Origin":"*"},r=s.create({baseURL:a,timeout:12e3,headers:u});async function l(){try{const e=await r.get("websites/"+o+"/active");return e.data[0].x>0?e.data[0].x:1}catch(e){return console.error(e),"-1"}}async function p(){try{var e={startAt:c,endAt:i,unit:"hour",timezone:"Asia/Shanghai"};return(await r.get("websites/"+o+"/stats",{params:e})).data}catch(t){return console.error(t),"-1"}}const h=l(),m=p();h.then(e=>{let t=document.querySelector("#active");t&&(t.innerHTML=e),console.log(e)});m.then(e=>{let t=document.querySelector("#pv"),n=document.querySelector("#uv");t&&n&&(t.innerHTML=e.pageviews.value,n.innerHTML=e.uniques.value),console.log(e)});const f=void 0;export{f as o};
