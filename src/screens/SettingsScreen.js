import React from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
import NotifDetail from '../components/NotifDetail';

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.textStyle}>Settings</Text>
      <TouchableOpacity onPress={() => navigation.push('Notifications')}>
        <Text>Change Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        //can use either .navigate or even .push
        onPress={() => navigation.push('HomeDuplicate')}>
        <Text>Change Main Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Tracking')}>
        <Text>Add/Remove tracked places</Text>
      </TouchableOpacity>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default SettingsScreen;
