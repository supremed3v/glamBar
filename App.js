
import {
  StyleSheet,
  View,
} from "react-native";

import React from "react";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignupScreen/SignUpScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignInScreen/> */}
      <SignUpScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
