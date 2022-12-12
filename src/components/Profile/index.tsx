import { View, Button, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

export default function Profile() {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const handleCheckCredentials = async () => {
    await logout();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        <Text></Text>
        <Button title="Sair" onPress={handleCheckCredentials} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 24,
  },
  input: {
    borderWidth: 1,
    margin: 12,
    height: 40,
    padding: 10,
    color: "black",
  },
  button: {
    marginTop: 30,
    marginHorizontal: 100,
    padding: 10,
  },
  text: {
    textAlign: "center",
    padding: 10,
  },
});
