import employees from '../.team-list.json';
import App from './App.svelte';
import { alphabetize } from './modules/sort';

export default new App({
  target: document.body,
  props: {
    employees: employees.sort(alphabetize)
  }
});

