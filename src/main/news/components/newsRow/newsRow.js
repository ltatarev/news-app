import React, { Component } from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";

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
          <NewsImage
            urlToImage={urlToImage}
            style={styles.image}
            styleProp={"newscover"}
          />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
    // ios: /8, android /7
    height: size.y / 8,
    margin: 5,
    padding: 7
  },
  image: {
    flex: 2,
    borderRadius: 5
  },
  text: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: -3,
    marginLeft: 7,
    alignItems: "stretch",
    alignSelf: "flex-start"
  },
  title: {
    fontSize: 25,
    width: "100%",
    padding: 5,
    color: "#6c6c6c",
    fontFamily: "AvenirNextCondensed-Medium"
  },
  date: {
    fontSize: 12,
    width: "100%",
    padding: 5,
    color: "#9d9d9d"
  }
});

export default connect()(withNavigation(NewsRow));
