import React from 'react';
//import './index.css';
import { Header } from '../components/Header'; // Asegúrate de exportar Header correctamente en su archivo
import Card from '../components/Card'; // Asegúrate de exportar Card correctamente en su archivo

const Index = () => {
  return (
    <React.StrictMode>
      <Header />
      <ul>
        <li><a href="https://www.youtube.com/watch?v=dEOJDiuiSww">Pagina 1</a></li>
      </ul>
      <Card />
    </React.StrictMode>
  );
};

export default Index;
