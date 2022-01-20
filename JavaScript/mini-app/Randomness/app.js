//바뀔 컬러값
const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const colorBtn = document.querySelector("button"); 

  //바디 선택
  const body = document.body;

  //바디의 bg컬러를 바꾸는 함수
  function handleBgColor(){
      const random = colors[Math.floor(Math.random() * colors.length -1)];
      const random2 = colors[Math.floor(Math.random() * colors.length -1)];
    if(random !== random2){
    body.style.background = `linear-gradient(to left, ${random}, ${random2})`;
    }
  }

  colorBtn.addEventListener("click", handleBgColor);