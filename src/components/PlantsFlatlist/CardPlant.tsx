import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import InterfacePlant from "../../services/data/InterfacePlant";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/EnumScreenNames";
import { ModalContext } from "../AppModal";
import PlantDetail from "../PlantDetail";

interface CardPlantProps {
  item: InterfacePlant;
}

export default function CardPlant({ item }: CardPlantProps) {
  const appModal = useContext(ModalContext);

  const handleClickPlant = (item: InterfacePlant) => {
    appModal.show(<PlantDetail />);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleClickPlant(item)}>
        <Text style={styles.plantTitle}>{item.name}</Text>
        <Text style={styles.scientificName}>{item.scientific_name}</Text>
        <Text style={styles.description}>{item.description}</Text>
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
    fontWeigth: "times",
    margin: 10,
    marginTop: 10,
  },
});
