import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import 'react-native-gesture-handler';

//Page imports
import SplashScreen from './pages/Splashscreen';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AddMembers from './pages/AddMembers';
import CreateGroup from './pages/CreateGroup';
import GroupList from './pages/GroupList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      {/* <Stack.Navigator initialRouteName="GroupList"> */}
      <Stack.Screen
          name="CreateGroup"
          component={CreateGroup}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="AddMembers"
          component={AddMembers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfile"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GroupList"
          component={GroupList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register', 
            headerStyle: {
              backgroundColor: '#307ecc',
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
