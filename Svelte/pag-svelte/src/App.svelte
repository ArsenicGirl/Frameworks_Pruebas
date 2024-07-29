<script>
	export let contador = 0;
	let internalCounter = contador; 

	function handleClick(){
		internalCounter +=1;
	}
</script>

<main>
	<!--<h1>holis {name}!</h1>-->
	<button on:click={handleClick}>Incrementar</button>
	<span>{internalCounter}</span>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	span {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>