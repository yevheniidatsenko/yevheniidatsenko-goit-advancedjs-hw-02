import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as c,i as r}from"./assets/vendor-22bbdd8b.js";class l{constructor(){this.date=document.querySelector("#datetime-picker"),this.btn=document.querySelector("[data-start]"),this.day=document.querySelector("[data-days]"),this.hour=document.querySelector("[data-hours]"),this.min=document.querySelector("[data-minutes]"),this.sec=document.querySelector("[data-seconds]"),this.spans=document.querySelectorAll(".value"),this.timerId=null,this.btn.disabled=!0,c(this.date,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:this.onDatePickerClose.bind(this)}),this.btn.addEventListener("click",this.onBtnStartClick.bind(this))}onDatePickerClose(t){t[0]<=Date.now()?(this.btn.disabled=!0,r.show({title:"Error",message:"Please choose a date in the future!",position:"topRight",color:"red"})):(this.btn.disabled=!1,r.show({title:"Success",message:"Here we go!",position:"topRight",color:"green"}))}onBtnStartClick(){this.spans.forEach(t=>t.classList.toggle("end")),this.btn.disabled=!0,this.date.disabled=!0,this.timerId=setInterval(()=>{const e=new Date(this.date.value)-Date.now(),{days:i,hours:n,minutes:a,seconds:s}=this.convertMs(e);this.day.textContent=this.addLeadingZero(i),this.hour.textContent=this.addLeadingZero(n),this.min.textContent=this.addLeadingZero(a),this.sec.textContent=this.addLeadingZero(s),e<1e3&&(this.spans.forEach(o=>o.classList.toggle("end")),clearInterval(this.timerId),this.date.disabled=!1)},1e3)}convertMs(t){const s=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:o,minutes:d,seconds:h}}addLeadingZero(t){return`${t}`.padStart(2,"0")}}new l;
//# sourceMappingURL=commonHelpers2.js.map