import React, { Component } from "react";
import { View, Animated, ActivityIndicator } from "react-native";
import FastImage from "react-native-fast-image";

import styles from "./newsImageStyles";

class NewsImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  handleThumbnailLoad = thumbnailAnimated => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1
    }).start();
    this.loadEnd();
  };

  loadEnd = () => {
    this.setState({ loading: false });
  };

  render() {
    const { urlToImage } = this.props;
    const thumbnailImage = "https://bit.ly/2PlJuNM";
    let thumbnailAnimated = new Animated.Value(0);

    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={[styles.activity, styles.image, styles.imageOverlay]}
          animating={this.state.loading}
        />
        <Animated.Image
          style={[styles.image, { opacity: this.thumbnailAnimated }]}
          source={{
            uri: thumbnailImage
          }}
          resizeMode="cover"
        />
        <FastImage
          style={[
            styles.imageOverlay,
            { opacity: this.imageAnimated },
            styles.image
          ]}
          source={{
            uri: urlToImage
          }}
          resizeMode="cover"
          onLoadEnd={this.loadEnd}
          onError={e => this.handleThumbnailLoad(thumbnailAnimated)}
        />
      </View>
    );
  }
}

export default NewsImage;
