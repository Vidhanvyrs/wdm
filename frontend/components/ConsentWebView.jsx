import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const ConsentWebView = ({ consentUrl, onComplete }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleNavigationStateChange = (navState) => {
    // Check if the URL contains success or failure parameters
    if (navState.url.includes("success=true")) {
      onComplete(true);
      router.push("/expense");
    } else if (navState.url.includes("success=false")) {
      onComplete(false);
      // Handle failure case
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: consentUrl }}
        onNavigationStateChange={handleNavigationStateChange}
        onLoad={() => setLoading(false)}
        style={styles.webview}
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#222222" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
});

export default ConsentWebView;
