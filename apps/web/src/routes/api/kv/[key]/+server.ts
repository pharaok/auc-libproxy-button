import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, platform }) => {
	const value = await platform!.env.KV_BINDING.get(params.key!);
	if (value === null) return new Response('Key Not Found', { status: 404 });

	return new Response(value, {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
		}
	});
};
