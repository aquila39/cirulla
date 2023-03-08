import { Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewGame from './components/NewGame';
import History from './components/History';
import HistoryDetail from './components/HistoryDetail';

function App() {
  return (
    <div className='App'>
      <alert className='text-center'>I modali non si chiudono automaticamente, una volta confermata la scelta bisogna chiuderli manualmente</alert>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newgame' element={<NewGame />} />
        <Route path='/game' element={<Game />} />
        <Route path='/history' element={<History />} />
        <Route path='/history/:gameId' element={<HistoryDetail />} />
        <Route path='*' element={<h1>Not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
