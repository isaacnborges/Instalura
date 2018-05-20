//importação correta do Navigation
import { Navigation } from 'react-native-navigation';

//importações normais dos nossos componentes
import Feed from './src/components/Feed';
import Login from './src/screens/Login';

// registro dos componentes como telas no Navigation
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Feed', () => Feed);

// start da app (fundamental para a renderização inicial da app)
Navigation.startSingleScreenApp({
    screen: {
        screen: 'Login',
        title: 'Login'
    }
});