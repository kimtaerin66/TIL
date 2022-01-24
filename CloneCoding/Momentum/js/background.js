const img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = img[Math.floor(Math.random() * img.length-1)];

//img태그 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//body에 추가해주기
//append는 body제일뒤에, prepend는 body 제일앞에
document.body.appendChild(bgImage);
