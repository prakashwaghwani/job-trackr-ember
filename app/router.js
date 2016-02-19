import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('opportunities', function() {
    this.route('opportunity', { path: '/opportunities/:opportunity_id' });
  });
  this.route('login');
  this.route('signup');
});

export default Router;
