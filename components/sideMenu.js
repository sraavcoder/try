import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

import firebase from 'firebase';

export default class SideMenu extends React.Component {
  render(){
    return(
      <View style={{flex:1}} >
        <View style={styles.drawerItemsContainer} >
           <DrawerItems
             {...this.props} 
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
    drawerItemsContainer:{
    flex:0.8,
  },
  // logOutContainer: {
  //   flex:0.2,
  //   justifyContent:'flex-end',
  //   paddingBottom:30,
  // },
  // logOutButton:{
  //   height:30,
  //   width:"100%",
  //   justifyContent:'center',
  //   padding:10,
  // }
})
