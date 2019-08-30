import React, { Component } from "react";
import { Text, ImageBackground, TouchableOpacity, View } from "react-native";

import PropTypes from "prop-types";

import UpNextCover from "../upNextCover/upNextCover";

import styles from "./upNextComponentStyles";

class UpNextComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { upNext, article } = this.props;
    const { id } = article;
    upNext(id);
  }

  static propTypes = {
    article: PropTypes.object,
    upNext: PropTypes.func
  };

  render() {
    const { article } = this.props;
    const { urlToImage, shortTitle } = article;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <UpNextCover urlToImage={urlToImage} />
          <Text style={[styles.text, styles.upNext]}>UP NEXT</Text>
          <Text style={styles.text}>{shortTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default UpNextComponent;
