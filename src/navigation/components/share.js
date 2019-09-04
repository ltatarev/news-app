import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, Share } from "react-native";

import FeatherIcon from "react-native-vector-icons/Feather";

class ShareButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          Share.share({
            title: "Share this article",
            url: navigation.state.params.url
          })
        }
      >
        <Text style={styles.icon}>
          <FeatherIcon name="share" size={25} color="white" />
        </Text>
      </TouchableOpacity>
    );
  }
}

export const styles = StyleSheet.create({
  icon: {
    paddingRight: 20
  }
});

export default ShareButton;
