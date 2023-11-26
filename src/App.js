import logo from './logo.svg';
import './App.css';
import PlayersList from './PlayersList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <h1 style={{padding:"5rem", color:"darkblue", fontSize:"3rem", fontFamily:"bold"
  }}>Football Players</h1>
    <PlayersList/>
    </div>
  );
}

export default App;
