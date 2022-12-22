import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import React, {useEffect} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthLoading = ({navigation}) => {

    const cekData = async () => {
        const userToken = await AsyncStorage.getItem('user');
        console.log(userToken)

        if(userToken === null){
            navigation.navigate('StartScreen')
        } else if (JSON.parse(userToken).role === "admin"){
            navigation.navigate('Admin')
        } else if (JSON.parse(userToken).role === "user"){
            navigation.navigate('Dashboard')
        } else {
            navigation.navigate('StartScreen')
        }
    }

    useEffect(() => {
        cekData();
    }, [])

    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
            <StatusBar barStyle='default' backgroundColor="#FFF" />
            <ActivityIndicator size="large" color="#000"/>
        </View>
    )
}

export default AuthLoading