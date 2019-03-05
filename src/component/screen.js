import {Navigation} from 'react-native-navigation';
import Password from './Signup/Password';
import Inbox from './Inbox';
import Saved from './Saved';
import Trips from './Trips';
import Profile from './Profile';

export const registerScreens = ()=> {
  Navigation.registerComponent('Initializing', (sc) => require('./Launcher').default);
  Navigation.registerComponent('Login', () => require('./Login').default);
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('SignUp', () => require('./Signup').default);
  Navigation.registerComponent('Email', () => require('./Signup/AddEmail').default);
  Navigation.registerComponent('Password', () => require('./Signup/Password').default);
  Navigation.registerComponent('Profile', () => require('./Profile').default);
  Navigation.registerComponent('Inbox', () => require('./Inbox').default);
  Navigation.registerComponent('Saved', () => require('./Saved').default);
  Navigation.registerComponent('Trips', () => require('./Trips').default);

}