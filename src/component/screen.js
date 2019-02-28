import {Navigation} from 'react-native-navigation';

export const registerScreens = ()=> {
  Navigation.registerComponent('Home', () => require('./Launcher').default);
  Navigation.registerComponent('Initializing', (sc) => require('./Launcher').default);
  Navigation.registerComponent('Login', () => require('./Login').default);
}