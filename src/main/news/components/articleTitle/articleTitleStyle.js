import { StyleSheet } from "react-native";

const text = {
  color: "white",
  fontWeight: "bold",
  textShadowColor: "rgba(20, 20, 20, 0.7)",
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 2,
  fontFamily: "Avenir"
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 150,
    zIndex: 10,
    width: "100%"
  },
  description: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    marginLeft: 50,
    marginRight: 50
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
    opacity: 1,
    alignSelf: "center",
    padding: 10,
    paddingLeft: 13,
    paddingTop: 50,
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase"
  },
  author: {
    fontSize: 15
  },
  text: { ...text }
});

export default styles;
