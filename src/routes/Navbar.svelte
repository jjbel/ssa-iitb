<script>
  // https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages
  import { base } from '$app/paths';
  import logo from '$lib/ssa-iitb-logo.jpg';
  import linkedin_logo from '$lib/linkedin-logo.png';

  const links = [
    ['', 'Home'],
    ['contact', 'Contact'],
    // ['sponsor', 'Sponsor Us'],
    ['team', 'Team'],
    ['events', 'Events']
  ];
</script>

<nav>
  <img src={logo} id="logo" alt="SSA IITB Logo" />

  <!-- <div id="links"> -->
  {#each links as link}
    <a href="{base}/{link[0]}">{link[1]}</a>
  {/each}
  <!-- </div> -->

  <a
    href="https://www.linkedin.com/company/semiconductor-student-alliance-iitb-chapter-ssa/"
    ><img src={linkedin_logo} alt="LinkedIn" /></a
  >
</nav>

<style>
  nav {
    display: flex;
    background-color: var(--bg);
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100vw;

    height: var(--navbar-height);
    /* padding: 0 4rem; */
    gap: 5rem;

    /* border-bottom: 1.5px solid var(--fg-gray); */

    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.4rem;
    /* background-color: red; */
  }

  img {
    height: 100%;
  }

  a {
    height: 30%;
    /* background-color: blue; */
  }

  a {
    color: var(--fg);
  }

  @media (max-aspect-ratio: 1) {
    :root {
      --navbar-height: 4rem;
      /* TODO fix wrapping, increase font size */
    }

    nav {
      gap: 1.5rem;
      /* background-color: yellow; */
      font-size: 0.9rem;
    }
  }
</style>
