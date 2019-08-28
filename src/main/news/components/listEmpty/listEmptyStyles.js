import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    flexGrow: 1
  },
  emptyText: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    padding: 20,
    backgroundColor: "white",
    fontFamily: "Avenir"
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  }
});

export default styles;
