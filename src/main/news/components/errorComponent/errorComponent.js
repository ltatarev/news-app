import React, { Component } from "react";
import { Text, ImageBackground, TouchableOpacity, View } from "react-native";

import styles from "./errorComponentStyles";

import FeatherIcon from "react-native-vector-icons/Feather";

import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import PropTypes from "prop-types";

import { initialRequest } from "../../redux/actions";

class ErrorComponent extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  static propTypes = {
    navigation: PropTypes.object,
    requestNewsDispatch: PropTypes.func
  };

  handlePress() {
    const { navigation, requestNewsDispatch } = this.props;
    requestNewsDispatch();
    navigation.navigate("Home");
  }

  render() {
    const { text } = this.props;

    return (
      <View style={styles.emptyContainer}>
        <ImageBackground
          source={{
            uri: "https://bit.ly/30QYYKM"
          }}
          style={styles.emptyContainer}
          blurRadius={6}
        >
          <Text style={styles.emptyText}>{text}</Text>

          <TouchableOpacity onPress={this.handlePress}>
            <FeatherIcon
              name="refresh-cw"
              size={40}
              color="black"
              style={{ padding: 30 }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const mapDispatchToProps = {
  requestNewsDispatch: initialRequest
};

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(ErrorComponent));
