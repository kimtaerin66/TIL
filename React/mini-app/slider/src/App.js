import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  position: absolute;
  background-color: white;
  font-size: 28px;
  display: flex;
  top: 150px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVar = {
  invisible: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0, //가운데
    opacity: 1,
    scale: 1,
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

const Btn = styled.button`
  border: none;
  background-color: white;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;

function App() {
  const [index, setIndex] = useState(1);
  const [back, setBack] = useState(false);
  const nextBox = () => {
    setBack(false);
    setIndex((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevBox = () => {
    setBack(true);
    setIndex((prev) => (prev === 10 ? 10 : prev + 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVar}
          initial="invisible"
          animate="visible"
          exit="exit"
          key={index}
        >
          {index}
        </Box>
      </AnimatePresence>
      <Btn onClick={nextBox}>Next</Btn>
      <Btn onClick={prevBox}>Prev</Btn>
    </Wrapper>
  );
}

export default App;
