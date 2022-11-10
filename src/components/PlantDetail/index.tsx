import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { ModalContext } from "../AppModal";

export default function PlantDetail() {
  const appModal = useContext(ModalContext);

  const handleBack = () => {
    appModal.hide();
  };

  return (
    <View>
      <Text>PlantDetail</Text>

      <Button title="Voltar" onPress={handleBack} />
    </View>
  );
}
