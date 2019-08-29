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
    const thumbnailImage =
      "https://images.unsplash.com/photo-1508612761958-e931d843bdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80";
    let thumbnailAnimated = new Animated.Value(0);

    return (
      <View style={styles.container}>
        <Animated.Image
          style={[
            styles.image,
            { opacity: this.thumbnailAnimated, backgroundColor: "#fff" }
          ]}
          source={{
            uri: thumbnailImage
          }}
          resizeMode="cover"
        />
        <ActivityIndicator
          style={[styles.activity, styles.image, styles.imageOverlay]}
          animating={this.state.loading}
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
