import React, {useState} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import api from '../api';
import axios from 'axios';

axios.get('https://waterlevel.ie/geojson/latest/').then((resp) => {
  console.log(resp.data.features[0].properties.station_name);
  console.log(resp.data.features[0].properties.value);
});
function NewsScreen({navigation}) {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  /*const searchApi = async (searchTerm) => {
    try {
      const response = await api.get('/latest/', {
        features: {
          sensor_ref: '0001',
          station_name: 'Sandy Mills',
        },
      });
      setResults(response.data.county);
    } catch (err){
      setErrorMessage('Something went wrong');
    }
  };*/

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text style={styles.textStyle}>Recent flooding events</Text>
      <Text>{term}</Text>
      <Button
        title="SettingWheel"
        onPress={() => navigation.push('Settings')}
      />
      <Button title="Location" onPress={() => navigation.push('Information')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default NewsScreen;
