import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  buttons: {
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});

const HeaderBtnTweet = props => (
  <TouchableOpacity style={styles.buttons} onPress={props.onPress}>
    {props.side === "right" ? (
      <EvilIcons color="#55ACEE" size={25} name="close" />
    ) : (
      <Ionicons color="#55ACEE" size={30} name="ios-add" />
    )}
  </TouchableOpacity>
);

export default HeaderBtnTweet;
