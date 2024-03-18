import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode= () => {
    setDarkMode(prevState => !prevState);
  };

  return (
    <div className="App">
      <Navbar isDark={darkMode} toggleMode={toggleDarkMode}/>
      <Main isDark={darkMode} toggleMode={toggleDarkMode}/>
    </div>
  );
}

export default App;
