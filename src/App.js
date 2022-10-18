import { Routes, Route } from "react-router-dom"
import { TopBar } from './components/TopBar'
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Board } from "./pages/Board"

function App() {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/board" element={<Board />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;

