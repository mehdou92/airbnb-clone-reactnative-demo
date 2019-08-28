
import React, { useState } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import colors from '../../style/color';

export default function RoundedButton(props) {

    const [text, setText] = useState(props.text);
    const [textColor, setTextColor] = useState(props.textColor);
    const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor);
    const [icon, setIcon] = useState(props.icon);

    const color = textColor || color.black;

    const styles = StyleSheet.create({
        wrapper: {
            padding: 15,
            display: "flex",
            borderRadius: 40,
            borderWidth: 1,
            borderColor: colors.white
        },
        buttonText: {
            fontSize: 16,
            width: "100%",
            textAlign: "center"
        },

        ButtonTextWrapper: {
            flexDirection: "row",
            justifyContent: "flex-end"
        },

        wrapper: {
            padding: 15,
            display: "flex",
            borderRadius: 40,
            borderWidth: 1,
            borderColor: colors.white,
            marginBottom: 15,
            alignItems: "center"
        }

    });

    return (
        <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}>
            <View style={styles.ButtonTextWrapper}>
                {icon}
                <Text style={[{ color }, styles.buttonText]}>{text}</Text>
            </View>
        </TouchableHighlight>
    )
}