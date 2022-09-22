import { View, Button, Text, StyleSheet } from "react-native";
import React from "react";

export default function ListPlant({navigation}) {
  const press = () => {
    navigation.navigate("Plant");
  };

  return (
    <View>
      <Text>
      <Button title="press" onPress={press} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
