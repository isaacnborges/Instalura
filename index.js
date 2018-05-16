//import { AppRegistry } from 'react-native';
//import App from './App';
import Navigation from 'react-native-navigation';
import Feed from './src/components/Feed';
import Login from './src/screens/Login';

//AppRegistry.registerComponent('InstaluraMobile', () => App);
//AppRegistry.registerComponent('InstaluraMobile', () => Login);
//  Navigation.registerComponent('Login', () => Login);
//  Navigation.registerComponent('Feed', () => Feed);

export default () => {
    Navigation.registerComponent('Login', () => Login);
    Navigation.registerComponent('Feed', () => Feed);

    // Navigation.startSingleScreenApp({
    //     screen: 'Login',
    //     title: 'Login'
    // });
}