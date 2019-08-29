import { StyleSheet } from "react-native";

import size from "../../fragments/styles/size";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 17,
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
    height: size.y / 8
  },
  image: {
    flex: 1,
    borderRadius: 5
  },
  text: {
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -5,
    marginLeft: 10,
    alignItems: "stretch",
    alignSelf: "flex-start"
  },
  title: {
    fontSize: 25,
    width: "100%",
    padding: 5,
    color: "#6c6c6c",
    fontFamily: "AvenirNextCondensed-Medium"
  },
  date: {
    fontSize: 12,
    width: "100%",
    padding: 5,
    color: "#9d9d9d"
  }
});

export default styles;
