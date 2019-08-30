import React, { Component } from "react";
import { Text, StatusBar, ScrollView, LayoutAnimation } from "react-native";

import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import PropTypes from "prop-types";

import { getNews, getLastId } from "../../redux/selectors";

// * child components
import { ArticleCover, ArticleTitle, UpNextComponent } from "../../components";

import styles from "../styles";

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.getNavigationParams(),
      nextId: this.nextId(this.getNavigationParams())
    };
    this.upNext = this.upNext.bind(this);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  static propTypes = {
    navigation: PropTypes.object,
    articleId: PropTypes.number,
    lastId: PropTypes.number
  };

  getNavigationParams = () => {
    const { navigation } = this.props;
    return navigation.state.params.id;
  };

  keyExtractor = (item, index) => index.toString();

  nextId(id) {
    const { lastId } = this.props;
    // * In case the clicked article was last, return to first
    return id + 1 < lastId ? id + 1 : 0;
  }

  upNext(id) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ id: id, nextId: this.nextId(id) });
    this.refs._scrollView.scrollTo({ y: 65, animated: true, duration: 400 });
  }

  render() {
    const { news } = this.props;
    const { id, nextId } = this.state;
    const currentArticle = news[id];
    const nextArticle = news[nextId];

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
        style={{ flexDirection: "column", flex: 1 }}
        ref="_scrollView"
      >
        <StatusBar barStyle="light-content" />
        <ArticleCover urlToImage={urlToImage} />
        <ArticleTitle
          title={title}
          publishedAt={publishedAt}
          author={author}
          source={source}
        />
        <Text style={styles.articleText}>
          {content ? content : description}
        </Text>
        <UpNextComponent article={nextArticle} upNext={this.upNext} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  news: getNews(state),
  lastId: getLastId(state)
});

export default connect(
  mapStateToProps,
  null
)(withNavigation(NewsScreen));
