import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "50%",
    borderRadius: 15,
    backgroundColor: colors.secondary,
    marginBottom: 20,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    width: "100%",
    marginBottom: 7
  }
});

export default Card;
