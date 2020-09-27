import React from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import HeaderStyle from './HeaderStyle';

const Header = () => {
  return (
    <View style={HeaderStyle.container}>
      <TouchableOpacity onPress={() => null} style={HeaderStyle.circleButton}>
        <Icon name={'arrow-left'} size={22} color={'#D00'}/>
      </TouchableOpacity>
      <Text style={HeaderStyle.title}>LOTE: LT021 - N° 1</Text>
      <TouchableOpacity onPress={() => null} style={HeaderStyle.circleButton}>
        <Icon name={'home'} size={22} color={'#D00'}/>
      </TouchableOpacity>
    </View>
  );
}

export default Header;