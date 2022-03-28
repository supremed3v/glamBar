
import {
  StyleSheet,
  View,
} from "react-native";

import React from "react";

import SignInScreen from "./src/screens/SignInScreen/SignInScreen"
import ForgotPassword from "./src/screens/ForgotPassword/ForgotPassword";
import TermsandConditions from "./src/screens/TermsandConditions/TermsandConditions";
import SignupScreen from "./src/screens/SignupScreen/SignUpScreen";
import ClientDetails from "./src/screens/ClientDetails/ClientDetails";
import Home from './src/screens/Home'
import SalonScreen from './src/screens/SalonScreen'
export default function App() {
  return ( 
    <View style={styles.container}>
      {/* <SignInScreen /> */}
      {/* <ForgotPassword/>  */}
      {/* <SignupScreen/> */}
      {/* <TermsandConditions/> */}
      {/* <ClientDetails/> */}
      {/* <Home/> */}
      <SalonScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
