<script type="ts">
  import { createEventDispatcher } from "svelte";

  export let whom: string;
  export let who: string;
  export let pinned = false;

  const dispatch = createEventDispatcher();

  const dispatchHover = (state: boolean) => dispatch("hover", { state });
  const emitHover = () => dispatchHover(true);
  const emitLeave = () => dispatchHover(false);
  const emitPin = (name: string) => dispatch("pin", { name });
</script>

<style type="text/scss">
  .pair {
    font-size: 36px;
    line-height: 59px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 19px 1fr 0.76fr;
    --arrow-color: var(--color-background);
    transition: color 0.3s ease-out;

    &:hover,
    &.__pinned {
      color: var(--color-text);
      --arrow-color: var(--color-text);
      transition: color 0s;

      .pair-arrow {
        &::before {
          transition: background-color 0s;
        }
        &::after {
          transition: color 0s;
        }
      }
    }

    &-whom {
      display: flex;
    }

    &-whomName {
      cursor: pointer;
    }

    &-arrow {
      flex: 1;
      position: relative;
      height: 24px;
      margin: 18px 22px;
      top: 3px;

      &::before {
        transition: background-color 0.3s ease-out;
        content: "";
        display: block;
        height: 3px;
        width: calc(100% - 4px);
        background-color: var(--arrow-color);
        top: 10px;
        position: absolute;
      }

      &::after {
        transition: color 0.3s ease-out;
        content: "";
        display: block;
        color: var(--arrow-color);
        position: absolute;
        width: 14px;
        height: 14px;
        border-top: 3px solid;
        border-right: 3px solid;
        transform: rotate(45deg);
        right: 4px;
        top: 3px;
      }
    }

    &-pin {
      position: relative;
      top: 17px;
      left: -13px;
      transition: fill 0.2s ease-out;
      fill: var(--color-background);
    }

    &.__pinned {
      .pair-pin {
        fill: var(--color-text);
      }
    }
  }
</style>

<div
  on:mouseenter={emitHover}
  on:mouseleave={emitLeave}
  class={`pair ${pinned ? '__pinned' : ''}`}>
  <svg
    class="pair-pin"
    fill="none"
    height="29"
    viewBox="0 0 18 29"
    width="13"
    xmlns="http://www.w3.org/2000/svg"><path
      d="m14.6549 14.2994v-10.97154h1.3715v-2.742899h-13.71452v2.742899h1.37145v10.97154l-2.7429 2.7429v2.7429h7.13153v8.2287h2.19434v-8.2287h7.1315v-2.7429zm-9.87442 2.7429 1.64574-1.6457v-12.06874h5.48578v12.06874l1.6457 1.6457z" /></svg>
  <div class="pair-whom">
    <span class="pair-whomName" on:click={() => emitPin(whom)}>{whom}</span>
    <span class="pair-arrow" />
  </div>
  <div>{who}</div>
</div>
