import { createStackNavigator,createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import {BookIndex, Read,Home} from './screens/index';
  
const StackNav = createStackNavigator({
    Home: Home,
    BookIndex: BookIndex,
    Read: Read
},
{
    initialRouteName: "BookIndex",
    headerMode: 'none'
});


const TStack = createAppContainer(StackNav);
export default TStack;