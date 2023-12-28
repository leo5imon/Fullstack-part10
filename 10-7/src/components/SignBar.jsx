import { Text } from 'react-native';
import styles from './Style';
import { Link } from "react-router-native";

const SignBar = () => {
    return (
        <Link to="/sign">
            <Text style={styles.text}>Sign-In</Text>
        </Link>
    );
}

export default SignBar;