import React, { Component } from "react";
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";

import PropTypes from "prop-types";

import NewsImage from "../newsImageComponent/newsImageComponent";

import size from "../../fragments/styles/size";

class UpNextComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    // * Go to next article
    const { upNext, article } = this.props;
    const { id } = article;
    upNext(id);
  }

  static propTypes = {
    article: PropTypes.object,
    upNext: PropTypes.func
  };

  render() {
    const { article } = this.props;
    const { urlToImage, shortTitle } = article;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <NewsImage urlToImage={urlToImage} upnext />
          <Text style={[styles.text, styles.upNext]}>UP NEXT</Text>
          <Text style={styles.text}>{shortTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: size.y / 5,
    marginTop: 25
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
    paddingTop: 15
  }
});

export default UpNextComponent;
