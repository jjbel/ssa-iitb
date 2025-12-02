// Static Site Generation
// https://svelte.dev/docs/kit/adapter-static
// https://khromov.se/the-missing-guide-to-understanding-adapter-static-in-sveltekit/

import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),

    // for Github Pages
    paths: {
      // base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
      // base: process.argv.includes('dev') ? '' : '/my-subdomain'
    }
  }
};
