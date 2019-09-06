import React, { useState, useEffect } from "react";
import {
  View,
  Animated,
  ActivityIndicator,
  Image,
  StyleSheet,
  Platform
} from "react-native";
import FastImage from "react-native-fast-image";

import PropTypes from "prop-types";

// * Contains width and height of screen
import size from "../../fragments/styles/size";

NewsImage.propTypes = {
  urlToImage: PropTypes.string
};

// * In case image loaded successfully
handleImageLoad = (upnext, imageAnimated, thumbAnimated) => {
  Animated.timing(imageAnimated, {
    toValue: upnext ? 0.7 : 1
  }).start();
  Animated.timing(thumbAnimated, {
    toValue: 0
  }).start();
};

// * In case image didn't load
handleThumbnailLoad = (upnext, thumbAnimated) => {
  Animated.timing(thumbAnimated, {
    toValue: upnext ? 0.7 : 1
  }).start();
};

function NewsImage(props) {
  const [loading, setLoading] = useState(true);
  let imageAnimated = new Animated.Value(0);
  let thumbAnimated = new Animated.Value(0);

  const { urlToImage, newscover, upnext } = props;

  const thumbUrl =
    "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80";

  useEffect(() => {
    setLoading(false);
  });

  return (
    <View>
      <ActivityIndicator
        style={[
          styles.activity,
          newscover && styles.newsCoverImage,
          upnext && styles.upNext
        ]}
        animating={loading}
      />
      <Animated.Image
        style={[
          styles.imageOverlay,
          { opacity: thumbAnimated },
          newscover && styles.newsCoverImage,
          upnext && styles.upNext
        ]}
        source={{ uri: thumbUrl }}
        resizeMode="cover"
      />
      <Animated.Image
        style={[
          styles.imageOverlay,
          { opacity: imageAnimated },
          newscover && styles.newsCoverImage,
          upnext && styles.upNext
        ]}
        source={{
          uri: urlToImage
        }}
        resizeMode="cover"
        onLoad={() => handleImageLoad(upnext, imageAnimated, thumbAnimated)}
        onError={() => handleThumbnailLoad(upnext, thumbAnimated)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  upNext: {
    position: "absolute",
    bottom: 0,
    resizeMode: "cover",
    height: size.y / 5,
    width: "100%"
  },
  newsCoverImage: {
    width: Platform.OS === "ios" ? size.y / 10 : size.y / 9,
    height: Platform.OS === "ios" ? size.y / 10 : size.y / 9,
    borderRadius: 5
  }
});

export default NewsImage;
