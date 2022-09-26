import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import data_plant from "../../services/data/api_data_plant";

export default function CardPlant({ item }: data_plant) {
  const handleClickPlant = (item: data_plant) => {
    console.log("Clicked on item " + item.id);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleClickPlant(item)}
      >
        <Text style={styles.movieTitle}>{item.name}</Text>

        <View style={styles.movieFooter}>
          <Text>{item.scientificName}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ddd",
    marginBottom: 8,
    padding: 8,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  movieFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
