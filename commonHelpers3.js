import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as l}from"./assets/vendor-22bbdd8b.js";const m=document.querySelector(".form");m.addEventListener("submit",a);function a(e){e.preventDefault();const{delay:t,step:r,amount:s}=e.currentTarget.elements;if(t.value<0||r.value<0||s.value<0)l.show({title:"Warning",message:"❗ Please enter a positive number",position:"topCenter",color:"yellow"});else for(let o=0;o<s.value;o++){const i=o+1,n=Number(t.value)+r.value*o;u(i,n).then(()=>{l.show({title:"Success",message:`✅ Fulfilled promise ${i} in ${n}ms`,position:"topRight",color:"green"})}).catch(()=>{l.show({title:"Error",message:`❌ Rejected promise ${i} in ${n}ms`,position:"topRight",color:"red"})})}e.currentTarget.reset()}function u(e,t){return new Promise((r,s)=>{const o=Math.random()>.3;setTimeout(()=>{o?r({position:e,delay:t}):s({position:e,delay:t})},t)})}
//# sourceMappingURL=commonHelpers3.js.map
