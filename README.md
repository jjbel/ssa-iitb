# SSA Website

This is the website for IITB SSA.

## Why use Svelte?

Svelte (https://svelte.dev/) is a javascript UI framework. I use it over plain HTML/JS because you can reuse and nest components, for example having multiple <Card /> elements, each being a display card of a person's details.

Unlike React or Vue, Svelte is compiled to plain HTML/JS at build time. This is advantageous for deploying as a static site: there's no backend server, we're just displaying information about SSA to a site visitor.\
We do this because the simplest (and free) way to deploy a site is to [Github Pages](https://pages.github.com/) like https://jjbel.github.io/ssa-iitb/ . Github Pages can only build static sites.\
You may choose to use React or similar, but the boilerplate to display to deploy to Github Pages is more, from my experience.\
You may choose to use raw HTML/CSS, but it will lead to a lot of duplicated code.

**SvelteKit** (https://svelte.dev/docs/kit/introduction) is a framework for Svelte. It is to Svelte what Next.js is to React. Specifically I use SvelteKit for routing: subpages like /team, /contact-us.

## Please go through the Svelte Tutorial first (https://svelte.dev/tutorial/svelte/welcome-to-svelte) to familiarise yourself.

# Adding Pages

Every subpage like / or /team or /contact-us comes from a +page.svelte file. src/routes/+page.svelte is for / and src/routes/team/+page.svelte is for /team. Type HTML tags directly in a Svelte file. Add CSS using a style tag. Svelte CSS is scoped: it only affects elements in the current .svelte file, so you don't need to add a unique id to each element of the website.
