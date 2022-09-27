import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import InterfacePlant from "../../services/data/InterfacePlant";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/EnumScreenNames";

interface CardPlantProps {
  item: InterfacePlant;
}

export default function CardPlant({ item }: CardPlantProps) {
  const navigation = useNavigation();
  const handleClickPlant = (item: InterfacePlant) => {
    navigation.navigate(ScreenNames.Plant, { item });
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
