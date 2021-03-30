import React, { useState } from 'react';
import {Text, Button, View, StyleSheet, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//this is the welcome screen
function HomeScreen({navigation}) {
  const [password, setPass] = useState('');
  const terms = 'Terms of use!';
  const disclaimer = 'Disclaimer';
  //JSX
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>Welcome Screen</Text>
      <Button
        title="Go to Components"
        onPress={() => navigation.navigate('HomePage')}
      />
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPass(newValue)}
      />
      {password.length < 5 ? <Text>Password must at least be 5 letters long</Text> : null}
      <Text style={styles.subtext}>
        {disclaimer} and {terms}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  subtext: {
    fontSize: 20,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    width: 140,
  },
});

export default HomeScreen;
