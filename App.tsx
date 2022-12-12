import { StyleSheet, Text } from "react-native";
import AppModal from "./src/components/AppModal";
import useFirebase from "./src/hooks/useFirebase";
import Router from "./src/routes";
import firebaseConfig from "./src/services/firebase/firebaseConfig";

export default function App() {
  const firebaseApp = useFirebase(firebaseConfig);
  if (firebaseApp == null) {
    return <Text>carregando</Text>;
  }

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
