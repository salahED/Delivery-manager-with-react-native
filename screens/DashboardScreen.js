import React from "react";
import Card from "../components/Card";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
function DashboardScreen() {
  return (
    <Screen style={styles.container}>
      <Card title="salah test this" />;
      <Card title="test" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  }
});
export default DashboardScreen;
