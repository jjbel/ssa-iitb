<script>
  import Event from './Event.svelte';
  import events from './events.json';
</script>

<div id="events">
  <h1>Past Events</h1>

  {#each events as event}
    <Event
      date={event.date}
      title={event.title}
      desc={event.desc}
      imgs={event.imgs}
    />
  {/each}
</div>

<style>
  #events {
    padding: 0 10% 0 10%;

    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  h1 {
    margin-bottom: -2rem;
  }
</style>
