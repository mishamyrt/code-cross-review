/* eslint-disable */
interface DatepickerProps extends import('svelte').JSX.HTMLAttributes {
  start: Date,
  end?: Date
  selected: Date
}

declare module 'svelte-calendar' {
  export default class Datepicker extends import('svelte').SvelteComponent<
    DatepickerProps,
    Record<string, unknown>,
  > {
    $$prop_def: DatepickerProps
  }
}
