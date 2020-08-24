import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ItemDonate from '../screens/itemDonate';
import ItemRequest from '../screens/itemRequest';

import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default class Switch extends React.Component {
  render(){
  return (
    <View>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Request Item" component={ItemRequest} />
            <Tab.Screen name="Exchange Item" component={ItemDonate} />
          </Tab.Navigator>
        </NavigationContainer>
        </View>
  );
  }
}
