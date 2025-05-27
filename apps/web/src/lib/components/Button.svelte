<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	const props: { class: string; onPress: () => void; children: ChildNode } = $props();
</script>

<button
	class={twMerge(
		'text-blue cursor-pointer rounded-lg bg-white px-4 py-2 text-xl transition hover:bg-white/80 active:bg-white/70',
		props.class
	)}
	onclick={props.onPress}
>
	{@render props.children()}
</button>
