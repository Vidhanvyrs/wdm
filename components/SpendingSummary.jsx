import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

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
            <Text style={{ fontSize: 24 }}>
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
    paddingVertical: 6,
  },
  activeContainer: {
    backgroundColor: "rgba(243, 244, 246, 0.5)",
    borderRadius: 8,
  },
  content: {
    alignItems: "center",
  },
  emoji: {
    flexDirection: "row",
  },
  amount: {
    fontSize: 40,
    fontFamily: "Alfa",
    fontWeight: "bolder",
    marginTop: 4,
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
    fontSize: 16,
    color: "#9ca3af",
    marginTop: 4,
  },
});

export default SpendingSummary;
