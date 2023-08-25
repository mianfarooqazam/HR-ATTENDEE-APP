import { StyleSheet, Text, TextInput, View,Button, TouchableOpacity , ScrollView,KeyboardAvoidingView } from 'react-native'
import { CheckBox } from '@rneui/themed';
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const SignUp = () => {
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
    <View style={styles.container}>
    <View style={styles.logo}>
      <Ionicons name="ios-logo-react" size={80} color="black" />
    </View>
    <View style={styles.welcome}>
      <Text style={{ fontSize: 28,fontWeight:'bold' }}>
        Register Account{"\n"}to{" "}
        <Text style={{ color: "#3085fe" }}>HR ATTENDEE</Text>{" "}
      </Text>
      <Text style={{ color: "#b4b7bc" }}>Hello there, register to continue</Text>
    </View>
    <View style={styles.form}>
      <TextInput placeholder="Enter First Name" style={styles.input} />
      <TextInput placeholder="Enter Last Name" style={styles.input} />
      <TextInput placeholder="Enter Email Address" style={styles.input} />
      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        secureTextEntry={true}
      />
       <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry={true}
      />
     {/* <View style={{flex:1,flexDirection:'row'}}>
     <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
         />
         <Text>I agree to the <Text style={{ color: "#3085fe" }}> Terms & Conditions & Privacy{"\n"} Policy</Text> set out by this site.</Text>
     </View> */}
    
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#ffff", textAlign: "center", fontSize: 20 }}>
          Register
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
        Already have an account?
        <Text style={{ color: "#3085fe" }}> Login</Text>
      </Text>
    </View>
  </View>
  </ScrollView>
  </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // paddingVertical: 20,
      },
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
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
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
})