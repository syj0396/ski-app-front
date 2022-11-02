import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom"
import { TopBar } from './components/TopBar'
import { NavBar } from "./components/NavBar"
import { Layout } from './components/Layout';
import { Home } from "./pages/Home"
import { Login } from './features/auth/Login';
import { RequireAuth } from './features/auth/RequireAuth';
import { Board } from "./pages/Board"
import { Club } from "./pages/Club"
import { BoardWrite } from "./components/Board/BoardWrite"
import { EditBoard } from './components/Board/EditBoard';
import { loadResorts } from './action/resort';
import { ClubRegister } from './components/Club/ClubRegister';
import { BoardDetail } from './components/Board/BoardDetail';

function App() {
  const dispatch = useDispatch();
  //const cors = require('cors');
  //App.use(cors())

  useEffect(() => {
    dispatch(loadResorts());
  }, [dispatch]);

  return (
    <div>
      <TopBar />
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/board" element={<Board />} />
        <Route exact path="/board/write" element={<BoardWrite />} />
        <Route exact path="/club" element={<Club />} />
        <Route exact path="/club/register" element={<ClubRegister />} /> */}
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="board" element={<Board />} />
            <Route path="board/write" element={<BoardWrite />} />
            <Route path="board/edit/:id" element={<EditBoard />} />
            <Route path="board/detail/:id" element={<BoardDetail />} />
            <Route path="club" element={<Club />} />
            <Route path="club/register" element={<ClubRegister />} />
          </Route>
        </Route>
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;

