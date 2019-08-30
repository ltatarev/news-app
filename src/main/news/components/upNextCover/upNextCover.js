import React, { Component } from "react";
import { ImageBackground } from "react-native";

import PropTypes from "prop-types";

import FastImage from "react-native-fast-image";

import styles from "../upNextComponent/upNextComponentStyles";

class UpNextCover extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    urlToImage: PropTypes.string
  };

  render() {
    const { urlToImage } = this.props;
    const thumbnailImage =
      "https://images.unsplash.com/photo-1508612761958-e931d843bdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80";

    return (
      <ImageBackground
        style={styles.image}
        source={{ uri: thumbnailImage }}
        resizeMode="cover"
        blurRadius={2}
      >
        <FastImage
          style={styles.image}
          source={{
            uri: urlToImage
          }}
        />
      </ImageBackground>
    );
  }
}

export default UpNextCover;
