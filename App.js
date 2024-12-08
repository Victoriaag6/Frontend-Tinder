import { StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/(userPages)/login';
import Home from './app/home';

const Stack = createStackNavigator();


  export default function App() {
      return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
