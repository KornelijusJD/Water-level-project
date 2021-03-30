// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import NewsScreen from './src/screens/NewsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TrackingScreen from './src/screens/TrackingScreen';
import ComponentsDupeScreen from './src/screens/ComponentsDupeScreen';
import InfoScreen from './src/screens/InfoScreen';
/*function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}*/

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="HomePage" component={ComponentsScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Tracking" component={TrackingScreen} />
        <Stack.Screen name="HomeDuplicate" component={ComponentsDupeScreen} />
        <Stack.Screen name="Information" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
