import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { persistor, store } from "./src/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

// * Navigation persist
/* const persistenceKey = "persistenceKey";
const persistNavigationState = async navState => {
  try {
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
  } catch (err) {
    // error
  
  }
};
const loadNavigationState = async () => {
  const jsonString = await AsyncStorage.getItem(persistenceKey);
  return JSON.parse(jsonString);
};*/

persistor.purge();

const App = () => (
  <View style={styles.container}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Text>News</Text>
      </PersistGate>
    </Provider>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
