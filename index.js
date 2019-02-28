/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/component/screen'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
            id: 'firstscreentag',
          name: 'Initializing'
        }
      }
    });
  });
