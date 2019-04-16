import { createStackNavigator, createAppContainer } from "react-navigation";
import {Home, Details, Comments} from './screens'


const AppNavigator = createStackNavigator({
    Home,
    Details,
    Comments,
},
{
    initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;