import { employees } from './employees';
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    employees: employees
      .sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      })
  }
});

export default app;
