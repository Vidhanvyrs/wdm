import React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { RadarChart } from "@salmonco/react-native-radar-chart";
import { useFonts } from "expo-font";
import { normalize } from "@/utils/responsive";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CHART_SIZE = SCREEN_WIDTH * 0.8;

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
      <SafeAreaView style={styles.chartContainer}>
        <RadarChart
          data={data}
          maxValue={100}
          size={CHART_SIZE}
          gradientColor={{
            startColor: "#f0f0f0",
            endColor: "black",
            count: 5,
          }}
          stroke={["#FFE8D3", "#FFE8D3", "#FFE8D3", "#FFE8D3", "#ff9532"]}
          strokeWidth={[
            normalize(0.5),
            normalize(0.5),
            normalize(0.5),
            normalize(0.5),
            normalize(1),
          ]}
          strokeOpacity={[1, 1, 1, 1, 0.13]}
          labelColor="#f0f0f0"
          labelFontFamily="Alfa"
          labelSize={normalize(12)} // Reduced from 14 for better fit
          dataFillColor="#222222"
          dataFillOpacity={0.8}
          dataStroke="white"
          dataStrokeWidth={normalize(2)}
          isCircle={false}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: normalize(15),
  },
  chartContainer: {
    width: CHART_SIZE,
    height: CHART_SIZE,
    justifyContent: "center",
    alignItems: "center",
    marginTop: normalize(-10),
  },
});

export default Radar;
