import React from 'react';
import {StyleSheet, Button, View, Text, FlatList} from 'react-native';

const NotifDetail = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>more info</Text>
    </View>
);
};

const styles = StyleSheet.create({});

export default NotifDetail;
