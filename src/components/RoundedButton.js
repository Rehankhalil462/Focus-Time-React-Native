import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { colors } from "../utils/colors";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text
        style={[styles(size, props.title).text, textStyle]}
        onPress={props.onPress}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (size, txt) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: {
      color: colors.white,
      fontSize: txt === "+" ? size / 1.7 : size / 3,
    },
  });
