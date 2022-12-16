import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

// Pages

import HomeScreen from "./src/pages/HomeScreen";
import HistoryScreen from "./src/pages/HistoryScreen";
import ProfileScreen from "./src/pages/ProfileScreen";

const HomeStack = createNativeStackNavigator();
const HistoryStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#013e23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#013e23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HistoryStack.Screen name="Settings" component={HistoryScreen} />
    </HistoryStack.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#013e23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <ProfileStack.Screen name="Profiles" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Main") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "History") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#BDDFCA",
          tabBarStyle: {
            backgroundColor: '#013e23',
          },
          headerShown: false
        })}
      >
        <Tab.Screen name="Main" component={HomeStackScreen} />
        <Tab.Screen name="History" component={HistoryStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
