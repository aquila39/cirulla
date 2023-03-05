import { Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewGame from './components/NewGame';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newgame' element={<NewGame />} />
        <Route path='/game' element={<Game />} />
        <Route path='*' element={null} />
      </Routes>
    </div>
  );
}

export default App;
