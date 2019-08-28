import React from "react";
import { Modal, View, ActivityIndicator } from "react-native";

import styles from "./loadingModalStyles";

const LoadingModal = props => {
  const { isFetching } = props;

  return (
    <Modal transparent animationType={"none"} visible={isFetching}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorHolder}>
          <ActivityIndicator animating={isFetching} size="large" />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
