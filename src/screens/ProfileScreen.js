import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Button from '../components/Button'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthToken } from '../config/API';

const ProfileScreen = ({navigation}) => {

  const onLogout = () => {
    AsyncStorage.clear();
    setAuthToken();
    navigation.navigate("StartScreen");
  }
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button mode="contained" onPress={onLogout}>
        Logout
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  }
})

export default ProfileScreen