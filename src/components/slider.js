import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useState} from 'react'


const image = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTBb7UvhVRdrvWEjX5_BSkAHuqtOA3H3ntw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREMJI4d5vEbKV9TeYr4lgPbeOPiYup5M1aQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMXsH8bfbfbrLFXFmCfcntWHqS1FQQljTWg&usqp=CAU", // Network image
//  require('./assets/images/girl.jpg'),          // Local image
]

const {width} = Dimensions.get('window');
const height = width * 0.6;

const DetailLapangan = () => {

  const [active, setActive] = useState(0);
  

  return (
    <View style={styles.container}>
      <ScrollView 
        pagingEnabled 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.container}
      >
        {image.map((item, i) => (
          <Image 
            key={i}
            source={{uri: item}}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={styles.indicator}>
        {
          image.map((item, i) => (
            <Text key={i} style={ i == active ? styles.dotActive : styles.dot}>⬤</Text>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height
  },

  image: {
    width: width,
    height: height,
    resizeMode: 'cover'
  },

  indicator: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },

  dot: {
    margin: 3,
    color: '#888'
  },

  dotActive: {
    margin: 3,
    color: '#fff'
  },


  title: {
    fontSize: 20
  }
})

export default DetailLapangan