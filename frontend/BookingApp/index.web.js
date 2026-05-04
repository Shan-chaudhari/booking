import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// For web, we need to render the app to the DOM
if (typeof document !== 'undefined') {
  const rootTag = document.createElement('div');
  rootTag.id = 'root';
  document.body.appendChild(rootTag);
  
  AppRegistry.runApplication(appName, {
    rootTag,
  });
}
