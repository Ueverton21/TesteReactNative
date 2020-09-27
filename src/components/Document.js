import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
// import { Container } from './styles';

const Document = (props) => {
  return (
    <View coverScreen={true} style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={props.onPress} style={styles.btnDelete}>
        <Icon name={'x'} size={15} color={'#666'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    padding: 10,
    borderColor: '#999',
    borderWidth: 0.8,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 2,
    margin: 5,
  },
  title: {
    fontSize: 10,
    color: '#555',
  },
});

export default Document;
