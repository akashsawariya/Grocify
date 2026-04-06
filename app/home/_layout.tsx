import { useAuth } from "@clerk/expo";
import { Text } from "react-native";

export default function Layout() {
  const { isSignedIn, isLoaded } = useAuth();

  return <Text>Loading...</Text>;

}
