import { createStackNavigator,createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import {BookIndex, Read, SendComment, Details, Comments} from './screens/index';



const TabNavigator = createMaterialTopTabNavigator({
    Detail: Details,
    Comments: Comments
},
{
    initialRouteName: "Detail",
    headerMode: 'none'
});


const NavigatorStack = createAppContainer(TabNavigator);

export default NavigatorStack;