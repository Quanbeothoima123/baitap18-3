import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomTextInput from "../component/CustomTextInput";
import IconButtonGoogle from "../component/IconButtonGoogle";
import IconButtonFacebook from "../component/IconButtonFaceBook";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (email && password) {
      try {
        await AsyncStorage.setItem("isLoggedIn", "true");
        navigation.navigate("MainTab");
      } catch (error) {
        Alert.alert("Lỗi", "Không thể lưu trạng thái đăng nhập!");
      }
    } else {
      Alert.alert("Lỗi", "Vui lòng nhập email và mật khẩu!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput
        label="Email ID"
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      <CustomTextInput
        label="Password"
        placeholder="Enter your password here!"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialButtons}>
        <IconButtonGoogle onPress={() => console.log("Google Sign In")} />
        <IconButtonFacebook onPress={() => console.log("Facebook Sign In")} />
      </View>

      <Text style={styles.signUpText}>
        Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#FFA500",
    marginBottom: 15,
  },
  signInButton: {
    backgroundColor: "#FFA500",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  signInText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  orText: {
    textAlign: "center",
    marginVertical: 15,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  signUpText: {
    textAlign: "center",
  },
  signUpLink: {
    color: "#FFA500",
    fontWeight: "bold",
  },
});

export default SignInScreen;
