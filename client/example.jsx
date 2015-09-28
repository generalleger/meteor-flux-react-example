
Example = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      value: Session.get("addOneValue")
    };
  },
  handleAddOne(){
    var currentCount = React.findDOMNode(this.refs.count).value;
    Dispatcher.dispatch( { actionType: "ADD_ONE", usefulData: currentCount } );
  },
  render() {
    return (
      <div>
        <h1>Example</h1>
        <hr />
        <button onClick={this.handleAddOne}>Add One</button> <span ref="count">{this.data.value}</span>
      </div>
    );
  }
});
