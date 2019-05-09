import { createStackNavigator,createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import {Comments} from './screens/Comments';
import {Details} from './screens/Details';



const TabNavigator = createMaterialTopTabNavigator({
    Comments: Comments,
    Detail: Details,
},
{
    initialRouteName: "Detail",
    headerMode: 'none'
});


const NavigatorStack = createAppContainer(TabNavigator);

export default NavigatorStack;