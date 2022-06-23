import React from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

function Detail({ toDo }) {
    const myId = useParams().id;
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, myId) {

  return { toDo: state.find(toDo => toDo.id === parseInt(myId)) };
}

export default connect(mapStateToProps)(Detail);
