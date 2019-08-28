import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import colors from "../../style/color";

export default function InputField(props) {

  const {
    labelText,
    labelTextSize,
    labelColor,
    textColor,
    borderBottomColor,
    inputType,
    customStyle
  } = props;

  const [secureInput, setSecureInput] = useState(!(props.inputType === "text" || props.inputType === "email"))

  const color = labelColor || colors.white;
  const fontSize = labelTextSize || 14;
  const inputColor = textColor || colors.white;
  const borderBottom = borderBottomColor || "transparent";

  const styles = StyleSheet.create({
    wrapper: {
      display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10 },
    inputFiled: {
      borderBottomWidth: 1,
      paddingTop: 5,
      paddingBottom: 5
    },

    showButton: {
      position: "absolute",
      right: 0
    },
    showButtonText: {
      color: colors.white,
      fontWeight: "700"
    }
  });

  const toggleShowPassword = () => {
    setSecureInput(!secureInput);
  }

  // const [labelText, setLabelText] = useState(props.text);

  return (
    <View style={[customStyle, styles.wrapper]}>
      <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
      {inputType === "password" ? (
        <TouchableOpacity
          style={styles.showButton}
          onPress={toggleShowPassword}
        >
          <Text style={styles.showButtonText}>
            {secureInput ? "Show" : "Hide"}
          </Text>
        </TouchableOpacity>
      ) : null}
      <TextInput
        autoCorrect={false}
        style={[
          { color: inputColor, borderBottomColor: borderBottom },
          styles.inputFiled
        ]}
        secureTextEntry={secureInput}
      />
    </View>
  );
}