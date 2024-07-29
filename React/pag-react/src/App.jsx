import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { Header} from './components/Header';
import Index from './views/Pag1';
import Segundo from './views/Pag2';
//import Pag from './views/Pag2';

function App() {
  return (
  <div className="container">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/segundo" element={<Segundo/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
