const h2 = document.querySelector('h2');

//크리스마스까지 남은 기간 
//12월 25일까지의 날짜,시,분,초 - 오늘날짜,시,분,초
function count(){
    const dday = new Date("December 25, 2022, 0:00:00").getTime();
    const today = new Date().getTime();
    const gap = dday - today;
// 밀리초 값이기 때문에 1000을 곱한다. 
  // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
  // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
    const day = Math.ceil(gap / (1000 * 60 * 60 *24));
    const hour = String(Math.ceil((gap % (1000 * 60 * 60 *24))/ (1000 * 60 *60))).padStart(2,"0");
    const min = String(Math.ceil((gap % (1000 *60 *60)) / (1000 * 60))).padStart(2,"0");
    const sec = String(Math.ceil((gap % (1000 *60)) / 1000)).padStart(2,"0");

  h2.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

count(); //setInterval실행되기전에 보여주기.
//시계니까 1초마다 반복
setInterval(count, 1000);