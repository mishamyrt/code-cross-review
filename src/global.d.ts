import { SvelteComponentTyped } from 'svelte'
/// <reference types="@sveltejs/kit" />

declare module 'svelte-calendar' {
  interface Props {
    start: Date,
    end: Date
    selected: Date
  }

  type Datepicker = SvelteComponentTyped<Props>

  export default Datepicker
}
