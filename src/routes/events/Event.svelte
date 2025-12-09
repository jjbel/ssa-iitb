<!-- https://stackoverflow.com/questions/78664060/how-do-we-do-named-slots-in-in-svelte-5 -->

<script>
  let { date, title, desc, imgs } = $props();
  import { base } from '$app/paths';
</script>

<div class="event">
  <h2>{title}</h2>
  <h3>{date}</h3>
  <p>{desc}</p>

  <ul class="gallery">
    {#each imgs as img}
      <img src={`${base}/events/${date}/${img}`} alt="" />
    {/each}
  </ul>
</div>

<style>
  .gallery {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  img {
    height: 15rem;
    width: auto;
  }

  p {
    color: rgb(25, 25, 25);
    margin: 0.8rem 0 0.8rem 0;
  }
</style>
