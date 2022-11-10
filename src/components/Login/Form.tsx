import { View, Button, Text, StyleSheet, TextInput, Alert } from "react-native";
import React from "react";
import ScreenNames from "../../routes/EnumScreenNames";
import { useNavigation } from "@react-navigation/native";

export default function Form() {
  const navigation = useNavigation();

  const [tvEmail, octEmail] = React.useState("");
  const [tvPassword, octPassword] = React.useState("");

  const handleRegister = () => {
    navigation.navigate(ScreenNames.Register);
  };

  const handleOk = () => {
    console.log("OK Pressed");
  };

  const handleList = () => {
    if (tvEmail === "teste" && tvPassword === "123") {
      navigation.navigate(ScreenNames.LoggedInRoutes);
    } else {
      Alert.alert("Erro", "Usuário e/ou senha não encontrados", [
        {
          text: "Ok",
        },
      ]);
    }
  };

  return (
    <View>
      <View>
        <Text></Text>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          onChangeText={octEmail}
          value={tvEmail}
          placeholder="Usuário: teste"
        />
      </View>
      <View>
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={octPassword}
          value={tvPassword}
          placeholder="Senha: 123"
        />
      </View>
      <View style={styles.button}>
        <Button title="Entrar" onPress={handleList} />
        <Text style={styles.text}>ou</Text>
        <Button title="Registre-se" onPress={handleRegister} />
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
