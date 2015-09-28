
Session.setDefault("addOneSessionVar", 1);

// Create the reactiveVar and set the initial value
var currentCountReactiveVar =  new ReactiveVar(1);

// Function to mutate the value provided from the button click
var addOneReactiveVar = (currentVal) => {
  currentCountReactiveVar.set((currentVal) + 1);
};

// The dispatcher is receiving the action when the button
// click in the UI occurs.
Dispatcher.register(function(payload){
  switch( payload.actionType ){
    case "ADD_ONE_SESSION_VAR":
      // Call the method in the store
      Store.addOneSessionVar(payload.countSessionVar);
      break;

    case "ADD_ONE_REACTIVE_VAR":
      // Call the function to mutate the data
      addOneReactiveVar(payload.countReactiveVar);
      break;
    }
});

Store = {
  addOneSessionVar: function(currentCount){
    //console.log(currentCount);
    Session.set("addOneSessionVar", currentCount + 1);
    return;
  },
  //
  addOneReactiveVar: (currentCount) => {
    return currentCountReactiveVar.get();
  }
};
