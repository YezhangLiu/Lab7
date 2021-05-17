  
// router.js
export const router = {};
var headerSel = document.querySelector("h1");
var bodySel = document.querySelector("body");
var entrySelector= document.querySelector("entry-page");

/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
router.setState = function(stateName, entryInfo) {
  if (stateName == "index") {
    this.path = "/";
    bodySel.className = "index";
    headerSel.innerHTML = "Journal Entries";
  }

  else if (stateName == "settings") {
    this.path = "/#setting";
    bodySel.className = "settings";
    headerSel.innerHTML = "Settings";
  }

  else if (stateName == "entry") {
    entrySelector = document.querySelector("entry-page");
    this.path = `/#entry${entryInfo.index + 1}`;
    bodySel.className = "single-entry";
    headerSel.innerHTML = `Entry ${entryInfo.index + 1}`;
    
    let newPage = document.createElement('entry-page');
    newPage.entry = entryInfo.entry;
    entrySelector.replaceWith(newPage);
  }
}