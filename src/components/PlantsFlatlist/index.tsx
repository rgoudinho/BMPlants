import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import CardPlant from "./CardPlant";
import data_plant from "../../services/data/api_data_plant";

export default function PlantsFlatlist() {
  return (
    <FlatList
      data={data_plant}
      renderItem={({ item }) => <CardPlant item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({});
