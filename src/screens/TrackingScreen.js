import React, {useReducer, useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  FlatList,
  TextInput,
} from 'react-native';
import OtherDetail from '../components/OtherDetail';
//action is a way to work "how should we change the state object"

const LOC_INC = 1;
const reducer = (state, action) => {
  // state === locations: number;
  //action === { type: 'change_locations', payload: 1||-1};
  switch (action.type) {
    case 'change_locations':
      return state.locations + action.payload > 10 ||
        state.locations + action.payload < 0
        ? state
        : {...state, locations: state.locations + action.payload};
    default:
      return state;
  }
};

function TrackingScreen({navigation}) {
  const [state, dispatch] = useReducer(reducer, {locations: 0});
  const {locations} = state;
  const [name, setName] = useState('');

  console.log(state.locations);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.textStyle}>Tracking Settings</Text>
      <Button
        title="cogWheel"
        onPress={() => navigation.navigate('HomeDuplicate')}
      />
      <Text>Location to work with: </Text>
      <TextInput
        style={styles.input}
        //autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <OtherDetail
        loc={name}
        locs={'Locations: ' + state.locations}
        onAdd={() => dispatch({type: 'change_locations', payload: LOC_INC})}
        onRemove={() =>
          dispatch({type: 'change_locations', payload: -1 * LOC_INC})
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${locations},${0},${0})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  listStyle: {
    marginVertical: 20,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    width: 140,
  },
});

export default TrackingScreen;
