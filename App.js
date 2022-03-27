
import {
  StyleSheet,
  View,
} from "react-native";

import React from "react";

import SignInScreen from "./src/screens/SignInScreen/SignInScreen"
import ForgotPassword from "./src/screens/ForgotPassword/forgotPassword";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignInScreen /> */
      }
      <ForgotPassword/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
