import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { Image } from "react-native";
import { usePathname } from "expo-router";
import logo from "@/assets/images/wdmlogo.png";
import HeaderRight from "@/components/headerRight";

export default function RootLayout() {
  const [onExpense, setOnExpense] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOnExpense(pathname.includes("expense"));
  }, [pathname]);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#222222",
        },
        headerTitle: () => (
          <Image
            source={logo}
            style={{
              width: 60,
              height: 35,
              resizeMode: "cover",
            }}
          />
        ),
        ...(onExpense && {
          headerRight: () => <HeaderRight />,
        }),
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="expense"
        options={{
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}
