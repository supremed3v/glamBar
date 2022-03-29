import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import bgCard from '../../../assets/card-bg.jpeg'
import  Ionicons  from '@expo/vector-icons/Ionicons'

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
        <View style={styles.textContainer}>
        <Text>Stylers</Text>
        
        <Text><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
        </View>
        <Text>Female</Text>
      </View>

      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <View style={styles.textContainer}>
        <Text>Stylers</Text>
        
        <Text><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
        </View>
        <Text>Female</Text>
      </View>
      

      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <View style={styles.textContainer}>
        <Text>Stylers</Text>
        
        <Text><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
        </View>
        <Text>Female</Text>
      </View>
      
      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <View style={styles.textContainer}>
        <Text>Stylers</Text>
        
        <Text><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
        </View>
        <Text>Female</Text>
      </View>

      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <View style={styles.textContainer}>
        <Text>Stylers</Text>
        
        <Text><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
        </View>
        <Text>Female</Text>
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
    },

    textContainer:{
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between"
    }

})

export default Home;