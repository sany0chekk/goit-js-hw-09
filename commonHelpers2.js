import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),o=a.elements.email,r=a.elements.message,t="feedback-form-state",m=localStorage.getItem(t);if(m){const e=JSON.parse(m);o.value=e.email,r.value=e.message}a.addEventListener("input",()=>{const e={email:o.value.trim(),message:r.value.trim()};localStorage.setItem(t,JSON.stringify(e))});a.addEventListener("submit",e=>{e.preventDefault(),o.value&&r.value&&(console.log(JSON.parse(localStorage.getItem(t))),localStorage.removeItem(t),a.reset())});
//# sourceMappingURL=commonHelpers2.js.map