import React, {useState} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import api from '../api';

function InfoScreen({navigation}) {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await api.get('/last');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.textStyle}>Recent flooding events</Text>
      <Button
        title="SettingWheel"
        onPress={() => navigation.push('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>We have found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default InfoScreen;
