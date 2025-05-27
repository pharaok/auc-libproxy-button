<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { siGithub, siOpenaccess, siFirefox, siGooglechrome } from 'simple-icons';
	import { Heart, Mail } from 'lucide-svelte';
</script>

<div
	class="bg-blue fixed inset-0 flex flex-col items-center justify-center px-8 text-white md:px-24"
>
	<div
		class="flex flex-1 flex-col items-center justify-center gap-4 fill-current font-bold md:flex-row"
	>
		<svg class="size-64" viewBox="0 0 24 24">
			<path d={siOpenaccess.path} />
		</svg>
		<div class="flex flex-col items-center gap-2 md:items-start">
			<h1 class="text-4xl">AUC LibProxy Redirect</h1>
			<p class="text-xl">Reach full-text versions of articles with ease.</p>
			<div class="mt-4 flex justify-center gap-4">
				<Button class="flex items-center gap-2" onPress={() => console.log('Hey')}>
					Add to Firefox
					<svg class="size-8" viewBox="0 0 24 24">
						<path class="fill-current" d={siFirefox.path} />
					</svg>
				</Button>
				<Button class="flex items-center gap-2" onPress={() => console.log('Hey')}>
					Add to Chrome
					<svg class="size-8" viewBox="0 0 24 24">
						<path class="fill-current" d={siGooglechrome.path} />
					</svg>
				</Button>
			</div>
		</div>
	</div>
	<div class="divide-x-current mb-2 flex items-center divide-x-2 fill-current text-gray-300 *:px-2">
		<p>
			Made with <Heart class="inline size-4 fill-current" /> by Farouk
		</p>
		<a href="mailto:farouktamer@aucegypt.edu">
			<Mail class="size-6" />
		</a>
		<a href="https://github.com/pharaok/auc-libproxy-button">
			<svg class="size-6" viewBox="0 0 24 24">
				<path d={siGithub.path} />
			</svg>
		</a>
	</div>
</div>
