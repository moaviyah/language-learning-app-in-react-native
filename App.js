import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CollectionsScreen from './screens/CollectionsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
               tabBarActiveTintColor:'#4caf50',
               tabBarInactiveTintColor:'black',
          headerShown:false,
    tabBarIcon: ({ color, size }) => (
      <AntDesign name="home" size={size} color={color} />
    ),
  }}/>
        <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
               tabBarActiveTintColor:'#4caf50',
               tabBarInactiveTintColor:'black',
          headerShown:false,
    tabBarIcon: ({ color, size }) => (
      <Fontisto name="favorite" size={size} color={color} />
    ),
  }}/>
        <Tab.Screen name="Collections" component={CollectionsScreen} 
        options={{
          tabBarActiveTintColor:'#4caf50',
          tabBarInactiveTintColor:'black',
          headerShown:false,
    tabBarIcon: ({ color, size }) => (
      <FontAwesome name="folder-open" size={size} color={color} />
    ),
    
  }}
  />
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
          tabBarActiveTintColor:'#4caf50',
          tabBarInactiveTintColor:'black',
          headerShown:false,
    tabBarIcon: ({ color, size }) => (
      <FontAwesome name="gear" size={size} color={color} />
    ),
  }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
