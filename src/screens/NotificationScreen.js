import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function NotificationScreen({navigation}) {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textTitleStyle}>Notification Settings</Text>
      <Text style={styles.textYellowStyle}>Yellow Warning</Text>
      <Text style={styles.textRedStyle}>Red Warning</Text>
      <Button
        style={styles.centering}
        title="Confirm"
        onPress={() => navigation.push('News')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  textYellowStyle: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#999900',
    justifyContent: 'center',
  },
  textRedStyle: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
  },
  viewStyle: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black',
    //useless since using flex
    //justifyContent: 'space-between',
  },
  textTitleStyle: {
    alignSelf: 'center',
    flex: 0.3,
    fontSize: 20,
    alignItems: 'flex-end',
    //borderColor: 'blue',
    //borderWidth: 3,
  },
  centering: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default NotificationScreen;
