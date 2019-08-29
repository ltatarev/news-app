import React, { Component } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

import styles from "./newsRowStyles";

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
          <NewsImage urlToImage={urlToImage} />
          {/*           <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: urlToImage
            }}
          /> */}
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

export default connect(
  null,
  null
)(withNavigation(NewsRow));
