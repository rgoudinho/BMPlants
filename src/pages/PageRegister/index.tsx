import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigator = useNavigation();

  const handleCancel = () => {
    console.log("cancel");
    navigator.goBack();
  };

  return (
    <View>
      <Text>
        <Button onPress={handleCancel} title="Cancelar" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
