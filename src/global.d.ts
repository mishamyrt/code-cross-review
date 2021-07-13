/// <reference types="@sveltejs/kit" />

declare module 'svelte-calendar' {
  interface ComponentOptions {
    target: HTMLElement;
    anchor?: HTMLElement | null;
    props?: Record<string, unknown>;
    hydrate?: boolean;
    intro?: boolean;
  }

  interface Component {
    new(options: ComponentOptions): any;
    $set(props: Record<string, unknown>): void;
    $on(event: string, callback: (event: CustomEvent) => void): void;
    $destroy(): void;

    // server-side methods
    render(props?: Record<string, unknown>): {
      html: string;
      css: { code: string; map: string | null };
      head?: string;
    };
  }

  const component: Component;
  export default component;
}
