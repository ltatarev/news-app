import { StyleSheet } from "react-native";

import size from "../../fragments/styles/size";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: size.y / 5,
    marginTop: 25
  },
  image: {
    position: "absolute",
    opacity: 0.8,
    height: "100%",
    width: "100%"
  },
  text: {
    color: "#fff",
    fontSize: 16,
    margin: 15,
    marginLeft: 20,
    zIndex: 1000,
    fontWeight: "bold",
    textShadowColor: "rgba(20, 20, 20, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  upNext: {
    marginTop: 30
  }
});

export default styles;
