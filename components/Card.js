import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Card({ name, backgroundColor, title }) {
  return (
    <View style={styles.card}>
      {/* <Image style={styles.image} source={image} />
      <AppText style={styles.title}>{title}</AppText> */}

      <FontAwesome.Button
        name={name}
        color="#353535"
        backgroundColor="#fff"
        onPress={doNothing}
        style={styles.button}
        size={80}
      ></FontAwesome.Button>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
}

const doNothing = () => {
  console.log("pressed");
};
const styles = StyleSheet.create({
  card: {
    height: "30%",
    width: windowHeight / 5,
    borderRadius: 10,
    backgroundColor: "#fb0757",
    textAlign: "center",
    marginBottom: 20,
    overflow: "hidden"
  },
  button: {
    display: "flex",
    flexDirection: "column",
    height: windowWidth / 4
  },
  text: { fontSize: "125%", color: "#fff" }
});

export default Card;
