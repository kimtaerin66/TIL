const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");


const CANVAS_SIZE = 700;
//캔버스에 사이즈를 줘야한다!!
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

//default 캔버스 backgroundColor설정, 설정안하면 투명으로 저장됨.
ctx.fillStyle = "White";
ctx.fillRect(0,0,CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = "#2c2c2c"; //default
ctx.fillStyle = "#2c2c2c";
ctx.lineWidth = 2.5; //브러쉬 굵기


let painting = false;
let filing = false;


function stopPainting (){
    painting = false;
}

function startPainting(){
    painting = true;
}

//마우스의 움직임을 감지 > mousemove
//clientX,Y는 브라우저 전체에서 마우스위치 
//offsetX,Y는 현재 내 캔버스에서 마우스위치

//이벤트가 한번발생하는게아니라 마우스를 누르고있는동안 계속발생.
function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;
    if(!painting){
        ctx.beginPath(); //눈에보이진않지만  path 시작 
        ctx.moveTo(x,y); //드래그하는대로 따라가기.
    }else{
        ctx.lineTo(x,y); //드래그 끝나는곳까지 path라인
        ctx.stroke();  // 눈에보이지않는 path를 stroke로 만들기.
    }
}
//클릭된 컬러div의 background-color를 가져오는 함수.
function handleColorClick(e){
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color; //컬러변경.
    ctx.fillStyle = color;
}

//브러쉬 굵기 조절.
function handleRangeChange(e){
    const size = e.target.value;//기본값 2.5 움직일때마다 수치변경됨.
    ctx.lineWidth = size;
}

//fill누르면 전체 채워짐. 버튼 이름바뀜.
function handleModeClick(){
    if(filing === true){
        filing = false;
        mode.innerText = "Fill";

    }else {
        filing = true;
        mode.innerText = "Paint"; 
    }
}


function handleCanvasClick(){
    if(filing){
    ctx.fillRect(0,0,CANVAS_SIZE, CANVAS_SIZE);
}
}

//마우스 우클릭방지.
function handleCM(e){
    e.preventDefault();
}

//저장하기
function handleSaveClick(){
    const image = canvas.toDataURL("image/jpg");//이미지를 data로 받고
    const link = document.createElement("a");//가상링크
    link.href = image; //image url
    link.download = "PaintJS"; //data로 받은 이미지이름
    link.click(); //클릭해주기.
    
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    //mousedown은 클릭하고있는 상태, click은 클릭하고 뗀것.
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting); //캔버스 벗어나는 경우
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}
//Array.from 사용해서 배열로 만들고, 각각에 이벤트 달기
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}
