<script type="ts">
  import { createEventDispatcher } from "svelte";

  export let whom: string;
  export let who: string;

  const dispatch = createEventDispatcher();

  const dispatchHover = (state: boolean) => dispatch("hover", { state });
  const emitHover = () => dispatchHover(true);
  const emitLeave = () => dispatchHover(false);
</script>

<style type="text/scss">
  .pair {
    font-size: 36px;
    line-height: 59px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    --arrow-color: var(--color-background);
    transition: color .3s ease-out;

    &:hover {
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

    &-arrow {
      flex: 1;
      position: relative;
      height: 24px;
      margin: 18px 22px;
      top: 3px;

      &::before {
        transition: background-color .3s ease-out;
        content: '';
        display: block;
        height: 3px;
        width: calc(100% - 4px);
        background-color: var(--arrow-color);
        top: 10px;
        position: absolute;
      }

      &::after {
        transition: color .3s ease-out;
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
  }
</style>

<div on:mouseenter={emitHover} on:mouseleave={emitLeave} class="pair">
  <div class="pair-whom">
    <span>{whom}</span>
    <span class="pair-arrow"></span>
  </div>
  <div>{who}</div>
</div>
