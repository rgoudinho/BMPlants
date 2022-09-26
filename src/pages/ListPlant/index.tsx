import { View, Button, Text, StyleSheet } from "react-native";
import React from "react";
import ListPlantComponent from "../../components/ListPlant";

export default function ListPlant() {
  return (
    <View style={styles.container}>
      <ListPlantComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
