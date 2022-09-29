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
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleClickPlant(item)}>
        <Text style={styles.plantTitle}>{item.name}</Text>
        <Text style={styles.scientificName}>{item.scientificName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.movieFooter}></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: "#078E07",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fbfbfb",
    margin: 8,
    marginVertical: 12,
  },
  plantTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 5,
  },
  scientificName: {
    fontSize: 12,
    font: "italic",
    marginHorizontal: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "times",
    margin: 10,
    marginTop: 10,
  },
});
