import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BoxWapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 900px;
  justify-content: space-evenly;
`;

function LayoutAnimation() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <BoxWapper onClick={toggleClicked}>
      <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
      <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
    </BoxWapper>
  );
}

export default LayoutAnimation;
