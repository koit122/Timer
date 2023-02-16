const timerEl = document.querySelector('.timer-interpace');
const btnEl = document.querySelector('.btn--controller');
const timeDateEl = document.querySelector('.time-data');
const bastTimeDateEl = document.querySelector('.bast-time-data');
const totalTimeDateEl = document.querySelector('.total-time-data');

let logic = false;
let tt=0;
let today = new Date();

btnEl.addEventListener('click',()=>{
  logic = !logic;
  var t = 0;
  if(logic){
    btnEl.textContent="Stopt";
  }else{
    btnEl.textContent="Start"
    clearInterval(timer)
      const TimeDateLiEl = document.createElement('li');
      TimeDateLiEl.textContent=timerEl.textContent;
      timeDateEl.appendChild(TimeDateLiEl);
      if(tC(bastTimeDateEl.textContent)<tC(timerEl.textContent)){
        bastTimeDateEl.textContent=timerEl.textContent;
      }
      tt+=parseInt(timerEl.textContent.slice(0,2)*3600)+parseInt(timerEl.textContent.slice(5,7)*60)+parseInt(timerEl.textContent.slice(10,))
      timerEl.textContent="00 : 00 : 00";
      totalTimeDateEl.textContent=`${nE(parseInt(tt/3600))} : ${nE(parseInt(tt%3600/60))} : ${nE(tt%3600%60)}`
  }
  var timer = setInterval(()=>{
    if(logic){
      t++;
      timerEl.textContent=`${nE(parseInt(t/3600))} : ${nE(parseInt(t%3600/60))} : ${nE(t%3600%60)}`
    }else{
      clearInterval(timer)
    }
  },1000);
});
console.log(tC('02 : 11 :24'))
// console.log(today())
//함수 선언 모음
function nE(num){
  if(num<10){
    return `0${num}`;
  }else{
    return num
  }
}
function tC(str){
  return parseInt(str.slice(0,2)+str.slice(5,7)+str.slice(10,))
}