import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name,
  size = 40,/*default values*/
  backgroundColor = "#000",/*default values*/
  iconColor = "#fff" /*default values*/,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor, //automatically sets :backgroundColor
      }}
    >
      <MaterialCommunityIcons name={name} backgroundColor={backgroundColor} color={iconColor} size={size * 0.5} />
    </View>
  );
}
