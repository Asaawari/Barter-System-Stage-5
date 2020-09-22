import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}

const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen : {screen : SignUpLoginScreen},
  Drawer:{screen: AppDrawerNavigator},
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
