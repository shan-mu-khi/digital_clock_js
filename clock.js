function getclock()
{
    let clock=new Date();
    let hours=clock.getHours();
    let minutes=clock.getMinutes();
    let sec=clock.getSeconds();
    // console.log(hours);
    // console.log(minutes);
    // console.log(sec);
    if(hours<=12){
        if(hours<12) time='AM'
        else time='PM'
    }
    else{
        hours=hours-12;
        time='PM'
    }
    if(sec<10) sec="0"+sec;
    if(hours<10) hours='0'+hours;
    if(minutes<10) minutes='0'+minutes;
    console.log(sec);
    document.getElementById('hours').innerHTML=`${hours}`;
    document.getElementById('minutes').innerHTML=`${minutes}`;
    document.getElementById('seconds').innerHTML=`${sec}`;
    document.getElementById('time').innerHTML=`${time}`;

    // document.getElementById('clock').innerHTML=`${hours}:${minutes}:${sec} ${time}`;
    setTimeout(getclock,1000);
}

getclock();
// console.log(year);
