import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    margin: 8,
    marginVertical: 12,
  },
  plantTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 8,
    marginTop: 15,
  },
  scientificName: {
    fontSize: 12,
    font: "italic",
    marginHorizontal: 10,
  },
  description: {
    fontSize: 16,
    fontWeigth: "times",
    margin: 10,
    marginTop: 30,
  },
  image: {
    resizeMode: "cover",
    margin: 50,
    height: 300,
    width: 200,
  },
});
