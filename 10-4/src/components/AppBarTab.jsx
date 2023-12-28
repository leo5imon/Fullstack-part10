import { View } from 'react-native';
import styles from './Style';
import AppBar from './AppBar';

const AppBarTab = () => {
  return <View style={styles.container}>{<AppBar />}</View>;
};

export default AppBarTab;