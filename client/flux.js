Session.setDefault("addOneValue", 1);


Dispatcher.register(function(payload){
  switch( payload.actionType ){
    case "ADD_ONE":
      Store.doSomething(payload.currentVal);
      break;
    }
});

Store = {
  doSomething: function(currentVal){
    Session.set("addOneValue", Session.get("addOneValue") + 1);
    return ;
  }
};
