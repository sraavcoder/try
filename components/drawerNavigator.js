import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import  Switch  from './Navigate';
import SideMenu  from './sideMenu';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : Switch
  },
},
  {
    contentComponent:SideMenu
  },
  {
    initialRouteName : 'Home'
  })