import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { normalize } from "@/utils/responsive";

const Recipent = ({ recipent, money }) => {
  const [fontsLoaded] = useFonts({
    Alfa: require("@/assets/fonts/AlfaSlabOne-Regular.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.recipent}>{recipent}</Text>
      <Text style={styles.recipent}>₹ {money}</Text>
    </View>
  );
};
// backgroundColor: "#f3f4f6",
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: normalize(10),
    padding: normalize(5),
    marginTop: normalize(16),
    marginHorizontal: normalize(14),
  },
  recipent: {
    color: "black",
    fontSize: normalize(14),
    fontFamily: "Alfa",
    fontWeight: "bolder",
  },
});
export default Recipent;
