import { StyleSheet, Text, View } from "react-native";

import { Provider } from 'react-native-paper'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "./src/core/theme"
import { UserContextProvider } from "./src/context/userContext";

// Screens

import {
  AuthScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomeScreen,
  HistoryScreen,
  DetailScreen,
  BookingScreen,
  ProfileScreen,
  AdminScreen
} from './src/screens'

const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const HistoryStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function TabStackScreen() {
  return (
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
    
  );
}

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
      <HomeStack.Screen name="DetailLapangan" component={DetailScreen} />
      <HomeStack.Screen name="Booking" component={BookingScreen} />
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
    <Provider theme={theme}>
      <UserContextProvider>
        <NavigationContainer>
          <LoginStack.Navigator
            initialRouteName="AuthLoading"
            screenOptions={{
              headerShown: false,
            }}
          >
            <LoginStack.Screen name="StartScreen" component={StartScreen} />
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
            <LoginStack.Screen name="RegisterScreen" component={RegisterScreen} />
            <LoginStack.Screen name="Dashboard" component={TabStackScreen} />
            <LoginStack.Screen name="AuthLoading" component={AuthScreen} />
            <LoginStack.Screen name="Admin" component={AdminScreen} />
            <LoginStack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </LoginStack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </Provider>
  );
}
