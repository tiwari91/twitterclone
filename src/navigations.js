import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';

const TAB_ICON_SIZE = 20;

const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitle: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="home" />
        ),
      }),
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: () => ({
        headerTitle: 'Explore',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="search" />
        ),
      }),
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: () => ({
        headerTitle: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="bell" />
        ),
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        headerTitle: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="user" />
        ),
      }),
    },
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: '#55ACEE',
      inactiveTintColor: '#CAD0D6',
      style: {
        backgroundColor: '#FFFFFF',
        height: 50,
        paddingVertical: 5,
      },
    },
  },
);

const AppMainNav = StackNavigator(
  {
    Home: {
      screen: Tabs,
    },
  },
  {
    cardStyle: {
      backgroundColor: '#F1F6FA',
    },
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#444B52',
      },
    }),
  },
);

export default AppMainNav;
