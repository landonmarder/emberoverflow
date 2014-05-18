App = Ember.Application.create({
  // sets application root element
  // rootElement: '#element-id',

  // logs a message to console once the URL changes (for debugging)
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
