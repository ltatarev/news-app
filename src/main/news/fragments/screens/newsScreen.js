import React, { Component } from "react";
import { Text, TouchableOpacity, Share, StatusBar } from "react-native";

import { connect } from "react-redux";
import { withNavigation, NavigationContext } from "react-navigation";

import FeatherIcon from "react-native-vector-icons/Feather";

import PropTypes from "prop-types";

import { getNews } from "../../redux/selectors";

// * child components
import { ArticleCover, ArticleTitle, UpNextComponent } from "../../components";

import styles from "../styles";
import { ScrollView } from "react-native-gesture-handler";

class NewsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ paddingLeft: 20 }}>
          <FeatherIcon name="arrow-left" size={27} color="white" />
        </Text>
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          Share.share({
            title: "Share this article",
            url: navigation.state.params.url
          })
        }
      >
        <Text style={{ paddingRight: 20 }}>
          <FeatherIcon name="share" size={25} color="white" />
        </Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      borderBottomWidth: 0,
      zIndex: -10
    },
    headerTransparent: true
  });

  constructor(props) {
    super(props);
    this.state = {
      id: this.getNavigationParams(),
      nextId: this.nextId(this.getNavigationParams())
    };
    this.upNext = this.upNext.bind(this);
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

  nextId(id) {
    const { news } = this.props;
    // * In case the clicked article was last, return to first
    return id + 1 < news.length ? id + 1 : 0;
  }

  upNext(id) {
    this.setState({ id: id, nextId: this.nextId(id) });
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
        <UpNextComponent article={nextArticle} upNext={this.upNext} />
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
