<script>
  import Card from './Card.svelte';

  const team_members = [
    {
      name: 'Prof. Apurba Laha',
      role: 'Faculty Advisor',
      dept: 'EE, IITB',
      link: 'https://www.ee.iitb.ac.in/web/people/apurba-laha/'
    },
    {
      name: 'Dikshit Singla',
      role: 'President',
      dept: 'EE, IITB',
      link: 'https://www.linkedin.com/in/dikshit-singla-b1538427a/'
    },
    {
      name: 'Sarthak Kamble',
      role: 'Vice President',
      dept: 'EE, IITB',
      link: 'https://www.linkedin.com/in/sarthak-kamble-0376b22a8/'
    },
    {
      name: 'Aadi Anaskure',
      role: '.',
      dept: 'Materials, IITB',
      link: 'https://www.linkedin.com/in/aadi-anaskure/'
    }
  ];
</script>

<div class="page">
  <ul>
    {#each team_members as member}
      <li>
        <Card {member} />
      </li>
    {/each}
  </ul>
</div>

<style>
  .page {
    margin: 3rem auto 5rem auto;
    width: min(90%, 70rem);
    display: flex;
    flex-direction: column;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    width: 100%;
    justify-content: space-between;
  }
</style>
