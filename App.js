import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';


import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

import Switch from './components/Navigate';

import { AppDrawerNavigator } from './components/drawerNavigator';

export default function App () {
    return (
      <View>
        <AppContainer />
      </View>
    );
}

var AppNavigator = createSwitchNavigator({ 
  Home: {screen: Home}, 
  Drawer :  AppDrawerNavigator,
});

const AppContainer = createAppContainer(AppNavigator);
