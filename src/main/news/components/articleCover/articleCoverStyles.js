import { StyleSheet } from "react-native";

const image = {
  aspectRatio: 1
};

const container = {
  backgroundColor: "#e1e4e8",
  borderRadius: 5
};

const imageOverlay = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0
};

const styles = StyleSheet.create({
  image: { ...image },
  imageOverlay: { ...imageOverlay },
  container: { ...container }
});

export default styles;
