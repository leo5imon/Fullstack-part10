import FormikTextInput from './FormikTextInput';
import { View, Pressable, Text } from 'react-native';
import { Formik } from 'formik';
import styles from './Style';

const SignIn = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.formContainer}>
          <FormikTextInput style={styles.input} name="username" placeholder="Username" />
          <FormikTextInput style={styles.input} secureTextEntry="true" name="password" placeholder="Password" />
          <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
            <Text>Log-in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;