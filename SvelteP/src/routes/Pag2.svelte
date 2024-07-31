<script>
    import Header from '../components/Header.svelte';

    import { link } from 'svelte-spa-router';
 
    let listdata = [];

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((results)=>listdata=results)
 
 </script>
  
  <main>
    <Header framework="Svelte" />

    <a href="/" use:link>Primera pagina</a>

  </main>

  <ul>
    {#each  listdata as values }
        <li>{values.id}. {values.name}</li>
    {/each}
  </ul>