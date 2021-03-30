import React, {useState} from 'react';
import {StyleSheet, Button, View, Text, FlatList} from 'react-native';
import OtherDetail from '../components/OtherDetail';

/*function TrackingScreen({navigation}) {
  const track = [
    {location: 'Dublin', station: 'town'},
    {location: 'Kildare', station: 'maynooth'},
    {location: 'Monaghan', station: 'ulster canal'},
    {location: 'Meath', station: 'drummy'},
  ];
  const [colors, setColors] = useState([]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.textStyle}>Tracking Settings</Text>
      <Button
        title="cogWheel"
        onPress={() => navigation.navigate('HomeDuplicate')}
      />

      <Button title="Go back" onPress={() => navigation.goBack()} />
      <FlatList
        //make the list horizontal instead
        //horizontal
        //hide scrollbar
        //showsHorizontalScrollIndicator={false}
        keyExtractor={(loc) => track.location}
        data={track}
        renderItem={({item}) => {
          //element === {item: {location: 'Dublin' }, index: 0}
          return (
            <Text style={styles.listStyle}>
              {item.location} - {item.station}
            </Text>
          );
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View style={{height: 100, width: 100, backgroundColor: item}} />
          );
        }}
      />
      <OtherDetail locat={colors} />
      <Button
        title="Add a location"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  listStyle: {
    marginVertical: 20,
  },
});
///// other stuff i took out

<FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View style={{height: 100, width: 100, backgroundColor: item}} />
          );
        }}
      />

      <OtherDetail
        onRemove={() => dispatch({numToChange: 'locations', amount: LOC_DEC})}
        locat={colors}
      />

<Button
        title="Add a location"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

export default TrackingScreen;


const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};*/
