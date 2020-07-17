const time=document.getElementById("time");
const greeting=document.getElementById("greeting");
const name=document.getElementById("name");
const focus=document.getElementById("focus");

function showtime()
{
    let today=new Date();
   let hour=today.getHours();
   let min=today.getMinutes();
   let sec=today.getSeconds();  
    

   const ampm=hour>=12?'pm':'am';

   hour=hour%12 || 12;
   time.innerHTML=`${hour}<span>:</span>${min}<span>:</span>${sec}`;
 setTimeout(showtime,1000);
}


function setgreet()
{
    let today=new Date();
    hour=today.getHours();
    if(hour<12)
    {
        document.body.style.backgroundImage='url(img/morning.jpg)';
        greeting.textContent='good morning';

    }
    else if(hour<18)
    {
     document.body.style.backgroundImage='url(img/afternoon.jpg)';
     greeting.textContent='good afternoon';
    }
    else{
        document.body.backgroundImage='url(img/evening.jpg)';
        greeting.textContent='good evening';
    }

}
function getname(){
    if(localStorage.getItem("name")===null)
    {
        name.textContent='[enter name]';
    }
    else{
        name.textContent=localStorage.getItem("name");
    }
}
showtime();
setgreet();
getname();
