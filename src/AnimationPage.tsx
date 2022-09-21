import styled from "styled-components";
import Box from "./Components/BoxAnimation";
import Gesture from "./Components/Gesture";
import Variants from "./Components/Variants";
import DragAnimation from "./Components/Drag";
import ConstraintDrag from "./Components/ConstraintDarg";
import SvgAnimation from "./Components/SvgAnimation";
import PresentBox from "./Components/PresentBox";
import SlideAnimation from "./Components/SlideAnimation";
import LayoutAnimation from "./Components/LayoutAnimation";
import FocusAnimation from "./Components/FocusAnimation";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.blue};
  padding-top: 20px;
  height: 230vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

function AnimationPage() {
  return (
    <Wrapper>
      <AnimationWrapper>
        <Box />
        <Variants />
        <Gesture />
        <DragAnimation />
        <ConstraintDrag />
        <SvgAnimation />
      </AnimationWrapper>
      <PresentBox />
      <SlideAnimation />
      <LayoutAnimation />
      <FocusAnimation />
    </Wrapper>
  );
}
export default AnimationPage;
