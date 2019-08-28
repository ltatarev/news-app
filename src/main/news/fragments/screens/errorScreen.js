import React, { Component } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import PropTypes from "prop-types";
import { initialRequest } from "../../redux/actions";

import FeatherIcon from "react-native-vector-icons/Feather";

// * Styles
import stylesIndex from "../styles";

class ErrorScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  static propTypes = {
    navigation: PropTypes.any,
    requestNewsDispatch: PropTypes.func
  };

  handlePress() {
    const { navigation, requestNewsDispatch } = this.props;
    requestNewsDispatch();
    navigation.navigate("Home");
  }

  render() {
    const text =
      "There was a problem receiving news. \n Please try again later.";

    return (
      <View style={stylesIndex.container}>
        <ImageBackground
          source={{
            uri: "https://bit.ly/30QYYKM"
          }}
          style={styles.emptyContainer}
        >
          <Text style={styles.emptyText}>{text}</Text>

          <TouchableOpacity onPress={this.handlePress} style={{ padding: 25 }}>
            <Text>
              <FeatherIcon name="refresh-cw" size={30} color="black" />
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyText: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    padding: 20,
    backgroundColor: "white"
  }
});

const mapDispatchToProps = {
  requestNewsDispatch: initialRequest
};

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(ErrorScreen));
