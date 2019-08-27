import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

import { persistor, store } from "./src/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import Navigator from "./src/navigation/Navigator";

class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
