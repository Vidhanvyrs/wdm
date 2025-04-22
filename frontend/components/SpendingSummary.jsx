import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { normalize } from "@/utils/responsive";

const SpendingSummary = ({
  timeFrame,
  amount,
  comparisonText,
  comparisonAmount,
  isActive = false,
}) => {
  const [fontsLoaded] = useFonts({
    Alfa: require("@/assets/fonts/AlfaSlabOne-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={[styles.container, isActive ? styles.activeContainer : null]}>
      <View style={styles.content}>
        <View style={styles.emoji}>
          <Text
            style={[
              styles.amount,
              isActive ? styles.activeAmount : styles.inactiveAmount,
            ]}
          >
            ₹{amount}
            {timeFrame === "Daily"
              ? "d"
              : timeFrame === "Weekly"
              ? "w"
              : timeFrame === "Monthly"
              ? "m"
              : ""}
          </Text>
          <TouchableOpacity>
            <Text style={styles.emojiText}>
              {isActive &&
                (Number(comparisonAmount) > Number(amount) ? "🤑" : "😭")}
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.comparison,
            isActive ? styles.activeComp : styles.inactiveComp,
          ]}
        >
          {comparisonText} ₹{comparisonAmount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(6),
  },
  activeContainer: {
    backgroundColor: "rgba(243, 244, 246, 0.5)",
    borderRadius: normalize(8),
  },
  content: {
    alignItems: "center",
    paddingHorizontal: normalize(10),
  },
  emoji: {
    flexDirection: "row",
    alignItems: "center",
    gap: normalize(4),
  },
  amount: {
    fontSize: normalize(32), // Reduced from 40
    fontFamily: "Alfa",
    fontWeight: "bolder",
    marginTop: normalize(4),
  },
  emojiText: {
    fontSize: normalize(20), // Reduced from 24
  },
  activeAmount: {
    color: "#222222",
  },
  inactiveAmount: {
    color: "#9ca3af",
  },
  activeComp: {
    color: "grey",
    fontWeight: "bold",
  },
  inactiveComp: {
    color: "#9ca3af",
  },
  comparison: {
    fontSize: normalize(14), // Reduced from 16
    color: "#9ca3af",
    marginTop: normalize(4),
  },
});

export default SpendingSummary;
