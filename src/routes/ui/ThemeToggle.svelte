<!-- 
 Light/Dark mode slider
 sets body.dark class on toggle
 
 https://codepen.io/Umer_Farooq/pen/eYJgKGN
 https://svelte.dev/playground/ed4fef4beceb4b0eb295d1f9fdf3bd62?version=5.20.5 
 theme toggle of https://lucide.dev/
-->

<script>
  import Camera from '@lucide/svelte/icons/camera';
  import Moon from '@lucide/svelte/icons/moon';
  import Sun from '@lucide/svelte/icons/sun';

  let { height = '1.6rem' } = $props();

  const toggle = () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  };
</script>

<input onchange={toggle} type="checkbox" id="checkbox" />
<label for="checkbox" style="--height: {height}">
  <Sun size="calc({height} * 0.8)" color="var(--fg)" />
  <Moon size="calc({height} * 0.8)" color="var(--fg)" />
  <span class="ball"></span>
</label>

<style>
  input {
    opacity: 0;
    height: 0;
    width: 0;
  }

  label {
    background-color: var(--bg);
    box-sizing: content-box;
    border: 2px solid var(--fg);
    border-radius: var(--height);

    width: calc(var(--height) * 2);
    height: var(--height);

    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .ball {
    background-color: var(--fg);
    border-radius: 50%;
    width: calc(var(--height) * 0.9);
    height: calc(var(--height) * 0.9);
    margin: calc(var(--height) * 0.05);

    position: absolute;
    top: 0;
    left: 0;
    transition: transform 150ms;
  }

  /* why not just input:checked .ball */
  input:checked + label .ball {
    transform: translateX(var(--height));
  }
</style>
