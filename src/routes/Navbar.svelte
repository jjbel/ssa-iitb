<script>
  // https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages
  import { base } from '$app/paths';
  import logo from '$lib/ssa-iitb-logo.jpg';

  const links = [
    ['', 'Home'],
    ['contact', 'Contact']
  ];
</script>

<nav>
  <img src={logo} id="logo" alt="SSA IITB Logo" />

  <div id="links">
    {#each links as link}
      <a href="{base}/{link[0]}">{link[1]}</a>
    {/each}
  </div>
</nav>

<style>
  nav {
    display: flex;
    background-color: var(--bg);

    padding: 0 4rem;
    height: var(--navbar-height);
    justify-content: center;
    align-items: center;

    border-bottom: 1.5px solid var(--fg-gray);
  }

  img {
    height: 100%;
  }

  #logo_white {
    display: none;
  }

  :global(body.dark) {
    #logo_black {
      display: none;
    }

    #logo_white {
      display: block;
    }
  }

  #links {
    display: flex;
    padding: 0.9rem 4rem;
    font-size: 1.4rem;
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }

  a {
    color: var(--fg);
  }

  @media (max-aspect-ratio: 1) {
    #links {
      display: none;
      /* TODO */
    }
  }
</style>
