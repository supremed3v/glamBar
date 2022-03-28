import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import bgCard from '../../../assets/card-bg.jpeg'
import  {AntDesign}  from '@expo/vector-icons'

const Home = () => {
    const [search, setSearch] = useState('')
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.container}>

      <Text>
          Home
      </Text>
      
      <CustomInput 
            placeholder="Search"
            value={search}
            setValue={setSearch}
          />
      </View>
      
      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <Text>Stylers <Text>4.2</Text> </Text>
        <Text>Female</Text>
      </View>
      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <Text>Stylers <Text>4.2</Text> </Text>
        <Text>Female</Text>
      </View>
      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <Text>Stylers <Text>4.2</Text> </Text>
        <Text>Female</Text>
      </View>
      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <Text>Stylers <Text> 4.2</Text> </Text> 
        <Text>Female</Text>
        <AntDesign name="star" size={24} color="orange" />
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        marginTop: 50,
    },

    card:{
        
        width: 250,
        height: 200,
        // backgroundColor: "black",
    },
    cardImg: {
        borderRadius: 15,
        width:250,
        height:150,
        resizeMode: "cover",
    }



})

export default Home;