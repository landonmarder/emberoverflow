App = Ember.Application.create({
  // sets application root element
  // rootElement: '#element-id',

  // logs a message to console once the URL changes (for debugging)
  LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
})

App.Router.map(function() {
  this.route('about');
  this.resource('question', { path: '/:question_id' });
});
