import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import colors from '../../style/color';


export default function NextArrowButton() {

    const styles = StyleSheet.create({
        buttonWrapper: {
          alignItems: "flex-end",
          right: 20,
          bottom: 20,
          paddingTop: 0
        },
        button: {
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          width: 60,
          height: 60,
          backgroundColor: colors.white
        },
        icon: {
          marginRight: -2,
          marginTop: -2
        }
      });

    return (
        <View style={styles.buttonWrapper}>
            <TouchableHighlight style={[{ opacity: 0.6 }, styles.button]}>
                <Icon
                    name="angle-right"
                    color={colors.green01}
                    size={32}
                    style={styles.icon}
                />
            </TouchableHighlight>
        </View>
    );
}