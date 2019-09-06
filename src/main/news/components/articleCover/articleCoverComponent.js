import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Image,
  Animated,
  StyleSheet
} from "react-native";

import FastImage from "react-native-fast-image";
import PropTypes from "prop-types";

import size from "../../fragments/styles/size";

ArticleCover.propTypes = {
  urlToImage: PropTypes.string
};

// * In case image loaded successfully, hide thumbnail and show image
showImage = (imageAnimated, thumbAnimated) => {
  Animated.timing(imageAnimated, {
    toValue: 0.5,
    duration: 100
  }).start();
  Animated.timing(thumbAnimated, {
    toValue: 0,
    duration: 10
  }).start();
};

// * In case image didn't load successfully, show thumbnail
showThumbnail = (thumbAnimated, imageAnimated) => {
  Animated.timing(thumbAnimated, {
    toValue: 0.5,
    duration: 100
  }).start();
  Animated.timing(imageAnimated, {
    toValue: 0,
    duration: 10
  }).start();
};

function ArticleCover(props) {
  let imageAnimated = new Animated.Value(0);
  let thumbAnimated = new Animated.Value(0);

  const { urlToImage } = props;

  const thumbnailImage =
    "https://images.unsplash.com/photo-1508612761958-e931d843bdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80";

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.image, styles.imageOverlay, { opacity: thumbAnimated }]}
        source={{ uri: thumbnailImage }}
        blurRadius={2}
      />
      <Animated.Image
        style={[styles.imageOverlay, { opacity: imageAnimated }]}
        source={{
          uri: urlToImage
        }}
        blurRadius={1}
        onLoad={() => showImage(imageAnimated, thumbAnimated)}
        onError={() => showThumbnail(imageAnimated, thumbAnimated)}
      />
    </View>
  );
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
