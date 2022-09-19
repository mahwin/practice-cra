import styled from "styled-components";
import Box from "./Components/BoxAnimation";
import Gesture from "./Components/Gesture";
import Variants from "./Components/Variants";
import DragAnimation from "./Components/Drag";
import ConstraintDrag from "./Components/ConstraintDarg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

function App() {
  return (
    <Wrapper>
      <AnimationWrapper>
        <Box />
        <Variants />
        <Gesture />
        <DragAnimation />
        <ConstraintDrag />
      </AnimationWrapper>
    </Wrapper>
  );
}
export default App;
