import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'

import { API } from '../config/API'
import Slider from '../components/slider'
import { ListItem, TabView } from '@rneui/themed';

import Ionicons from "react-native-vector-icons/Ionicons";
import Button from '../components/Button';

const list = [
  {
    hari: 'Senin',
    jam: "08.00 - 22.00"
  },
  {
    hari: 'Selasa',
    jam: "08.00 - 22.00"
  },
  {
    hari: 'Rabu',
    jam: "08.00 - 22.00"
  },
  {
    hari: 'Kamis',
    jam: "08.00 - 22.00"
  },
  {
    hari: 'Jumat',
    jam: "08.00 - 22.00"
  },
  {
    hari: 'Sabtu',
    jam: "08.00 - 22.00"
  },
  {
    hari: 'Minggu',
    jam: "08.00 - 22.00"
  },
]

const DetailLapangan = ({route, navigation}) => {
  const { id } = route.params;

  const [data, setData] = useState({});
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    dataLapangan();
  }, [])

  const dataLapangan = async () => {
    try {

      const response = await API.get(`/product/${id}`);
      console.log(response.data.data.product)
      setData(response.data.data.product)

    } catch (error) {
      console.log(error)
    }
  }

  const onBooking = () => {
    navigation.navigate('Booking')
  }

  return (
    <ScrollView>
      <Slider/>

      <View style={styles.container}>
        <Text style={styles.title} >{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
      
      <Text style={[styles.title, {paddingVertical: 20}]}>Jam Operasional</Text>
      {
        list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{l.hari}</ListItem.Title>
              </ListItem.Content>
              <Text>{l.jam}</Text>
            </ListItem>
        ))
      }
      <Button mode="contained" onPress={onBooking} >
          Booking Lapangan
        </Button>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  title: {
    fontSize: 20,
    color: 'grey'
  },

  description: {
    marginTop: 20
  }
})

export default DetailLapangan