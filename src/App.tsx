import styled from "styled-components";
import BoxAnimation from "./Components/BoxAnimation";

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
    </Wrapper>
  );
}
export default App;
