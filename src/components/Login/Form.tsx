import axios from "axios";
import { View, Button, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenNames from "../../routes/EnumScreenNames";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

export default function Form() {
  const navigation = useNavigation();
  const { login } = useAuth();

  const [tvUser, octUser] = React.useState("");
  const [tvPassword, octPassword] = React.useState("");

  const handleRegister = () => {
    navigation.navigate(ScreenNames.Register);
  };

  const handleAlert = () => {
    Alert.alert("Erro", "Usuário e/ou senha errados ou não encontrados", [
      {
        text: "Ok",
      },
    ]);
  };

  const handleCheckCredentials = async () => {
    try {
      await login(tvUser, tvPassword);
      // const response = await axios.post(
      //   "https://bmplants.loca.lt/users/log-in",
      //   {
      //     user_name: tvUser,
      //     password: tvPassword,
      //   }
      // );
      // const { data } = response;
      // console.log(data);
      // if (data) {
      //   navigation.navigate(ScreenNames.LoggedInRoutes);
      // } else {
      //   handleAlert();
      // }
    } catch (error) {
      console.log(error);

      Alert.alert("Erro", "Falha de autenticação!");
    }
  };

  return (
    <View>
      <View>
        <Text></Text>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          onChangeText={octUser}
          value={tvUser}
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
        <Button title="Entrar" onPress={handleCheckCredentials} />
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
