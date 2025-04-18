import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import wdm from "../assets/images/wdmblack.png";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={wdm} style={styles.image} />
      <Text style={styles.title}>Where's Dat Money ?</Text>
      <Text style={styles.subtitle}>
        Minimal Expense App to track weekly, daily & monthly expenses
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/expense")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: 150,
    height: 90,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "222222",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#222222",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
