import React, { useState } from 'react';
import './card.css';

const Card = () => {
  const [tarjetas, setTarjetas] = useState([
    {
      id: crypto.randomUUID(),
      name: 'tarjeta 1',
      items: [
        {
          id: crypto.randomUUID(),
          titulo: 'pagina 1',
        },
        {
          id: crypto.randomUUID(),
          titulo: 'pagina 2',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: 'tarjeta 2',
      items: [
        {
          id: crypto.randomUUID(),
          titulo: 'pagina 1',
        },
        {
          id: crypto.randomUUID(),
          titulo: 'pagina 2',
        },
      ],
    },
  ]);

  const handleNewCard = () => {
    const name = prompt('Nuevo nombre');
    if (name) {
      setTarjetas([
        ...tarjetas,
        {
          id: crypto.randomUUID(),
          name: name,
          items: [
            {
              id: crypto.randomUUID(),
              titulo: 'pagina 1',
            },
            {
              id: crypto.randomUUID(),
              titulo: 'pagina 2',
            },
          ],
        },
      ]);
    }
  };

  return (
    <div className="componente">
      <ul>
        <li>
          <button className="create-card-button" onClick={handleNewCard}>
            Crear tarjeta
          </button>
        </li>
      </ul>

      <div className="contenedor-tarjetas">
        <div className="tarjetas">
          {tarjetas.map((tarjeta) => (
            <div className="tarjeta" key={tarjeta.id}>
              <h2>{tarjeta.name}</h2>
              <div className="items">
                {tarjeta.items.map((item) => (
                  <div className="item" key={item.id}>
                    <span>{item.titulo}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
