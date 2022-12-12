import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Profile from "../../components/Profile";

export default function ProfilePage() {
  return (
    <View>
      <Text>Mais coisas vão ser implementadas aqui, espere e verá!</Text>
      <Profile></Profile>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
