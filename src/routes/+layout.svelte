<script>
  import './global.css'

  import Navbar from './Navbar.svelte';
  let { children } = $props();
</script>

<Navbar />

{@render children()}
