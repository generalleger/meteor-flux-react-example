Example = React.createClass({

  // Using the Meteor provided ReactMeteorData allows us to use the
  // getMeteorData() method which automatically listens to any reactive
  // Meteor data source
  mixins: [ReactMeteorData],

  // getMeteorData() is listening to two reactive data sources.
  // - countSessionVar: A Meteor session variable and is listening
  // - Store.addOneReactiveVar(): Aside from the name, it is hard to
  //   tell that this is a Meteor ReactiveVar.  The ReactiveVar is being
  //   returned from a method called addOneReactiveVar in the app's flux store.

  getMeteorData(){
    // everything returned from getMeteorData() is accessed in React as
    // this.data.something I am returning
    return {
      countSessionVar: Session.get("addOneSessionVar"),
      countReactiveVar: Store.addOneReactiveVar()
    };
  },
  handleAddOneSession(){
    Dispatcher.dispatch( { actionType: "ADD_ONE_SESSION_VAR", countSessionVar: this.data.countSessionVar } );
  },
  handleAddOneReactiveVar(){
    Dispatcher.dispatch( { actionType: "ADD_ONE_REACTIVE_VAR", countReactiveVar: this.data.countReactiveVar } );
  },
  render() {
    return (
      <div>
        <h1>Example</h1>
        <hr />
        <h4>Session Variable Driving the Counter</h4>
        <button onClick={this.handleAddOneSession}>Add One</button>
        <span> {this.data.countSessionVar}</span>
        <hr />
        <h4>Reactive Variable Driving the Counter</h4>
        <button onClick={this.handleAddOneReactiveVar}>Add One</button>
        <span> {this.data.countReactiveVar}</span>
      </div>
    );
  }
});
