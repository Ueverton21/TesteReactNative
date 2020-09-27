import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Checkbox = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.btnCheck}
        onPress={() => setChecked((checked) => !checked)}>
        <Text style={checked ? styles.checked : null}></Text>
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btnCheck: {
    height: 16,
    width: 16,
    borderRadius: 3,
    borderWidth: 1,
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#555',
  },
  title: {
    fontSize: 12,
    color: '#555',
  },
  checked: {
    height: 12,
    width: 12,
    borderRadius: 2,
    backgroundColor: '#3CB371',
  },
});

export default Checkbox;
