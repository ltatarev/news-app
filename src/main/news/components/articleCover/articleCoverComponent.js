import React, { Component } from "react";
import { ImageBackground } from "react-native";

import FastImage from "react-native-fast-image";

import styles from "./articleCoverStyles";
class ArticleCover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { urlToImage } = this.props;
    const thumbnailImage = "https://bit.ly/2PlJuNM";

    return (
      <ImageBackground
        style={styles.container}
        source={{ uri: urlToImage }}
        resizeMode="cover"
        blurRadius={2}
      >
        <FastImage
          style={styles.imageOverlay}
          source={{
            uri: thumbnailImage
          }}
        />
      </ImageBackground>
    );
  }
}

export default ArticleCover;
