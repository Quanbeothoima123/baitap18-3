import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

import SignInScreen from "../screens/SingIn"; // Đảm bảo đường dẫn đúng
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Auth Stack cho màn hình đăng nhập
const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
  </AuthStack.Navigator>
);

// Main Tab Navigation cho các màn hình chính sau khi đăng nhập
const MainTab = createBottomTabNavigator();
const MainTabNavigator = () => (
  <MainTab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
      },
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Profile") {
          iconName = "user";
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#1e90ff",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);

// Stack chính cho các màn hình chính
const MainStack = createStackNavigator();
const MainStackNavigator = () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    {/* Màn hình đầu tiên của MainStack là MainTab */}
    <MainStack.Screen name="MainTab" component={MainTabNavigator} />
  </MainStack.Navigator>
);

// Cấu trúc chính của Router
export default function RootRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedStatus = await AsyncStorage.getItem("isLoggedIn");
        setIsLoggedIn(storedStatus === "true");
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false); // Mặc định về false nếu có lỗi
      }
    };
    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* Kiểm tra trạng thái đăng nhập */}
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
