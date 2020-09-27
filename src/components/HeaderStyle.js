import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    circleButton: {
      backgroundColor: '#FFC0CB',
      padding: 3,
      height: 36,
      width: 36,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333'
    }
});