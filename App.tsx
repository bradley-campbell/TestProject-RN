import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>

        <TouchableOpacity
          onPress={() => alert("Hello World!")}
          style={styles.button}
        >
          <Text style={styles.text}>Pick a photo</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
