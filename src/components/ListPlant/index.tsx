import { View, StyleSheet } from "react-native";
import React from "react";

import List from "./List";
import { StatusBar } from "expo-status-bar";
import CardPlant from "./CardPlant";
import data_plant from "../../services/data/api_data_plant"; 

export default function ListPlantComponent() {
  item: data_plant;
  return (
    <View>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({});
