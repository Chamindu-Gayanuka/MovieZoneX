import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TvShows = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>
        Hello From TvShows Screen!!
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

export default TvShows;