import{d as a,r as e,o as s,L as r,w as t,v as n,c as o,a as p,b as c}from"./vendor.dc9a0dec.js";var u=a({name:"App",setup(){const a=e("");return s((()=>{r.get("https://vue-api-01.herokuapp.com/api").then((e=>{a.value=JSON.stringify(e.data),console.log(e)}))})),{src:a}}});u.render=function(a,e,s,r,c,u){return t((p(),o("textarea",{"onUpdate:modelValue":e[1]||(e[1]=e=>a.src=e)},null,512)),[[n,a.src]])},c(u).mount("#app");
