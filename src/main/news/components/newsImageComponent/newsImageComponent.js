import React, { Component } from "react";
import { View, Animated, ActivityIndicator, Image, Easing } from "react-native";
import FastImage from "react-native-fast-image";

import styles from "./newsImageStyles";

import thumbnail from "../../../../assets/thumbnail.jpeg";

class NewsImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.imageAnimated = new Animated.Value(0);
  }

  handleImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      easing: Easing.cubic,
      duration: 800
    }).start();
    this.loadEnd();
  };

  handleThumbnailLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      easing: Easing.quad,
      duration: 200
    }).start();
    this.loadEnd();
  };

  loadEnd = () => {
    this.setState({ loading: false });
  };

  render() {
    const { urlToImage } = this.props;

    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={[styles.activity, styles.image, styles.imageOverlay]}
          animating={this.state.loading}
        />
        <Animated.Image
          style={[styles.image, { opacity: this.imageAnimated }]}
          source={thumbnail}
          resizeMode="cover"
        />
        <Animated.Image
          style={[
            styles.imageOverlay,
            styles.image,
            { opacity: this.imageAnimated }
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

export default NewsImage;
