import { createStackNavigator, createAppContainer } from "react-navigation";
// import HomeScreen from './screens/Converter.js';
import {Home, Details, Comments} from './screens/index';

const AppNavigator = createStackNavigator({
    Home,
    Details,
    Comments
},
{
    initialRouteName: "Home",
    headerMode: 'none'
});

const TStack = createAppContainer(AppNavigator);

export default TStack;