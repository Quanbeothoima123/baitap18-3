import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";

const IconButtonGoogle = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require("../assets/google-icon.png")}
        style={styles.icon}
      />
      <Text style={styles.text}>Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default IconButtonGoogle;
