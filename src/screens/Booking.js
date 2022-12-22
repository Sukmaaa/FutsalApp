import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Booking = ({navigation}) => {

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [nama, setNama] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })
  const [tanggal, setTanggal] = useState({ value: '', error: '' })
  const [jam, setJam] = useState({ value: '', error: '' })
  const [isLoading, setIsloading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    tanggal: "",
    jam: "",
    phone: "",
    email: "",
    attachment: { name: "Attache of transaction" },
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
    console.log(formData);
  };

  const onBooking = () => {
    if (
      formData.name &&
      formData.tanggal &&
      formData.jam &&
      formData.phone &&
      formData.email
    ) {
      AsyncStorage.setItem("bookingData", JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        tanggal: formData.tanggal,
        jam: formData.jam
      }))

      navigation.navigate('Admin')
    }
  };

  return (
    <ScrollView>
      <Background>
        <Header>Form Booking</Header>
        <TextInput
          label="Nama"
          returnKeyType="next"
          value={formData.name}
          onChangeText={(e) => handleChange(e)}
          autoCapitalize="none"
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={formData.email}
          onChangeText={(e) => handleChange(e)}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="No Handphone"
          returnKeyType="done"
          value={formData.phone}
          onChangeText={(e) => handleChange(e)}
        />
        <TextInput
          label="Tanggal"
          returnKeyType="done"
          value={formData.tanggal}
          onChangeText={(e) => handleChange(e)}
          
        />
        <TextInput
          label="Jam"
          returnKeyType="done"
          value={formData.jam}
          onChangeText={(e) => handleChange(e)}
        />
       
        <Button mode="contained" onPress={onBooking}>
          Booking
        </Button>
      </Background>
    </ScrollView>
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

export default Booking