import React, { PureComponent } from "react";

import { persistor, store } from "./src/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import Navigator from "./src/navigation/Navigator";

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
