import { View, Text, StyleSheet } from "react-native";
import React from "react";

import LoginComponent from "../../components/Login";

export default function Login({ navigation }: any) {
  return (
    <View>
      <LoginComponent />
    </View>
  );
}

const styles = StyleSheet.create({});
