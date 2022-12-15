import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import InterfacePlant from "../../../services/data/InterfacePlant";
import { ModalContext } from "../../AppModal";
import PlantDetail from "../../PlantDetail";
import { styles } from "./styles";

interface CardPlantProps {
  item: InterfacePlant;
}

export default function CardPlant({ item }: CardPlantProps) {
  const appModal = useContext(ModalContext);

  const handleClickPlant = (item: InterfacePlant) => {
    appModal.show(<PlantDetail item={item} />);
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
