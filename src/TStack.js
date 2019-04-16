import { createStackNavigator, createAppContainer } from "react-navigation";
import {Home, Details, Comments} from './screens'


const AppNavigator = createStackNavigator({
    Home,
    Details,
    Comments,
},
{
    initialRouteName: "Home",
    headerMode: 'none'
});

const TStack = createAppContainer(AppNavigator);

export default TStack;