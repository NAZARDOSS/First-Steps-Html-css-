console.log("JS file is ready!");

clockTimer(); //function initialization 
function clockTimer() { //  обьявление
    const date = new Date();    
    console.log(date);

    let time = [date.getHours(), date.getMinutes(), date.getSeconds()]; //[0]=hours, [1]=minutes, [2]=seconds
    console.log(time);
    let dayOfWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];  //Дни недели в массиве

    let days = date.getDay();
    let currentDay = dayOfWeek[days];
    console.log(currentDay);
    dayOfWeek=document.getElementById("dayOfWeek").innerHTML=currentDay;
    
    

    if (time[0]<10){(time[0]="0"+time[0]);}
    if (time[1]<10){(time[1]="0"+time[1]);}
    if (time[2]<10){(time[2]="0"+time[2]);}
    
    let currentTime = time.join(":"); //21:00:00
    console.log(currentTime);
    let clock = document.getElementById("clock").innerHTML = currentTime;
    setTimeout(clockTimer,1000);
    // setInterval(clockTimer,1000);
     
}



