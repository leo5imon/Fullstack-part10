import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBarTab from './AppBarTab';
import SignIn from './SignIn';
import { Route, Routes, Navigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
    <AppBarTab />
    <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </View>
  );
};

export default Main;