import { createStackNavigator } from 'react-navigation-stack';
import Header from "./Header";
import LoginForm from "./LoginForm";


const RouteNavigation = createStackNavigator({
    Home: Header
});

export default RouteNavigation;