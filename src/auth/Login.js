import { StyleSheet, Text, TextInput, View,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Ionicons name="ios-logo-react" size={80} color="black" />
      </View>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 28 ,fontWeight:'bold'}}>
          Welcome Back 👋{"\n"}to{" "}
          <Text style={{ color: "#3085fe" }}>HR ATTENDEE</Text>{" "}
        </Text>
        <Text style={{ color: "#b4b7bc" }}>Hello there, login to continue</Text>
      </View>
      <View style={styles.form}>
        <TextInput placeholder="Enter Email Address" style={styles.input} />
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          secureTextEntry={true}
        />
        <Text style={{ width: "100%", textAlign: "right", color: "#3085fe" }}>
          Forgot Password?
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#ffff", textAlign: "center", fontSize: 20 }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center" ,color:"grey"}}>
          Or continue with social account
        </Text>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#fff", borderColor: "grey" },
          ]}
        >
          <Text style={{ color: "black", textAlign: "center", fontSize: 20 }}>
            <AntDesign name="google" size={24} color="red" /> Google
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <Text>
          Didn't have an account?
          <Text style={{ color: "#3085fe" }}> Register</Text>
        </Text>
      </View>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
    // alignItems: "center",
    // justifyContent: "center",
    margin: 8,
    // width:"90%"
  },
  logo: {

    // backgroundColor: "orange",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  welcome: {
    // backgroundColor: "yellow",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
//    width:"100%"
  },
  form: {
    // backgroundColor: "lightblue",
    flex: 3,
    // alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    width: "100%",
    fontSize: 24,
    borderColor:"#3085fe"
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 17,
    width: "100%",
    borderColor:"#3085fe",
    backgroundColor:"#3085fe",
    
  },
  register: {
    // backgroundColor: "purple",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});