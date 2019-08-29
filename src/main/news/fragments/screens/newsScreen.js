import React, { Component } from "react";
import { Text, TouchableOpacity, Share, StatusBar } from "react-native";

import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import PropTypes from "prop-types";

import { getNews } from "../../redux/selectors";

// * child components
import { ArticleCover, ArticleTitle } from "../../components";

import styles from "../styles";
import { ScrollView } from "react-native-gesture-handler";

class NewsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      borderBottomWidth: 0,
      zIndex: -10
    },
    headerTransparent: true
  });

  constructor(props) {
    super(props);
    this.state = { id: this.getNavigationParams() };
  }

  static propTypes = {
    navigation: PropTypes.object,
    articleId: PropTypes.number
  };

  getNavigationParams = () => {
    const { navigation } = this.props;
    return navigation.state.params.id;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    const { news } = this.props;
    const { id } = this.state;
    const currentArticle = news[id];

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
      <ScrollView style={{ flexDirection: "column", flex: 1 }}>
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
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  news: getNews(state)
});

export default connect(
  mapStateToProps,
  null
)(withNavigation(NewsScreen));
