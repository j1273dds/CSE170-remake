function home(e) {
   e.preventDefault();
   let stateObj = {id:"2"};
   window.history.replaceState(stateObj, "Found Items", "/found");
}
