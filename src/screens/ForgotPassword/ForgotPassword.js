import {
    ImageBackground,
    TextInput,
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    ScrollView
  } from "react-native";

  import React from "react"
  import image from "../../../assets/bg-screen.jpg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";

  import React, { useState } from "react";

  const ForgotPassword = () => {
      return (
          <View style = {styles.container}>
          <Text styles={styles.text}>
              Forgot Password
          </Text>
          </View>
      )

  }
  const styles = StyleSheet.create({
    container:{
        marginTop: 50,
    },
    text:{
        color: '#5085E1',
        fontSize: 30,
        fontWeight: 'bold',
        

      }
  })
  export default ForgotPassword;
