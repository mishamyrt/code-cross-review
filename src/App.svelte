<script type="ts">
  import { buildPairs } from "./modules/pairs";
  import Pair from "./components/Pair.svelte";
  import Datepicker from "./components/Datepicker.svelte";
  import { getToday } from "./modules/dates";

  export let employees: string[];
  let date = getToday();

  let hoversCount = 0;

  function handleHover(e: CustomEvent) {
    if (e.detail.state) {
      hoversCount++;
    } else {
      hoversCount--;
    }
  }

  $: hovered = hoversCount > 0;
  $: pairs = buildPairs(employees, date)
</script>

<style type="text/scss">
  main {
    max-width: 870px;
    margin: 0 auto;
  }

  h1 {
    font-size: 60px;
    line-height: 114%;
    max-width: 680px;
  }

  .pairs {
    transition: color 0s ease-out;

    &.__hovered {
      color: var(--color-text-silenced);
    }
  }
</style>

<main>
  <h1>
    На кого асайнить мержи
    <Datepicker bind:date />?
  </h1>
  <div class={`pairs ${hovered ? '__hovered' : ''}`}>
    {#each pairs as pair}
      <Pair on:hover={handleHover} whom={pair[0]} who={pair[1]} />
    {/each}
  </div>
</main>
