import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
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

// * Prop types
HomeScreen.propTypes = {
  news: PropTypes.array,
  isFetching: PropTypes.bool,
  requestNewsDispatch: PropTypes.func
};

// * Render item for flatlist
renderItem = ({ item }) => (
  <NewsRow
    title={item.shortTitle}
    publishedAt={item.publishedAt}
    urlToImage={item.urlToImage}
    news={item}
  />
);

keyExtractor = (item, index) => index.toString();

function HomeScreen(props) {
  const { isFetching, error, news, requestNewsDispatch } = props;

  if (isFetching) return <LoadingModal isFetching={isFetching} />;

  if (error) return <ErrorComponent />;

  useEffect(() => {
    requestNewsDispatch();
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<ListEmpty />}
        onRefresh={requestNewsDispatch()}
        refreshing={isFetching}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  }
});

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
