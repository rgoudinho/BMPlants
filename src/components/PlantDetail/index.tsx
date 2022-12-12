import { View, Text, StyleSheet, Button, Image } from "react-native";
import React, { useContext } from "react";
import { ModalContext } from "../AppModal";
import InterfacePlant from "../../services/data/InterfacePlant";

interface PlantDetailsProps {
  item: InterfacePlant;
}

const tempImage =
  "https://lh6.googleusercontent.com/dPvLqnsumSbqlVxixyr8Vb1WQBvyFkl1WQMx5VVMSSnncR95PkpN7ELtYPbaCQzHWF2XlRDHGpjwXTQi7yR7DpkgUyaGuoyY5Xtxqd0PwmeuTm1_jgwr3p9kzPoBu8fZseClOEDr";

export default function PlantDetail({ item }: PlantDetailsProps) {
  const appModal = useContext(ModalContext);

  const handleBack = () => {
    appModal.hide();
  };

  return (
    <View>
      <Text style={styles.plantTitle}>{item.name}</Text>
      <Text style={styles.scientificName}>{item.scientific_name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Image style={styles.image} source={{ uri: tempImage }}></Image>
      <Button title="x" onPress={handleBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
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
