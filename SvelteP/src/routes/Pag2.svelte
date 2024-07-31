<script>
    import Header from '../components/Header.svelte';

    import { link } from 'svelte-spa-router';
  </script>
  
  <main>
    <Header framework="Svelte" />

    <a href="/" use:link>Primera pagina</a>

  </main>