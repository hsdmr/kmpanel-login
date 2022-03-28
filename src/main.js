import App from './App.svelte';

let appDiv = document.getElementById('app');

var app = new App({
  target: appDiv
});

export default app;