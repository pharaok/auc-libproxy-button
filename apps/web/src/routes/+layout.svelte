<script lang="ts">
	import 'shared/style.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>AUC LibProxy Button</title>
</svelte:head>

{@render children()}
