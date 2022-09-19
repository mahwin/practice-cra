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

function App() {
  return (
    <Wrapper>
      <BoxAnimation />
      <Variants />
    </Wrapper>
  );
}
export default App;
