import { Route, Routes } from 'react-router-dom';
import './App.css';
import Lobby from './Components/Lobby';
import Room from './Components/Room';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Lobby/>} />
            <Route path="/room/:roomId" element={<Room/>} />
        </Routes>
    </div>
  );
}

export default App;
