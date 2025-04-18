import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { RadarChart } from "@salmonco/react-native-radar-chart";
import { useFonts } from "expo-font";

const Radar = () => {
  const [fontsLoaded] = useFonts({
    Alfa: require("@/assets/fonts/AlfaSlabOne-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  const data = [
    { label: "Today", value: 70 },
    { label: "Yesterday", value: 55 },
    { label: "This-Week", value: 70 },
    { label: "Last-Week", value: 35 },
    { label: "This-Month", value: 10 },
    { label: "Last-Month", value: 60 },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <RadarChart
          data={data}
          maxValue={100}
          gradientColor={{
            startColor: "#f0f0f0",
            endColor: "black",
            count: 5,
          }}
          stroke={["#FFE8D3", "#FFE8D3", "#FFE8D3", "#FFE8D3", "#ff9532"]}
          strokeWidth={[0.5, 0.5, 0.5, 0.5, 1]}
          strokeOpacity={[1, 1, 1, 1, 0.13]}
          labelColor="#f0f0f0"
          labelFontFamily="Alfa"
          labelSize={14}
          dataFillColor="#222222"
          dataFillOpacity={0.8}
          dataStroke="white"
          dataStrokeWidth={2}
          isCircle={false}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Radar;
