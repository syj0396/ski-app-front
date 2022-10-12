import { Router, Routes, Route } from "react-router-dom"
import styled from 'styled-components'
import { TopBar } from './components/TopBar'
import { Home } from "./pages/Home"
import { Board } from "./pages/Board"

function App() {
  return (
    <AppWrapper>
      <TopBar />
    {/*}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
      </Routes>
  </Router>*/}
    <Board />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
`

export default App;

