<script>
    import Header from '../components/Header.svelte';
    import Card from '../components/Card.svelte';

    import { link } from 'svelte-spa-router';
  </script>
  
  <main>
    <Header framework="Svelte" />

    <a href="/segundo" use:link>Segunda pagina</a>
    <Card />
  </main>
  
  <style>
    main {
      padding: 1em;
    }
  </style>
  