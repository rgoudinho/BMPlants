import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/routes";

export default function App() {
  return <Router />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
