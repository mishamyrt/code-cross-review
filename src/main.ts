import { employees } from './employees';
import App from './App.svelte';
import { alphabetize } from './modules/sort';

const app = new App({
  target: document.body,
  props: {
    employees: employees.sort(alphabetize)
  }
});

export default app;
