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
    const thumbnailImage =
      "https://images.unsplash.com/photo-1508612761958-e931d843bdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80";

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
