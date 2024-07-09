
import './App.css';
import { NavBar } from './NavBar.js';
import HomePage from './component/Home/HomePage.js';
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar/>
    <HomePage/>
    </>
  );
}

export default App;
