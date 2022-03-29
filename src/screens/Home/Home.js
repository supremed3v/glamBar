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
        <View style={styles.textSalon}>
        <Text>Stylers</Text>
        <Text style={styles.textRating}><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
        </View>
        <Text>Female</Text>
      </View>

      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <View style={styles.textSalon}>
        <Text>Stylers</Text>
        <Text style={styles.textRating}><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
        </View>
        <Text>Female</Text>
      </View>
      

      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <View style={styles.textSalon}>
        <Text>Stylers</Text>
        <Text style={styles.textRating}><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
        </View>
        <Text>Female</Text>
      </View>
      
      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <View style={styles.textSalon}>
        <Text>Stylers</Text>
        <Text style={styles.textRating}><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
        </View>
        <Text>Female</Text>
      </View>

      <View style={styles.card}>
        <Image source={bgCard} style={styles.cardImg} />
        <View style={styles.textSalon}>
        <Text>Stylers</Text>
        <Text style={styles.textRating}><Ionicons name='star' size={14} color="yellow" /> 4.2</Text>
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
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 10,
        // backgroundColor: "black",
    },
    cardImg: {
        borderRadius: 15,
        width:250,
        height:150,
        resizeMode: "cover",
    },

    textSalon:{
      fontSize: 48,
      flexDirection: "row",
      fontWeight: "bold",
      color: '#5085E1',
      alignItems: "center",
      justifyContent: "space-between",
      paddingRight: 20,
    },
    textRating: {
      paddingLeft: 90,
    }
    

})

export default Home;