<script type="ts">
  import Pair from '../components/Pair.svelte'
  import Datepicker from '../components/Datepicker.svelte'
  import { buildPairs } from '../modules/pairs/pairs'
  import { getToday } from '../modules/dates'
  import { onMount } from 'svelte'
  import team from '../../.team-list.json'
  import { alphabetize } from '../modules/sort'
  import type { PairItem } from 'src/modules/pairs'

  const PIN_KEY = 'pinned'

  export const prerender = true

  let hovered: boolean
  let pairsData: [string, string][]
  let pairs: PairItem[]

  const employees = team.map(s => s[0])
  let date = getToday()

  let pinned: string
  onMount(() => {
    pinned = window.localStorage.getItem(PIN_KEY)
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
    localStorage.setItem(PIN_KEY, pinned)
  }

  $: pairsData = buildPairs(employees.sort(alphabetize), date)
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
    max-width: 920px;
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
