btnEl.addEventListener('click',()=>{
  logic = !logic;
  var t = 0;

  if(logic){
    btnEl.textContent="Stopt";
  }else{
    const TimeDateLiEl = document.createElement('li');
    TimeDateLiEl.textContent=timerEl.textContent;
    timeDateEl.appendChild(TimeDateLiEl);
    timerEl.textContent="00 : 00 : 00"
    btnEl.textContent="Start"
  }

  var timer = setInterval(()=>{
    if(!logic){
      clearInterval(timer)
    }else{
      t++;
      timerEl.textContent=`${nE(parseInt(t/3600))} : ${nE(parseInt(t%3600/60))} : ${nE(t%3600%60)}`
    }
  },1000);
});