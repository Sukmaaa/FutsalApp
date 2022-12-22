import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'

import { API } from '../config/API';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ListItem, Avatar } from '@rneui/themed'

const AdminScreen = ({navigation}) => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const dataJourney = await AsyncStorage.getItem("bookingData")
    console.log(JSON.parse(dataJourney).data)
    setData(JSON.parse(dataJourney).data)
  }

  const tableHead = ['No', 'Nama', 'Email', 'phone', 'Tanggal', 'Jam', 'status'];

  const tableData = data?.map((item, i) => ([
      i + 1, 
      item.name,
      item.email, 
      item.phone, 
      item.tanggal,
      item.jam,
      "Approved"
  ]))

  return (
    <View style={styles.centeredView}>
        <ScrollView>
            <View style={styles.modalView}>
                <Text style={[styles.modalText, {marginTop: 0, fontSize: 25, fontWeight: 'bold'}]}>Report Booking</Text>
                <View >
                  <Text style={{marginTop: 70, fontSize: 25, fontWeight: 'bold'}}>Report Booking</Text>
                  <View style={{flexDirection: 'column', marginBottom: '50%', overflow: 'hidden'}}>
                      <View style={{width: '100%', marginTop: 30}}>
                          <Table borderStyle={{ borderWidth: 1, marginBottom: 10 }}>
                              <Row data={tableHead} flexArr={[2, 8, 6, 5, 5 ]} style={styles.head} textStyle={styles.text} />
                              <TableWrapper style={styles.wrapper}>
                                  <Rows
                                      data={tableData}
                                      flexArr={[2, 8, 6, 5, 5]}
                                      style={styles.row}
                                      textStyle={styles.text}
                                  />
                              </TableWrapper>
                          </Table>
                      </View>
                  </View>
                </View>
            </View>
        </ScrollView>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    padding: 15,
    paddingBottom: 25,
    marginTop: 20,
    width: '90%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  centeredView: {
    flex: 1,
    marginTop: 22
},

modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    height: '90%',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},

buttonModal: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center'
},

buttonConfirm: {
    width: '37%',
    borderRadius: 15,
    height: 70,
    marginTop: 35,
    backgroundColor: theme.colors.primary,
    padding: 5
},

modalText: {
    marginTop: 15,
    fontSize: 20,
    color: '#0B0063',
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center'
},
textButton: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
},

  head: {
      height: 40,
      backgroundColor: '#f1f8ff'
  },
  wrapper: {
      flexDirection: 'row'
  },
  text: {
      textAlign: 'center'
  },

  container2: {

    backgroundColor: '#FFF',
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  textInformation: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.6,
    width: '90%',
    marginVertical: 30    ,
    marginBottom: 10,
  },

  titleWarung: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    marginTop: 5,
  },
  boxLeft: {
    width: '60%',
    paddingHorizontal: 10,
    borderRightColor: '#000',
    borderWidth: 2
  },
  boxRight: {
    width: '35%',
    paddingHorizontal: 10,
    flexDirection: 'column',
    marginLeft: 5,
  },
  ButtonLihatMenu: {
    width: 91,
    height: 30,
    backgroundColor: '#21409a',
    borderRadius: 16,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  textLihatMenu: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  textButton: {
    fontSize: 15,
    textAlign: 'center',
    // marginTop:10,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      height: 220,
      width: 270,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
  },
  formLabel : {
  fontFamily : Platform.OS === 'ios' ? 'ProximaNova-Regular' : 'ProximaNova-Regular',
      fontWeight: 'bold',
      fontSize: 18,
  color:'#555555',
      alignItems: 'flex-start',
      textAlign: 'left',
      justifyContent: 'flex-start'
},
formInput: {
  fontFamily : Platform.OS === 'ios' ? 'ProximaNova-Regular' : 'ProximaNova-Regular',  
  borderColor: 'gray', 
  borderWidth: 1, 
  padding:10,
  borderRadius:5,
  marginTop:10,
  borderColor:'#bdc3c7'
},
});

export default AdminScreen