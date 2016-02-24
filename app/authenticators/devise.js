import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import Devise from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend();

export default Devise.extend({
  serverTokenEndpoint: 'https://job-tracker-api.herokuapp.com/users/sign_in'
});
