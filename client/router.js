FlowRouter.route('/', {
    name: 'home',
    action: function(params) {
      ReactLayout.render(Example);
    }
});
