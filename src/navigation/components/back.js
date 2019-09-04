import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import FeatherIcon from "react-native-vector-icons/Feather";

class BackButton extends Component {
  constructor(props) {
    super(props);
    this.navigateHome = this.navigateHome.bind(this);
  }

  navigateHome() {
    const { navigation } = this.props;
    navigation.navigate("Home");
  }

  render() {
    return (
      <TouchableOpacity onPress={this.navigateHome}>
        <Text style={styles.icon}>
          <FeatherIcon name="arrow-left" size={27} color="white" />
        </Text>
      </TouchableOpacity>
    );
  }
}

export const styles = StyleSheet.create({
  icon: {
    paddingLeft: 20
  }
});

export default BackButton;
