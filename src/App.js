import './App.css';
import HomePage from './pages/HomePage';
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Modal from 'react-modal'
import BaseRouter from "./baseRouter";

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
        <Navbar />
       <BaseRouter/>
    </div>
  );
}

export default App;
