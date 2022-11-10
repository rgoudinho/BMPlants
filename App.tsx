import { StyleSheet } from "react-native";
import AppModal from "./src/components/AppModal";
import Router from "./src/routes";

export default function App() {
  return (
    <AppModal>
      <Router />
    </AppModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
