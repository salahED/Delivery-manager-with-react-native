import React from "react";
import Card from "../components/Card";
import Screen from "../components/Screen";
import { StyleSheet, Image, View } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

function DashboardScreen() {
  return (
    <Screen style={styles.wrapper}>
      <View>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <View style={styles.container}>
        <Card name="user-plus" title="Add user" />
        <Card name="cart-plus" title="Add product" />
        <Card name="users" title="Delivery list" />
        <Card name="tasks" title="Add role" />
        <Card name="map-marker" title="Delivery position" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  wrapper: { display: "flex", flexDirection: "column" },
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    paddingRight: "4%",
    paddingLeft: "4%",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 20
  },
  logo: {
    width: (windowWidth * 3) / 4,
    height: (windowWidth * 3) / 4,
    alignSelf: "center",
    marginTop: 20
  }
});
export default DashboardScreen;
