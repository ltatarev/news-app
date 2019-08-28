import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import FeatherIcon from "react-native-vector-icons/Feather";

import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import PropTypes from "prop-types";

import styles from "../errorComponent/errorComponent";

import { initialRequest } from "../../redux/actions";

class ListEmpty extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigation, requestNewsDispatch } = this.props;
    requestNewsDispatch();
    navigation.navigate("Home");
  }

  static propTypes = {
    navigation: PropTypes.object,
    requestNewsDispatch: PropTypes.func
  };

  render() {
    const text = "No news available at this moment. Please try again later.";
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{text}</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <FeatherIcon
            name="refresh-cw"
            size={40}
            color="black"
            style={{ padding: 30 }}
          />
        </TouchableOpacity>
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
)(withNavigation(ListEmpty));
