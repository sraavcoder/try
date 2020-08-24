import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          backgroundColor={'#ffba0c'}
          centerComponent={{
            text: 'Settings Screen',
            style: { color: '#fff', fontSize: 25 },
          }}
        />
      </View>
    );
  }
}

