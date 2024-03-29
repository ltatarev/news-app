import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Image,
  Animated,
  StyleSheet
} from "react-native";

import FastImage from "react-native-fast-image";

import size from "../../fragments/styles/size";

class ArticleCover extends Component {
  constructor(props) {
    super(props);
    this.imageAnimated = new Animated.Value(0);
    this.thumbAnimated = new Animated.Value(0);
  }

  // * In case image loaded successfully, hide thumbnail and show image
  showImage = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 0.5,
      duration: 100
    }).start();
    Animated.timing(this.thumbAnimated, {
      toValue: 0,
      duration: 10
    }).start();
  };

  // * In case image didn't load successfully, show thumbnail
  showThumbnail = () => {
    Animated.timing(this.thumbAnimated, {
      toValue: 0.5,
      duration: 100
    }).start();
    Animated.timing(this.imageAnimated, {
      toValue: 0,
      duration: 10
    }).start();
  };

  render() {
    const { urlToImage } = this.props;

    const thumbnailImage =
      "https://images.unsplash.com/photo-1508612761958-e931d843bdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80";

    return (
      <View style={styles.container}>
        <Animated.Image
          style={[
            styles.image,
            styles.imageOverlay,
            { opacity: this.thumbAnimated }
          ]}
          source={{ uri: thumbnailImage }}
          blurRadius={2}
        />
        <Animated.Image
          style={[styles.imageOverlay, { opacity: this.imageAnimated }]}
          source={{
            uri: urlToImage
          }}
          blurRadius={1}
          onLoad={this.showImage}
          onError={this.showThumbnail}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: size.y * 0.8,
    width: size.x
  },
  image: {
    resizeMode: "cover",
    width: "100%"
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

export default ArticleCover;
