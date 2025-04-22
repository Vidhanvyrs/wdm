import { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import wdm from "../assets/images/wdmblack.png";
import ConsentWebView from "@/components/ConsentWebView";
// import { BACKEND_URL } from "@env";

export default function Index() {
  const router = useRouter();
  const [showWebView, setShowWebView] = useState(false);
  const [consentUrl, setConsentUrl] = useState(null);

  const handleGetStarted = async () => {
    try {
      const response = await fetch(
        `https://98ef-139-167-72-46.ngrok-free.app/api/aa/consent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            customerId: "7725905353",
          }),
        }
      );

      // Log the raw response for debugging
      const responseText = await response.text();
      console.log("Raw response:", responseText);

      // Check if response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Try parsing the response
      const data = JSON.parse(responseText);
      if (data.url) {
        setConsentUrl(data.url);
        setShowWebView(true);
      } else {
        console.error("No URL in response:", data);
      }
    } catch (error) {
      console.error("Error initiating consent:", {
        message: error.message,
        type: error.name,
        stack: error.stack,
      });
      alert("Failed to connect to the server. Please try again.");
    }
  };

  const handleConsentComplete = (success) => {
    setShowWebView(false);
    if (success) {
      router.push("/expense");
    }
  };

  if (showWebView && consentUrl) {
    return (
      <ConsentWebView
        consentUrl={consentUrl}
        onComplete={handleConsentComplete}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Image source={wdm} style={styles.image} />
      <Text style={styles.title}>Where's Dat Money ?</Text>
      <Text style={styles.subtitle}>
        Minimal Expense App to track weekly, daily & monthly expenses
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
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
