import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import size from "../../fragments/styles/size";

class ArticleTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, publishedAt, author, source } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.text]}>{title}</Text>
        <View style={styles.description}>
          <Text style={[styles.author, styles.text]}>
            {author ? author : source}
          </Text>
          <Text style={[styles.author, styles.text]}>{publishedAt}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: size.y / 4,
    zIndex: 30,
    width: "100%"
  },
  description: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    marginLeft: 50,
    marginRight: 50
  },
  title: {
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
  text: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(20, 20, 20, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontFamily: "Avenir"
  }
});

export default ArticleTitle;
