import styled,{ keyframes } from "styled-components";

const Wrapper = styled.div`
display : flex;
`;

const Emoji = styled.span`
  font-size: 36px;
`;
const rotationAnimation = keyframes`
 0% {
   transform: rotate(0deg);
   border-radius: 0px;
 }
 50% {
  border-radius: 100px;
 }
 100%{
  transform: rotate(360deg);
  border-radius: 0px;
 }
`;

const Box = styled.div`
  width:200px ;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items:center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover{
      font-size: 98px;

    }
`;


function App() {
  return (
  
  <Wrapper>
  </Wrapper>
   );

}

export default App;
