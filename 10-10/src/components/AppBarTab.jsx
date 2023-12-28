import { View, ScrollView } from 'react-native';
import styles from './Style';
import RepositoriesBar from './RepositoriesBar';
import SignBar from './SignBar';

const AppBarTab = () => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal>
            {<RepositoriesBar />}
            {<SignBar />}
        </ScrollView>
    </View>
  );
};

export default AppBarTab;