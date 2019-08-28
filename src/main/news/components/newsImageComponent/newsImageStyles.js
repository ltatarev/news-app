import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    borderRadius: 5
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  activity: {
    zIndex: 10
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 5
  }
});

export default styles;
