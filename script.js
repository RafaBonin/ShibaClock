photo=(hour,minutes,seconds) => {
    if (parseInt(hour)==4 || parseInt(hour)==16 && parseInt(minutes)==20){
        document.getElementById("shibe").src = 'Images/4-20-shibe.png';
        document.getElementById("shibet-text").innerHTML='4:20 BABY A TRIPLE!';
    }
    else if (parseInt(hour)>=22 || parseInt(hour)<6){
        document.getElementById("shibe").src = 'Images/sleeping-shibe.jpg';
        document.getElementById("shibet-text").innerHTML='I sleep...z.z.z.z....';
    }
    else {
        document.getElementById("shibe").src = 'Images/shibe.jpg';
        document.getElementById("shibet-text").innerHTML='Halo Fren!';
    }
    return
}

setInterval(()=>{
    let clock = new Date();
    let hour = clock.getHours()
    let minutes = clock.getMinutes()
    let seconds = clock.getSeconds()
    let time = ((hour<10)? '0'+ hour: hour) + ":" + ((minutes<10)? '0'+minutes: minutes) + ":" + ((seconds<10)? '0'+seconds: seconds);
    document.getElementById("clock").innerHTML=time+'!';
    photo(hour,minutes,seconds);
}, 100);





