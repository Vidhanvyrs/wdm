import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import SpendingSummary from "@/components/SpendingSummary";
import Recipent from "@/components/Recipent";
import Radar from "@/components/Radar";
import { ScrollView } from "react-native";
import { normalize } from "@/utils/responsive";

const viewOptions = [
  { id: "daily", label: "daily" },
  { id: "weekly", label: "weekly" },
  { id: "monthly", label: "monthly" },
  { id: "all", label: "all" },
];
const recipentArr = [
  { name: "Vidhan", money: "2,345.00" },
  { name: "Vinit", money: "1,890.50" },
  { name: "Shaurya", money: "1,567.75" },
  { name: "Piyush", money: "1,234.25" },
  { name: "Utkarsh", money: "978.50" },
];
const ExpenseScreen = () => {
  const [activeView, setActiveView] = useState("daily");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get("window").width;

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / screenWidth);
    setActiveIndex(currentIndex);
  };

  const [fontsLoaded] = useFonts({
    Alfa: require("@/assets/fonts/AlfaSlabOne-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Your Minimal Spending</Text>
          <Text style={styles.subtitle}>daily, weekly, & monthly</Text>
        </View>
        <View style={styles.summariesContainer}>
          <TouchableOpacity onPress={() => setActiveView("daily")}>
            <SpendingSummary
              timeFrame="Daily"
              amount="123.52"
              comparisonText="Yesterday"
              comparisonAmount="90.33"
              isActive={activeView === "daily"}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveView("weekly")}>
            <SpendingSummary
              timeFrame="Weekly"
              amount="324.01"
              comparisonText="Last Week"
              comparisonAmount="332.88"
              isActive={activeView === "weekly"}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveView("monthly")}>
            <SpendingSummary
              timeFrame="Monthly"
              amount="2831.80"
              comparisonText="Last Month"
              comparisonAmount="2502.75"
              isActive={activeView === "monthly"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.semiContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={[styles.slide, { width: screenWidth - 20 }]}>
            <View style={styles.recipentContainer}>
              <Text style={styles.recipent}>Top Spends 💸</Text>
              {recipentArr.map((item, index) => (
                <Recipent key={index} recipent={item.name} money={item.money} />
              ))}
            </View>
          </View>
          <View style={[styles.slide, { width: screenWidth - 20 }]}>
            <Radar />
          </View>
        </ScrollView>
        <View style={styles.pagination}>
          {[0, 1].map((index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexWrap: "nowrap",
    width: "100%",
  },
  slide: {
    flex: 1,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    gap: 8,
  },
  dot: {
    width: normalize(8),
    height: normalize(8),
    borderRadius: normalize(4),
    borderWidth: 1,
    borderColor: "white",
  },
  activeDot: {
    backgroundColor: "white",
  },
  inactiveDot: {
    backgroundColor: "transparent",
  },
  semiContainer: {
    flex: 1,
    backgroundColor: "#222222",
    marginTop: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    overflow: "hidden",
  },
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  recipentContainer: {
    flex: 1,
    marginTop: 16,
  },
  recipent: {
    fontSize: normalize(14), // Reduced from 15
    color: "white",
    fontFamily: "Alfa",
    fontWeight: "bolder",
    textAlign: "center",
    width: "100%",
    textDecorationLine: "underline",
  },
  titleContainer: {
    paddingHorizontal: normalize(16),
    paddingTop: normalize(24),
    paddingBottom: normalize(8),
    alignItems: "center",
  },
  title: {
    fontSize: normalize(22), // Reduced from 25
    fontFamily: "Alfa",
    color: "grey",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  subtitle: {
    fontSize: normalize(15), // Reduced from 17
    color: "#6b7280",
    textAlign: "center",
  },
  summariesContainer: {
    paddingHorizontal: normalize(16),
  },
  scrollHint: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  scrollHintText: {
    fontSize: 12,
    color: "#6b7280",
  },
  viewSelectorContainer: {
    paddingVertical: 24,
  },
});
export default ExpenseScreen;
