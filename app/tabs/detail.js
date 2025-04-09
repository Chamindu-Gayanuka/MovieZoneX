import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>
        Hello From Details Screen!!
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "bold",
  },
});

export default Details;