import React, { Component } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import PropTypes from "prop-types";
import { initialRequest } from "../../redux/actions";
import { getNews, getFetching, getError } from "../../redux/selectors";

import FeatherIcon from "react-native-vector-icons/Feather";

// * child components
import {
  NewsRow,
  ErrorComponent,
  ListEmpty,
  LoadingModal
} from "../../components";

// * styles
import styles from "../styles";

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: "NEWS",
    headerRight: (
      <TouchableOpacity style={{ paddingBottom: 10, paddingRight: 15 }}>
        <Text>
          All
          <FeatherIcon name="chevron-down" size={18} color="black" />
        </Text>
      </TouchableOpacity>
    )
  };

  constructor(props) {
    super(props);
    this.state = { calledApi: false };
  }

  static propTypes = {
    news: PropTypes.array,
    isFetching: PropTypes.bool,
    requestNewsDispatch: PropTypes.func
  };

  componentDidMount() {
    const { requestNewsDispatch } = this.props;
    // * request news upon mounting
    requestNewsDispatch();
    this.setState({ calledApi: true });
  }

  renderItem = ({ item }) => (
    <NewsRow
      title={item.shortTitle}
      publishedAt={item.publishedAt}
      urlToImage={item.urlToImage}
      news={item}
    />
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    const { isFetching, news, error } = this.props;
    const { calledApi } = this.state;

    if (isFetching) return <LoadingModal isFetching={isFetching} />;

    // * error after api call
    if (error && calledApi) return <ErrorComponent />;

    return (
      <View style={styles.container}>
        <FlatList
          data={news}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={<ListEmpty />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  news: getNews(state),
  isFetching: getFetching(state),
  error: getError(state)
});

const mapDispatchToProps = {
  requestNewsDispatch: initialRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(HomeScreen));
