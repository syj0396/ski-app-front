import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom"
import { TopBar } from './components/TopBar'
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Board } from "./pages/Board"
import { Club } from "./pages/Club"
import { BoardWrite } from "./components/Board/BoardWrite"
import { loadResorts } from './action/resort';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadResorts());
  }, [dispatch]);

  return (
    <div>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/board" element={<Board />} />
        <Route exact path="/board/write" element={<BoardWrite />} />
        <Route exact path="/club" element={<Club />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;

