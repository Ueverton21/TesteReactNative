import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import RNPickerSelect from 'react-native-picker-select';

function PickerInput({ data, onValueChange, value, width, title }) {
  const placeholder = {
    label: 'Selecione uma opção',
    value: null,
    color: '#9EA0A4',
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textForm}>{title}</Text>
      <View style={styles.content}>
        <RNPickerSelect
          placeholder={placeholder}
          items={data}
          onValueChange={onValueChange}
          style={{
            inputAndroidContainer: { width: width },
            inputIOSContainer: { width: width },
            inputAndroid: { ...width },
            ...pickerSelectStyles,
            iconContainer: {
              top: 10,
              right: 12,
            },
          }}
          value={value}
          useNativeAndroidPickerStyle={false}
          textInputProps={{ underlineColor: 'yellow' }}
          Icon={() => {
            return (
              <Icon
                name={'chevron-down'}
                style={{ marginTop: 8 }}
                size={20}
                color={'#666'}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {},
  boxLeft: {
    marginRight: 10,
  },
  textForm: {
    marginBottom: 5,
    color: '#555',
  },
  picker: { fontSize: 10 },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});
export default PickerInput;
// <RNPickerSelect
// placeholder={placeholder}
// onValueChange={onValueChange}
// value={value}
// items={data}
// style={{
//   iconContainer: {
//     top: 5,
//     right: 15,
//   },
//   inputAndroid: styles.inputAndroid,
//   inputIOS: styles.inputIOS,
//   inputAndroidContainer: { width: width },
//   inputIOSContainer: { width: width },
// }}
// useNativeAndroidPickerStyle={true}
// Icon={() => (
//   <Icon
//     name={'chevron-down'}
//     style={{ marginTop: 8 }}
//     size={20}
//     color={'#666'}
//   />
// )}
// />
