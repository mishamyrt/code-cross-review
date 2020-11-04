import { employees } from './employees';
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: { employees }
});

export default app;