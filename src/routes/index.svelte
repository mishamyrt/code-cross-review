<script type="ts">
  import Pair from '../components/Pair.svelte'
  import Datepicker from '../components/Datepicker.svelte'
  import { buildPairs } from '../modules/pairs'
  import { getToday } from '../modules/dates'
  import { onMount } from 'svelte'
  import team from '../../.team-list.json'

  let hovered
  let pairsData
  let pairs

  const employees = team
  const pinKey = 'pinned'
  let date = getToday()

  let pinned
  onMount(() => {
    pinned = window.localStorage.getItem(pinKey)
  })

  let hoversCount = 0
  function handleHover(e: CustomEvent) {
    if (e.detail.state) {
      hoversCount++
    } else {
      hoversCount--
    }
  }
  $: hovered = hoversCount > 0

  function handlePin(e: CustomEvent) {
    if (e.detail.name === pinned) {
      pinned = ''
    } else {
      pinned = e.detail.name
    }
    localStorage.setItem(pinKey, pinned)
  }

  $: pairsData = buildPairs(employees, date)

  type PairItem = [string, string, boolean]
  $: pairs = pairsData.map((v) => [...v, pinned === v[0]] as PairItem)
</script>

<main>
  <h1>
    На кого асайнить мержи
    <Datepicker bind:date />?
  </h1>
  <div class={`pairs ${hovered || pinned ? '__hovered' : ''}`}>
    {#each pairs as pair}
      <Pair
        on:hover={handleHover}
        on:pin={handlePin}
        whom={pair[0]}
        who={pair[1]}
        pinned={pair[2]}
      />
    {/each}
  </div>
</main>

<style type="scss">
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
    margin-left: -20px;
    margin-bottom: 60px;

    &.__hovered {
      color: var(--color-text-silenced);
    }
  }
</style>
