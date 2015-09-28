
// Create the Session Variable and set the initial value
Session.setDefault("addOneSessionVar", 1);

// Create the Reactive Variable and set the initial value
var currentCountReactiveVar =  new ReactiveVar(1);

////////////////////////////////////////////////////
// The dispatcher is receiving the action when the button
// click in the UI occurs.
//
// In this example the data mutations are simple and are handled
// within the dispatcher.  More complex mutations can be
// abstracted away to keep the dispatcher organized
Dispatcher.register(function(payload){
  switch( payload.actionType ){
    case "ADD_ONE_SESSION_VAR":
      // Call the method in the store
      Store.addOneSessionVar(payload.countSessionVar);
      break;

    case "ADD_ONE_REACTIVE_VAR":
      // Add one to our reactive variable
      currentCountReactiveVar.set((payload.countReactiveVar) + 1);
      break;
    }
});

Store = {
  addOneSessionVar: function(currentCount){
    Session.set("addOneSessionVar", currentCount + 1);
    return;
  },
  //
  addOneReactiveVar: (currentCount) => {
    return currentCountReactiveVar.get();
  }
};
