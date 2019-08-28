import { createAppContainer, createStackNavigator } from "react-navigation";

import { HomeScreen, NewsScreen } from "../main/news/fragments/screens";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
