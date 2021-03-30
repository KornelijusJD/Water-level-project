import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
//this is the home screen

function ComponentsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.textStyle}>Components Screen</Text>
      <Button
        title="Go to HomePage... again"
        onPress={() => navigation.push('HomePage')}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
      <Button
        style={styles.space}
        title="Confirm"
        onPress={() => navigation.push('Notifications')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  space: {
    paddingVertical: 20,
  },
});

export default ComponentsScreen;
