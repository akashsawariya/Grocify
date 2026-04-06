import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Layout() {
  const { isSignedIn, isLoaded } = useAuth();

  // ✅ Show loader while Clerk is initializing
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  // ✅ If NOT signed in → go to sign-up
  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-up" />;
  }

  // ✅ If signed in → show home screens
  return <Stack />;
}
