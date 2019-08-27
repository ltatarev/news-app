import { createAppContainer, createStackNavigator } from "react-navigation";

import HomeScreen from "../main/news/fragments/screens/homeScreen";
import NewsScreen from "../main/news/fragments/screens/newsScreen";

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
