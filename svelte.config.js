import preprocess from 'svelte-preprocess'
import staticAdapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    prerender: {
      default: true
    },
    adapter: staticAdapter()
  }
}

export default config
