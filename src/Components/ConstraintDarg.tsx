import { motion } from "framer-motion";
import styled from "styled-components";
import { useRef } from "react";

const Wrapper = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const dragVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function ConstraintGesture() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Wrapper ref={ref}>
      <Box
        drag
        dragSnapToOrigin
        dragElastic={0.1}
        dragConstraints={ref}
        variants={dragVariants}
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}

export default ConstraintGesture;
