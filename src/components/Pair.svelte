<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let whom: string;
  export let who: string;

  const dispatch = createEventDispatcher();

  const dispatchHover = (state: boolean) => dispatch("hover", { state });
  const emitHover = () => dispatchHover(true);
  const emitLeave = () => dispatchHover(false);
</script>

<style>
  .pair {
    font-size: 36px;
    font-weight: bold;
    line-height: 164.3%;
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    transition: color 0.3s ease-out;
  }

  .pair:hover {
    color: var(--color-text);
    transition: color 0s;
  }

  .pair-whom {
    display: flex;
  }

  .pair-arrow {
    color: var(--color-background);
    border-bottom: 3px solid;
    flex: 1;
    position: relative;
    margin: 24.5px 22px;
    transition: color 0.3s ease-out;
  }

  .pair:hover .pair-arrow {
    color: var(--color-text);
    transition: color 0s;
  }

  .pair-arrowHead {
    display: block;
    position: absolute;
    width: 14px;
    height: 14px;
    border-top: 3px solid;
    border-right: 3px solid;
    transform: rotate(45deg);
    right: 0;
    top: 0px;
  }
</style>

<div on:mouseenter={emitHover} on:mouseleave={emitLeave} class="pair">
  <div class="pair-whom">
    <span>{whom}</span>
    <span class="pair-arrow"> <span class="pair-arrowHead" /> </span>
  </div>
  <div>{who}</div>
</div>
