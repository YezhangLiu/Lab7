// script.js
import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
//const setState = router.setState;

// Make sure you register your service worker here too
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
  .then(response => response.json())
  .then(entries => {
    entries.forEach((entry, index) => {
      let newPost = document.createElement('journal-entry');
      newPost.entry = entry;

      newPost.addEventListener("click", () => {
        history.pushState({entry, index}, "entry", `#entry${index + 1}`);
        router.setState("entry", {entry, index});
      });
      document.querySelector('main').appendChild(newPost);
    });
  });
});

// ====
// init selectors
// init selectors
var settingSel = document.querySelector("img");
var headerSel = document.querySelector("h1");


// go to setting 
settingSel.addEventListener("click", () => {
  router.setState("settings", null);
  history.pushState({}, "settings", router.path);
});


// go back to main page
headerSel.addEventListener("click", () => {
  router.setState("index", null);
  history.pushState({}, "index", router.path);
});