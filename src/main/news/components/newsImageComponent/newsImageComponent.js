import React, { Component } from "react";
import {
  View,
  Animated,
  ActivityIndicator,
  Image,
  StyleSheet
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
    Animated.timing(this.imageAnimated, {
      toValue: 1
    }).start();
    Animated.timing(this.thumbAnimated, {
      toValue: 0
    }).start();
    this.loadEnd();
  };

  // * In case image didn't load
  handleThumbnailLoad = () => {
    Animated.timing(this.thumbAnimated, {
      toValue: 1
    }).start();
    this.loadEnd();
  };

  // * Stop animating ActivityIndicator
  loadEnd = () => {
    this.setState({ loading: false });
  };

  // * Choose style based on prop
  chooseStyleFromProp = () => {
    const { styleProp } = this.props;
    if (styleProp === "upnext") {
      return styles.upNext;
    }
    if (styleProp === "newscover") {
      return styles.newsCoverImage;
    }
    return;
  };

  // * Return style for each element
  chooseStyle(element) {
    switch (element) {
      case "activity":
        return [styles.activity, this.chooseStyleFromProp()];
      case "thumbnail":
        return [
          this.chooseStyleFromProp(),
          styles.imageOverlay,
          { opacity: this.thumbAnimated }
        ];
      case "image":
        return [
          styles.imageOverlay,
          { opacity: this.imageAnimated },
          this.chooseStyleFromProp()
        ];
      default:
        return;
    }
  }

  render() {
    const { urlToImage } = this.props;

    const thumbUrl =
      "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80";
    let url = urlToImage ? urlToImage : thumbUrl;

    return (
      <View>
        <ActivityIndicator
          style={this.chooseStyle("activity")}
          animating={this.state.loading}
        />
        <Animated.Image
          style={this.chooseStyle("thumbnail")}
          source={{ uri: thumbUrl }}
          resizeMode="cover"
        />
        <Animated.Image
          style={this.chooseStyle("image")}
          source={{
            uri: url
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
    opacity: 0.5,
    resizeMode: "cover",
    height: size.y / 5,
    width: "100%"
  },
  newsCoverImage: {
    width: 75,
    height: 75,
    borderRadius: 5
  }
});

export default NewsImage;
