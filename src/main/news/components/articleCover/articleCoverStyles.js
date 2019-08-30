import { StyleSheet } from "react-native";
import size from "../../fragments/styles/size";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: size.y * 0.75,
    width: size.x
  },
  image: {
    opacity: 0.5,
    resizeMode: "cover",
    height: "100%"
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

export default styles;
