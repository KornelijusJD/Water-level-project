import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

const OtherDetail = ({loc, locs, onAdd, onRemove}) => {
  return (
    <View>
      <Text>{locs}</Text>
      <Button onPress={() => onAdd()} title={`Add Location: ${loc}`} />
      <Button onPress={() => onRemove()} title={`Remove Location: ${loc}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OtherDetail;
