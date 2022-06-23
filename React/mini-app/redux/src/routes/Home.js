import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./../store";
import ToDo from "../components/ToDo";


function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    addToDo(text);
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}</ul>
    </>
  );
}

//mapStateToProps는 store에서 가져온값을 props로보낸다
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

//props만들기
function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//store에 접근해 state값받기 =>connect
//connect는 두개의 argument를 가진다
//1.state 2.dispatch
