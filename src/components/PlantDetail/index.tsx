import { View, Text, StyleSheet, Button, Image } from "react-native";
import React, { useContext } from "react";
import { ModalContext } from "../AppModal";
import InterfacePlant from "../../services/data/InterfacePlant";
import { API_BASE_URL } from "../../services/axiosApi";

import { styles } from "./styles";

interface PlantDetailsProps {
  item: InterfacePlant;
}

const placeholderImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";

export default function PlantDetail({ item }: PlantDetailsProps) {
  const appModal = useContext(ModalContext);

  const handleBack = () => {
    appModal.hide();
  };

  const image = item.image ? API_BASE_URL + item.image : placeholderImage;

  console.log(image);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.plantTitle}>{item.name}</Text>
      <Text style={styles.scientificName}>{item.scientific_name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Image style={styles.image} source={{ uri: image }}></Image>
      <Button title="Sair" onPress={handleBack} />
    </View>
  );
}
