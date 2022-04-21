import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countReducer = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countReducer);

countStore.dispatch({ type: "ADD" }); //1
countStore.dispatch({ type: "ADD" }); //2
countStore.dispatch({ type: "ADD" }); //3
countStore.dispatch({ type: "ADD" }); //4
countStore.dispatch({ type: "MINUS" }); //3

console.log(countStore.getState()); //3

//버튼연결
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

//updateText를 하지않으면, counter가 +되고 -되었을뿐
//그려지진않는다 처음에딱한번만 불려졌을뿐.
