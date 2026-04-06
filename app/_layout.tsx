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

import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import "./global.css";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function RootLayout() {
  console.log("CLERK KEY:", publishableKey);
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
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
    </ClerkProvider>
  );
}
