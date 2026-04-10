// import { ClerkLoaded, ClerkProvider } from "@clerk/expo";
// import { tokenCache } from "@clerk/expo/token-cache";
// import { Stack } from "expo-router";
// import "./global.css";

// const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

// if (!publishableKey) {
//   throw new Error("Add your Clerk Publishable Key to the .env file");
// }

// export default function RootLayout() {
//   return (
//     <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
//       <ClerkLoaded>
//         <Stack screenOptions={{ headerShown: false }} />
//       </ClerkLoaded>
//     </ClerkProvider>
//   );
// }

// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack screenOptions={{ headerShown: false }} />;
// }

import * as SecureStore from "expo-secure-store";
import { useColorScheme } from "nativewind";
import { ActivityIndicator, View } from "react-native";

import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/expo";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "./global.css";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const tokenCache = {
  async getToken(key: string) {
    return SecureStore.getItemAsync(key);
  },
  async saveToken(key: string, value: string) {
    return SecureStore.setItemAsync(key, value);
  },
};

export default function RootLayout() {
  // console.log("CLERK KEY:", publishableKey);
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    console.log("Forcing dark mode check...");
  }, [colorScheme]);
  console.log("Current Theme:", colorScheme);
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* 👇 SHOW LOADER WHILE CLERK INIT */}
        <ClerkLoading>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        </ClerkLoading>

        {/* 👇 APP ONLY LOADS AFTER CLERK READY */}
        <ClerkLoaded>
          <Stack screenOptions={{ headerShown: false }} />
        </ClerkLoaded>
      </ThemeProvider>
    </ClerkProvider>
  );
}
