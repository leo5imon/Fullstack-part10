import { Text } from 'react-native';
import styles from './Style';
import { Link } from "react-router-native";

const RepositoriesBar = () => {
    return (
        <Link to="/">
            <Text style={styles.text}>Repositories</Text>
        </Link>
    );
}

export default RepositoriesBar;