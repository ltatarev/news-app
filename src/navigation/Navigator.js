import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import { HomeScreen, NewsScreen } from "../main/news/fragments/screens";

import BackButton from "./components/back";
import ShareButton from "./components/share";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    News: {
      screen: NewsScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <BackButton navigation={navigation} />,
        headerRight: <ShareButton navigation={navigation} />,
        headerStyle: {
          borderBottomWidth: 0,
          zIndex: -10
        },
        headerTransparent: true
      })
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
