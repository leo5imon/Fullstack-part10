import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      width: '100%',
      backgroundColor: '#24292e',
      height: '10%'
    },
    text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20
    },
    });

export default styles;
