import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('opportunities');
  this.route('login');
  this.route('signup');
  this.route('notes');
});

export default Router;
