import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import PropTypes from "prop-types";

// * Styles
import styles from "../styles";

// * child components
import { ArticleCover, ArticleTitle } from "../../components";

import FeatherIcon from "react-native-vector-icons/Feather";

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
      <TouchableOpacity>
        <Text style={{ paddingRight: 20 }}>
          <FeatherIcon name="share" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      borderBottomWidth: 0
    },
    headerTransparent: true
  });

  constructor(props) {
    super(props);
    this.state = {
      news: this.getNavigationParams()
    };
  }

  static propTypes = {
    navigation: PropTypes.object,
    articleId: PropTypes.number
  };

  getNavigationParams = () => {
    const { navigation } = this.props;
    return navigation.state.params.news || {};
  };

  componentDidMount() {
    const { navigation } = this.props;
    const { news } = this.state;
    navigation.setParams({
      title: news.shortTitle
    });
  }

  render() {
    const { news, isFetching } = this.state;
    const {
      urlToImage,
      title,
      publishedAt,
      author,
      source,
      content,
      description
    } = news;

    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <ArticleTitle
          title={title}
          publishedAt={publishedAt}
          author={author}
          source={source}
        />
        <ArticleCover urlToImage={urlToImage} />
        <Text style={styles.articleText}>
          {content ? content : description}
        </Text>
      </View>
    );
  }
}

export default connect()(withNavigation(NewsScreen));
