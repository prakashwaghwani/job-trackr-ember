import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import Devise from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend();

export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3000/users/sign_in'
});
