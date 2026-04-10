import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import "./global.css";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (isSignedIn) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/sign-up" />; // 👈 THIS is what you want
}

// import React from "react";
// import { Text, View } from "react-native";

// const HOME = () => {
//   return (
//     <View>
//       <Text>HOME</Text>
//     </View>
//   );
// };

// export default HOME;
