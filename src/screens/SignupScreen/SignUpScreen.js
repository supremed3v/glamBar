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
import React from "react";
const SignupScreen = () => {
    return (
<View style={styles.container}>
<Text style={styles.text}>SignupScreen</Text>
    </View>
    )
}

const styles= StyleSheet.create({
    text:{
        marginTop:50
    },
    container:{
        flex:1,
        alignItems:"center"
    }
})
export default SignupScreen;