import React, { useState, useContext } from 'react'
import { TouchableOpacity, StyleSheet, View, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { UserContext } from '../context/userContext'
import DataValue from '../dummy/dataDummy'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from 'react-native-modal-loader'

export default function LoginScreen({ navigation }) {
  let dataUser = DataValue.users.data

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [isLoading, setIsloading] = useState(false)

  const { state, dispatch } = useContext(UserContext);

  const onLoginPressed = () => {
    setIsloading(true)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    const authUser = dataUser.filter((user) => {
      return (
        user.email === email.value && 
        user.password === password.value
      )
    })

    if(authUser.length > 0){
      AsyncStorage.setItem("user", JSON.stringify({
        id: authUser[0].id,
        role: authUser[0].role,
        fullname: authUser[0].fullname,
        email: authUser[0].email,
        password: authUser[0].password
      }))

      dispatch({
        type: "LOGIN",
        payload: {
          user: {
            id: authUser[0].id,
            role: authUser[0].role,
            fullname: authUser[0].fullname,
            email: authUser[0].email,
            password: authUser[0].password
          },
        },
      });

      setIsloading(false)
      if(authUser[0].role === "admin"){
        navigation.navigate("Dashboard")
      } else {
        navigation.navigate('Dashboard')
      }
      
    }else {
      setIsloading(false)
      Alert.alert("Login Authentication", "Password atau Username Salah")
    }
  }

  return (
    <>
      <Loader loading={isLoading} color="green" size='large' />
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Welcome back.</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
