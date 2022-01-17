
// hello와 body 선택
const title = document.querySelector('h1');
const body = document.body;

function handleMouseEnter(){
    title.innerText = "You are here!"
    
}
function handleMouseLeave(){
    title.innerText = "You are gone!"
     
 }

function handleTitleClick(){
  title.classList.toggle('active');
     
 }
 
function handleResizeWindow(){
   body.classList.toggle('bodyActive');
 };

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
title.addEventListener("click", handleTitleClick);
window.addEventListener("resize", handleResizeWindow);