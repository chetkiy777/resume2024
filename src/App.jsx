import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
    align-items: stretch;
    height: 100vh;
`

function App() {

  return (
    <MainContainer>
      <LeftSide />
      <RightSide />
    </MainContainer>
  )
}

export default App
