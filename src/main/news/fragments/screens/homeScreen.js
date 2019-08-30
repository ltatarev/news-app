import React, { Component } from "react";
import { View, FlatList, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import PropTypes from "prop-types";
import { initialRequest } from "../../redux/actions";
import { getNews, getFetching, getError } from "../../redux/selectors";

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
    headerTitle: "NEWS"
  };

  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  static propTypes = {
    news: PropTypes.array,
    isFetching: PropTypes.bool,
    requestNewsDispatch: PropTypes.func
  };

  onRefresh() {
    const { requestNewsDispatch } = this.props;
    requestNewsDispatch();
  }

  componentDidMount() {
    const { requestNewsDispatch } = this.props;
    // * request news upon mounting
    requestNewsDispatch();
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

    if (isFetching) return <LoadingModal isFetching={isFetching} />;

    if (error) return <ErrorComponent />;

    return (
      <View style={styles.container}>
        <FlatList
          data={news}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={<ListEmpty />}
          onRefresh={this.onRefresh}
          refreshing={isFetching}
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
