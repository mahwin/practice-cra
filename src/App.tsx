import styled from "styled-components";
import BoxAnimation from "./Components/BoxAnimation";
import Variants from "./Components/Variants";
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
        <BoxAnimation />
        <Variants />
      </AnimationWrapper>
    </Wrapper>
  );
}
export default App;
