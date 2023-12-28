import { Text, Pressable } from 'react-native';
import styles from './Style';

const AppBar = () => {
    return (
        <Pressable>
            <Text style={styles.text}>Repositories</Text>
        </Pressable>
    );
}

export default AppBar;