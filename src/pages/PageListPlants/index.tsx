import { View, Button, Text, StyleSheet } from "react-native";
import React from "react";
import PlantsFlatlist from "../../components/PlantsFlatlist";

export default function PageListPlants({ navigation }: any) {
  return (
    <View style={styles.container}>
      <PlantsFlatlist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
