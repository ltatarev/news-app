import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Text,
  StatusBar,
  ScrollView,
  LayoutAnimation,
  StyleSheet
} from "react-native";

import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import PropTypes from "prop-types";

import { getNews, getLastId } from "../../redux/selectors";

import { ArticleCover, ArticleTitle, UpNextComponent } from "../../components";

NewsScreen.propTypes = {
  navigation: PropTypes.object,
  articleId: PropTypes.number,
  lastId: PropTypes.number
};

// * Get id from navigation
getNavigationParams = navigation => {
  return navigation.state.params.id % 20;
};

function getNextId(nextId, lastId) {
  // * In case the clicked article was last, return to first
  return nextId + 1 <= lastId ? (nextId + 1) % 20 : 0;
}

keyExtractor = (item, index) => index.toString();

function NewsScreen(props) {
  const { navigation, news, lastId } = props;

  const [id, setId] = useState(getNavigationParams(navigation));

  const [nextId, setNextId] = useState(getNextId(id, lastId));

  const [currentArticle, setCurrentArticle] = useState(news[id]);
  const [nextArticle, setNextArticle] = useState(news[nextId]);

  const upNextHandle = useCallback(() => {
    LayoutAnimation.easeInEaseOut();
    setId(id => id + 1);
    setNextId(nextId => getNextId(nextId, lastId));
  }, []);

  useEffect(() => {
    setCurrentArticle(news[id]);
    setNextArticle(news[nextId]);
    if (this.scrollRef) {
      this.scrollRef.scrollTo({ y: 65, animated: true, duration: 300 });
    }
  });

  const {
    urlToImage,
    title,
    publishedAt,
    author,
    source,
    content,
    description
  } = currentArticle;

  return (
    <ScrollView
      style={styles.scrollView}
      ref={ref => {
        scrollRef = ref;
      }}
    >
      <StatusBar barStyle="light-content" />
      <ArticleCover urlToImage={urlToImage} />
      <ArticleTitle
        title={title}
        publishedAt={publishedAt}
        author={author}
        source={source}
      />
      <Text style={styles.articleText}>{content ? content : description}</Text>
      <UpNextComponent article={nextArticle} upNextHandle={upNextHandle} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  articleText: {
    fontSize: 17,
    padding: 25,
    color: "#6c6c6c",
    fontFamily: "Avenir"
  },
  scrollView: { flexDirection: "column", flex: 1 }
});

const mapStateToProps = state => ({
  news: getNews(state),
  lastId: getLastId(state)
});

export default connect(
  mapStateToProps,
  null
)(withNavigation(NewsScreen));
