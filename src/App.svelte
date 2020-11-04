<script lang="ts">
    import { buildPairs } from "./modules/pairs";
    import Pair from './components/Pair.svelte';
    import Datepicker from './components/Datepicker.svelte';

    export let employees: string[];
    let date = new Date();
    date.setHours(0)

    let hoversCount = 0

    function handleHover (e: CustomEvent) {
        if (e.detail.state) {
            hoversCount++
        } else {
            hoversCount--
        }
    }

    $: hovered = hoversCount > 0 
</script>

<style>
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
    }

    .pairs.__hovered {
        color: var(--color-text-silenced);
    }
</style>

<main>
    <h1>На кого асайнить мержи <Datepicker bind:date />?</h1>
    <div class="{`pairs ${hovered ? '__hovered' : ''}`}">
        {#each buildPairs(employees, date) as pair}
            <Pair on:hover={handleHover} whom={pair[0]} who={pair[1]} />
        {/each}
    </div>
</main>
