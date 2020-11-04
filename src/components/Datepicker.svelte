<script lang="ts">
  import { formatDate } from "../modules/dates";
  import Datepicker from "svelte-calendar";

  export let date = new Date();
  const startDate = new Date();
  const endDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 90);
</script>

<style>
  button {
    cursor: pointer;
    font-size: 60px;
    font-weight: bold;
    background: none;
    border: none;
    border-bottom: 2px solid var(--color-link-border);
    padding: 0;
    transition: color 0.3s ease-out;
    color: var(--color-text);
  }

  button:hover {
    transition: 0s;
    color: var(--color-link-hover);
    border-bottom-color: var(--color-link-hover-border);
  }

  span {
    font-size: 14px;
  }
</style>

<span>
  <Datepicker bind:selected={date} start={startDate} end={endDate}>
    <button> {formatDate(date)} </button>
  </Datepicker>
</span>
