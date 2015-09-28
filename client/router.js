FlowRouter.route('/', {
    name: 'home',
    action: function() {
      ReactLayout.render(Example);
    }
});
