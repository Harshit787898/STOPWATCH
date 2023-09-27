var hr=document.getElementById("ho");
    var min=document.getElementById("mn");
    var sec=document.getElementById("se");
    let timer=null;
    let second=0;
    let minutes=0;
    let hours=0;
    let time=0;
    function watch(){
      time++;
      second=time%60;
      minutes=Math.floor(time/60);
      hours=Math.floor(time/3600);
      if(hours<10){
        hours="0"+hours;
      }
      if(minutes<10){
        minutes="0"+minutes;
      }
      if(second<10){
        second="0"+second;
      }
      hr.innerText=`${hours}`;
      min.innerText=`${minutes}`;
      sec.innerText=`${second}`;
    }
    function start(){
      if(timer)
      return ;
      timer=setInterval(watch,1000);
      
    }
    function stop(){
      clearInterval(timer);
      timer=null;
    }
    function reset(){
      time=0;
      clearInterval(timer);
      timer=null;
      hr.innerHTML="00";
      min.innerHTML="00";
      sec.innerHTML="00";
    }