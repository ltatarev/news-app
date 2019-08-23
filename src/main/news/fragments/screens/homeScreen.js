import React, { Component } from "react";
import { Text, View } from "react-native";
//import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

//import PropTypes from "prop-types";
import actions from "../../redux/actions";
import selectors from "../../redux/selectors";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { requestNewsDispatch } = this.props;
    requestNewsDispatch();
  }

  shouldComponentRender(pending) {
    return pending;
  }

  render() {
    const { news, pending } = this.props;

    if (this.shouldComponentRender(pending)) return <Text>Loading</Text>;

    return (
      <View>
        <Text>aaa</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  news: selectors.getNews(state),
  pending: selectors.getFetching(state)
});

const mapDispatchToProps = dispatch => ({
  requestNewsDispatch: () => {
    dispatch(actions.fetchNewsIfNeeded());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
