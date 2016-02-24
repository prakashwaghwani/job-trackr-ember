import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('user', {
      path: ':user_id'
    });
  });
  this.route('opportunities', function() {
    this.route('opportunity', {
      path: ':opportunity_id' });
  });

  this.route('login');
  this.route('signup');

  this.route('notes', function() {
    this.route('note', {
      path: ':note_id'
    });
  });
  this.route('dashboard');
  this.route('contacts');
  this.route('home');
});

export default Router;