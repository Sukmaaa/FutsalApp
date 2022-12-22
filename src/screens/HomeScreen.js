import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'

import { API } from '../config/API';

import { ListItem, Avatar } from '@rneui/themed'
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    subtitle: 'Vice Chairman'
  }
];

const HomeScreen = ({navigation}) => {

  const [data, setData] = useState([])

  useEffect(() => {
    dataLapangan();
  }, [])

  const dataLapangan = async () => {
    try {

      const response = await API.get('/products');
      console.log(response.data.data.products)
      setData(response.data.data.products)

    } catch (error) {
      console.log(error)
      setIsloading(false)
    }
  }

  
  return (
    <View>
      {
        data.map((item, i) => (
          <ListItem onPress={() => navigation.navigate('DetailLapangan', {id: item.id})} key={i} bottomDivider>
            <Avatar source={{uri: 'http://192.168.88.16:4200/' + item.photo}} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.stock}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
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

export default HomeScreen