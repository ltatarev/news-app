import React, { Component } from "react";
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

class NewsImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.imageAnimated = new Animated.Value(0);
    this.thumbAnimated = new Animated.Value(0);
  }

  static propTypes = {
    urlToImage: PropTypes.string
  };

  // * In case image loaded successfully
  handleImageLoad = () => {
    const { upnext } = this.props;
    Animated.timing(this.imageAnimated, {
      toValue: upnext ? 0.7 : 1
    }).start();
    Animated.timing(this.thumbAnimated, {
      toValue: 0
    }).start();
    this.loadEnd();
  };

  // * In case image didn't load
  handleThumbnailLoad = () => {
    const { upnext } = this.props;
    Animated.timing(this.thumbAnimated, {
      toValue: upnext ? 0.7 : 1
    }).start();
    this.loadEnd();
  };

  // * Stop animating ActivityIndicator
  loadEnd = () => {
    this.setState({ loading: false });
  };

  render() {
    const { urlToImage, newscover, upnext } = this.props;

    const thumbUrl =
      "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80";

    return (
      <View>
        <ActivityIndicator
          style={[
            styles.activity,
            newscover && styles.newsCoverImage,
            upnext && styles.upNext
          ]}
          animating={this.state.loading}
        />
        <Animated.Image
          style={[
            styles.imageOverlay,
            { opacity: this.thumbAnimated },
            newscover && styles.newsCoverImage,
            upnext && styles.upNext
          ]}
          source={{ uri: thumbUrl }}
          resizeMode="cover"
        />
        <Animated.Image
          style={[
            styles.imageOverlay,
            { opacity: this.imageAnimated },
            newscover && styles.newsCoverImage,
            upnext && styles.upNext
          ]}
          source={{
            uri: urlToImage
          }}
          resizeMode="cover"
          onLoad={this.handleImageLoad}
          onError={this.handleThumbnailLoad}
        />
      </View>
    );
  }
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
