import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import Dashboard from '../screens/Dashboard';
import ListScreen from '../screens/ListScreen';
import ImageTouchableScreen from '../screens/ImageTouchableScreen';
import SpaceDemoScreen from '../screens/SpaceDemoScreen';
import SpaceScreen from '../screens/SpaceScreen';
import ValidationDemoScreen from '../screens/ValidationDemoScreen';
import DemoLayoutScreen from '../screens/DemoLayoutScreen';
import PanResponderDemo from '../screens/PanResponderDemo';
import ListLayoutScreen from '../screens/ListLayoutScreen';
import ChessBoard from '../screens/ChessBoard';

const AuthStack = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    Dashboard: {screen: Dashboard},
    ListScreen:{screen:ListScreen},
    ImageTouchableScreen:{screen:ImageTouchableScreen},
    SpaceDemoScreen:{screen:SpaceDemoScreen},
    SpaceScreen:{screen:SpaceScreen},
    ValidationDemoScreen:{screen:ValidationDemoScreen},
    DemoLayoutScreen:{screen:DemoLayoutScreen},
    PanResponder:{screen:PanResponderDemo},
    ListLayoutScreen:{screen:ListLayoutScreen},
    ChessBoard:{screen:ChessBoard}
   }, {headerMode: 'none'});

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;