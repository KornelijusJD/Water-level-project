import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function ComponentsDupeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.textStyle}>Components Screen</Text>
      <Button title="Confirm" onPress={() => navigation.navigate('Tracking')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsDupeScreen;
