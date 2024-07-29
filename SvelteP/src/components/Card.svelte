<script>
    let tarjetas = [
      {
        id: crypto.randomUUID(),
        name: 'tarjeta 1',
        items: [
          { id: crypto.randomUUID(), titulo: 'pagina 1' },
          { id: crypto.randomUUID(), titulo: 'pagina 2' }
        ]
      },
      {
        id: crypto.randomUUID(),
        name: 'tarjeta 2',
        items: [
          { id: crypto.randomUUID(), titulo: 'pagina 1' },
          { id: crypto.randomUUID(), titulo: 'pagina 2' }
        ]
      }
    ];
  
    function handleNewCard() {
      const name = prompt('Nuevo nombre');
      if (name) {
        tarjetas = [
          ...tarjetas,
          {
            id: crypto.randomUUID(),
            name: name,
            items: [
              { id: crypto.randomUUID(), titulo: 'pagina 1' },
              { id: crypto.randomUUID(), titulo: 'pagina 2' }
            ]
          }
        ];
      }
    }
  </script>
  
  <style>
    .componente {
      padding: 1em;
      background-color: #f9f9f9;
      border-radius: 5px;
    }
  
    .create-card-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .create-card-button:hover {
      background-color: #0056b3;
    }
  
    .contenedor-tarjetas {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  
    .tarjeta {
      background: white;
      padding: 1em;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  
    .items {
      margin-top: 10px;
    }
  
    .item {
      padding: 5px;
      border-bottom: 1px solid #ddd;
    }
  </style>
  
  <div class="componente">
    <ul>
      <li>
        <button class="create-card-button" on:click={handleNewCard}>
          Crear tarjeta
        </button>
      </li>
    </ul>
  
    <div class="contenedor-tarjetas">
      {#each tarjetas as tarjeta (tarjeta.id)}
        <div class="tarjeta">
          <h2>{tarjeta.name}</h2>
          <div class="items">
            {#each tarjeta.items as item (item.id)}
              <div class="item">
                <span>{item.titulo}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
  