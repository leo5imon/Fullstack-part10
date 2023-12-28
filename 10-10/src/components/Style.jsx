import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      width: '100%',
      backgroundColor: '#24292e',
      height: '10%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
      fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    formContainer: {
        width: '80%',
        backgroundColor: '#ffffff',
        padding: 20,
      },
      input: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
      },
      buttonContainer: {
        marginTop: 10,
      },
    });

export default styles;
