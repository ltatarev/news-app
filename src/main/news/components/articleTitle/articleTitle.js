import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./articleTitleStyle";

class ArticleTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, publishedAt, author, source } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.text]}>{title}</Text>
        <View style={styles.description}>
          <Text style={[styles.author, styles.text]}>
            {author ? author : source}
          </Text>
          <Text style={[styles.author, styles.text]}>{publishedAt}</Text>
        </View>
      </View>
    );
  }
}

export default ArticleTitle;
