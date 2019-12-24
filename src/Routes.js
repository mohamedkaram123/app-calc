import {createStackNavigator } from 'react-navigation-stack';

import  Splash  from "./components/Splash";

const Routes = createStackNavigator ({
    Splash:{
        screen:Splash,
 
    }
});

export default Routes;
