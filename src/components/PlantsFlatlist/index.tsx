import axios from "axios";
import { StyleSheet, FlatList, Button, View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import CardPlant from "./CardPlant";
// import data_plant from "../../services/data/api_data_plant";
import InterfacePlant from "../../services/data/InterfacePlant";

export default function PlantsFlatlist() {
  const [plants, setPant] = useState<Array<InterfacePlant>>([]);

  const handleGetAll = async () => {
    try {
      const response = await axios.get("https://bmplants.loca.lt/plants");
      const { data, status } = response;
      setPant(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAll();
  }, []);

  return (
    <FlatList
      data={plants}
      renderItem={({ item }) => <CardPlant item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({});
