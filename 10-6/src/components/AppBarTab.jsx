import { View } from 'react-native';
import styles from './Style';
import RepositoriesBar from './RepositoriesBar';
import SignBar from './SignBar';

const AppBarTab = () => {
  return (
    <View style={styles.container}>
        {<RepositoriesBar />}
        {<SignBar />}
    </View>
  );
};

export default AppBarTab;