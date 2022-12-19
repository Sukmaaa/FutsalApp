import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Button from '../components/Button'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('StartScreen')}>
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