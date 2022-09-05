<script type="ts">
  import { createEventDispatcher } from 'svelte'

  export let whom: string
  export let who: string
  export let pinned = false

  const dispatch = createEventDispatcher()

  function dispatchPin() {
    dispatch('pin', { name: whom })
  }

  function dispatchHover(state: boolean) {
    dispatch('hover', { state })
  }

  const dispatchEnter = () => dispatchHover(true)
  const dispatchLeave = () => dispatchHover(false)
</script>

<div
  on:mouseenter={dispatchEnter}
  on:mouseleave={dispatchLeave}
  class={`pair ${pinned ? '__pinned' : ''}`}
>
  <svg class="pin" fill="none" height="29" viewBox="0 0 18 29" width="13"
    ><path
      d="m14.6549 14.2994v-10.97154h1.3715v-2.742899h-13.71452v2.742899h1.37145v10.97154l-2.7429 2.7429v2.7429h7.13153v8.2287h2.19434v-8.2287h7.1315v-2.7429zm-9.87442 2.7429 1.64574-1.6457v-12.06874h5.48578v12.06874l1.6457 1.6457z"
    /></svg
  >
  <div class="whom">
    <span class="whomName" on:click={dispatchPin}>{whom}</span>
    <span class="arrow" />
  </div>
  <div>{who}</div>
</div>

<style type="scss">
  .pair {
    --arrow-color: var(--color-background);
    font-size: 36px;
    line-height: 59px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 19px 1fr 0.9fr;
    transition: color 0.3s ease-out;

    &:hover,
    &.__pinned {
      --arrow-color: var(--color-text);
      color: var(--color-text);
      transition: color 0s;

      .arrow {
        &::before {
          transition: background-color 0s;
        }
        &::after {
          transition: color 0s;
        }
      }
    }

    &.__pinned {
      .pin {
        fill: var(--color-text-silenced);
      }
    }
  }
  .whom {
    display: flex;
  }

  .whomName {
    cursor: pointer;
  }

  .arrow {
    flex: 1;
    position: relative;
    height: 24px;
    margin: 18px 22px;
    top: 3px;

    &::before {
      transition: background-color 0.3s ease-out;
      content: '';
      display: block;
      height: 3px;
      width: calc(100% - 4px);
      background-color: var(--arrow-color);
      top: 10px;
      position: absolute;
    }

    &::after {
      transition: color 0.3s ease-out;
      content: '';
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

  .pin {
    position: relative;
    top: 17px;
    left: -13px;
    transition: fill 0.2s ease-out;
    fill: var(--color-background);
  }
</style>
