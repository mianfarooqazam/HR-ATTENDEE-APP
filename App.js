import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/Index';
import Login from './src/auth/Login';
import ForgotPassword from './src/auth/ForgotPassword';
import SignUp from './src/auth/SignUp';
export default function App() {
  return (
    <View style={styles.container}>
    
       <SignUp/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
});
