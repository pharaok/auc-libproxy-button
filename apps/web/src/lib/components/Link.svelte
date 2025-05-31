<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	const props: {
		class: string;
		href: string;
		download: string;
		target: string;
		children: ChildNode;
	} = $props();
</script>

<a
	class={twMerge(
		'text-blue cursor-pointer rounded-lg bg-white px-4 py-2 text-xl transition hover:bg-white/80 active:bg-white/70',
		props.class
	)}
	href={props.href}
	download={props.download}
	target={props.target}
>
	{@render props.children()}
</a>
