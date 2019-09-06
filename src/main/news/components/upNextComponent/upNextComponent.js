import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

import PropTypes from "prop-types";

import NewsImage from "../newsImageComponent/newsImageComponent";

import size from "../../fragments/styles/size";

UpNextComponent.propTypes = {
  article: PropTypes.object,
  upNext: PropTypes.func
};

function UpNextComponent(props) {
  const { upNextHandle, article } = props;
  const { urlToImage, shortTitle } = article;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={upNextHandle}>
        <NewsImage urlToImage={urlToImage} upnext />
        <Text style={[styles.text, styles.upNext]}>UP NEXT</Text>
        <Text style={styles.text}>{shortTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: size.y / 5,
    marginTop: 25
  },
  text: {
    color: "#fff",
    fontSize: 16,
    margin: 15,
    marginLeft: 20,
    zIndex: 1000,
    fontWeight: "bold",
    textShadowColor: "rgba(20, 20, 20, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  upNext: {
    paddingTop: 15
  }
});

export default UpNextComponent;
