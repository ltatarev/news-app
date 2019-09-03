import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

import size from "../../fragments/styles/size";

import NewsImage from "../newsImageComponent/newsImageComponent";

class NewsRow extends Component {
  constructor(props) {
    super(props);
    this.redirectToNews = this.redirectToNews.bind(this);
  }

  redirectToNews() {
    const { navigation, news } = this.props;
    navigation.navigate("News", { id: news.id, url: news.url });
  }

  render() {
    // * Props from parent component
    const { title, publishedAt, urlToImage } = this.props;

    return (
      <View>
        <View style={styles.container}>
          <NewsImage urlToImage={urlToImage} newscover />
          <View style={styles.text}>
            <TouchableOpacity
              style={styles.title}
              onPress={this.redirectToNews}
            >
              <Text>{title}</Text>
            </TouchableOpacity>
            <Text style={styles.date}>{publishedAt}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // flex-start so the content is "anchored" left
    justifyContent: "flex-start",
    // horizontal center
    alignItems: "center",
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
    height: Platform.OS === "ios" ? size.y / 8 : size.y / 7,
    padding: 7
  },
  text: {
    flexWrap: "wrap",
    marginLeft: 7,
    // to ensure text doesn't go out of screen
    // size.y / 7 = image width
    maxWidth: size.x - size.y / 7
  },
  title: {
    fontSize: 25,
    padding: 5,
    color: "#6c6c6c",
    fontFamily: "AvenirNextCondensed-Medium"
  },
  date: {
    fontSize: 12,
    padding: 5,
    color: "#9d9d9d"
  }
});

export default connect()(withNavigation(NewsRow));
