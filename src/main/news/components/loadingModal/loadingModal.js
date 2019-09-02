import React from "react";
import { Modal, View, ActivityIndicator, StyleSheet } from "react-native";

const LoadingModal = props => {
  const { isFetching } = props;

  return (
    <Modal transparent animationType={"none"} visible={isFetching}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicator}>
          <ActivityIndicator animating={isFetching} size="large" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  activityIndicator: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default LoadingModal;
