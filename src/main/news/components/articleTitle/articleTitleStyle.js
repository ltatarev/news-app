import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 110,
    alignSelf: "center",
    zIndex: 100
  },
  text: {
    flex: 1,
    flexWrap: "wrap",
    opacity: 1,
    padding: 10,
    paddingLeft: 13,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "rgba(20, 20, 20, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textTransform: "uppercase",
    fontFamily: "Avenir"
  },
  author: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textShadowColor: "rgba(20, 20, 20, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontFamily: "Avenir"
  },
  description: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    marginLeft: 50,
    marginRight: 50
  }
});

export default styles;
