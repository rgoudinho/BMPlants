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

  const image = "https://bmplants.loca.lt" + item.image;

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

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    margin: 8,
    marginVertical: 12,
  },
  plantTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 8,
    marginTop: 15,
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
    marginTop: 30,
  },
  image: {
    resizeMode: "cover",
    margin: 50,
    height: 300,
    width: 200,
  },
});
