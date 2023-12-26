/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import "./src/localization/i18"
AppRegistry.registerComponent(appName, () => App);
