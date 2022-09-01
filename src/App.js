import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const ranimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius:0px
  }
  50%{
    
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius:0px
  }
`;

const Emoji = styled.span`
  font-size: 48px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${ranimation} 5s linear infinite;
  ${Emoji} {
    &:hover {
      color: red;
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">☽</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
