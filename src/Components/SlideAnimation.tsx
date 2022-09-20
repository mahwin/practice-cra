import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Box = styled(motion.div)`
  width: 300px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin-right: 5px;
  position: absolute;
  top: 750px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BtnWrapper = styled.div`
  position: absolute;
  top: 700px;
`;

const Btn = styled.button`
  margin-top: 5px;
  width: 50px;
`;

const Wapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const slideVariants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  }),
};

function SlideAnimation() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };
  return (
    <Wapper>
      <AnimatePresence exitBeforeEnter custom={back}>
        <Box
          custom={back}
          variants={slideVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <BtnWrapper>
        <Btn onClick={prevPlease}>prev</Btn>
        <Btn onClick={nextPlease}>next</Btn>
      </BtnWrapper>
    </Wapper>
  );
}
export default SlideAnimation;
