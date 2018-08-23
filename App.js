import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Assets, ThemeManager} from 'react-native-ui-lib'; //eslint-disable-line
import * as Animatable from 'react-native-animatable';
import ROUTES from './app/screens';

Assets.loadAssetsGroup('icons.general', {
  camera: require('./app/assets/icons/cameraSelected.png'),
});

Animatable.initializeRegistryWithDefinitions({
  gridListEntrance: {
    from: {opacity: 0, ['translateY']: 15},
    to: {opacity: 1, ['translateY']: 0},
  },
});

Animatable.initializeRegistryWithDefinitions({
  basicListEntrance: {
    from: {opacity: 0, ['translateY']: 20},
    to: {opacity: 1, ['translateY']: 0},
  },
});

const Navigator = createStackNavigator(ROUTES, {
  initialRouteName: 'MainScreen'
});

export default class App extends React.Component {
  render() {
    return (<Navigator />);
  }
}
