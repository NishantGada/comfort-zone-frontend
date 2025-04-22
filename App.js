import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Visits from './pages/Visits';
import Favorites from './pages/Favorites';
import { CommonStyles } from './utils/StyleConstants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={() => ({
      tabBarStyle: {
        backgroundColor: CommonStyles.background,
        borderWidth: null
      }
    })} >
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name="Visits"
        component={Visits}
      />
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name="Favorites"
        component={Favorites}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 10,
    backgroundColor: CommonStyles.background,
  },
});
