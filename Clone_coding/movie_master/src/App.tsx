import styled from "styled-components";
import React from 'react';
import Circle from "./Circle";


function App() {
  return(
   <div>
     <Circle bgColor="tomato" />
      <Circle borderColor="yellow" bgColor="teal" />
  </div>
  );
}

export default App;
