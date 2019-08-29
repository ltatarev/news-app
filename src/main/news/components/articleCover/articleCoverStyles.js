import { StyleSheet } from "react-native";
import size from "../../fragments/styles/size";

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  container: {
    backgroundColor: "#e1e4e8",
    borderRadius: 5,
    zIndex: 0,
    height: size.y * 0.75
  }
});

export default styles;
