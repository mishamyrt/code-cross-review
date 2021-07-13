import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
    adapter: staticAdapter(),
    paths: {
      base: "/cross-code-review",
      assets: "/cross-code-review"
    },
	}
};

export default config;
