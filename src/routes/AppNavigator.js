import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs'
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
import LoginForm from '../screens/LoginForm';
import SignupForm from '../screens/SignupForm';
import FavoriteList from '../screens/FavoriteList';
import hooks from '../screens/hooks';
import DrawerComponent from '../components/DrawerComponent';
import { Image } from 'react-native';
import React, { Component } from 'react';
import AppImages from '../images';

const AutoStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    Dashboard: { screen: Dashboard },
    ListScreen: { screen: ListScreen },
    ImageTouchableScreen: { screen: ImageTouchableScreen },
    SpaceDemoScreen: { screen: SpaceDemoScreen },
    SpaceScreen: { screen: SpaceScreen },
    ValidationDemoScreen: { screen: ValidationDemoScreen },
    DemoLayoutScreen: { screen: DemoLayoutScreen },
    PanResponder: { screen: PanResponderDemo },
    ListLayoutScreen: { screen: ListLayoutScreen },
    ChessBoard: { screen: ChessBoard },
    LoginForm: { screen: LoginForm },
    SignupForm: { screen: SignupForm },
    FavoriteList: { screen: FavoriteList },
    hooks: { screen: hooks },
    //Welcome: { screen: Welcome },
},
    {
        headerMode: 'none'
    });



const DrawerNavigator = createStackNavigator({
    DemoLayoutScreen: { screen: DemoLayoutScreen },
    LoginForm: { screen: LoginForm }
});

const DrawerStackNavigator = createDrawerNavigator({
    DrawerNavigator: { screen: DrawerNavigator }
}, {
    drawerWidth: 150,
    drawerPosition: 'left',
    drawerType: "slide",
    contentComponent: () => <DrawerComponent />
})


const tabNavigation = createBottomTabNavigator({
    LoginForm: {
        screen: LoginForm,
        navigationOptions: {
            title: 'Login',
            activeTintColor: 'red',

            tabBarIcon: ({ tintColor, focused }) => (
                <Image source={AppImages.password} style={{ height: 25, width: 25, marginTop: 5 }} />
            ),
            labelStyle: {
                fontSize: 16,
                textAlign: 'center'
            },
            style: {
                backgroundColor: 'yellow',

            },
        },
    },
    SignupForm: {
        screen: SignupForm,
        navigationOptions: {
            title: 'SignUp',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image source={AppImages.icon} style={{ height: 25, width: 25, marginTop: 5 }} />
            ),
            activeTintColor: 'red',
            borderColor: '#4dd',
            borderWidth: 2,
            labelStyle: {
                fontSize: 16,
                textAlign: 'center',

            },
            style: {
                backgroundColor: 'blue',
            },
        },
    },

}, {
    tabBarOptions: {
        activeTintColor: 'red',
        showIcon: true,
        showLabel: true,
        style: {
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',

        }
    },
})

const AuthStack = createStackNavigator({
    // DrawerStackNavigator,
    tabNavigation,
    AutoStack,



    // DrawerStackNavigator
}, {
    headerMode: 'none'
})

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;