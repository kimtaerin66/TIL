const clock = document.getElementById('clock');

function getTime(){
    const date = new Date;
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${hours} : ${minutes} `;
}

//시계는 interval
getTime();
setInterval(getTime, 60000); //분 업데이트




