import useSocialAuth from "@/hooks/useSocialAuth";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignInScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();
  // const { signIn, errors, fetchStatus } = useSignIn();

  // const [emailAddress, setEmailAddress] = useState("");
  // const [password, setPassword] = useState("");
  // const [code, setCode] = useState("");
  const router = useRouter();

  const isGoogleClicked = loadingStrategy === "oauth_google";
  const isAppleClicked = loadingStrategy === "oauth_apple";
  const isGitHubClicked = loadingStrategy === "oauth_github";

  const isLoading = isAppleClicked || isGitHubClicked || isGoogleClicked;

  // console.log("IsLoading", isLoading);
  // console.log("loadingStrategy", loadingStrategy);

  return (
    // <SafeAreaView
    //   className="flex-1 bg-primary dark:bg-dark-secondary"
    //   edges={["top"]}
    // >
    //   {/* decorative elements */}
    //   <View className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-primary/80 dark:bg-dark-background/40" />
    //   <View className="absolute right-[-74px] top-40 h-72 w-72 rounded-full bg-primary/70 dark:bg-dark-background/35" />

    //   <View className="px-6 pt-4">
    //     <Text className="text-center text-5xl font-extrabold tracking-tight text-primary-foreground uppercase font-mono dark:text-dark-foreground">
    //       Grocify
    //     </Text>

    //     <Text className="mt-1 text-center text-[14px] text-primary-foreground/80 dark:text-foreground/75">
    //       Plan smarter. Shop happier.
    //     </Text>

    //     <View className="mt-6 rounded-[30px] border border-white/20 bg-white/10 p-3">
    //       <Image
    //         source={require("../../assets/images/auth.png")}
    //         style={{ width: "100%", height: 300 }}
    //         contentFit="contain"
    //       />
    //     </View>
    //   </View>

    //   <View className="mt-8 flex-1 rounded-t-[36px] bg-card px-6 pb-8 pt-6">
    //     <View className="self-center rounded-full bg-secondary px-3 py-1">
    //       <Text className="text-xs font-semibold uppercase tracking-[1px] text-secondary-foreground">
    //         Welcome Back
    //       </Text>
    //     </View>

    //     <Text className="mt-2 text-center text-sm leading-6 text-muted-foreground">
    //       Choose a social provider and jump right into your personalized grocery
    //       experience.
    //     </Text>

    //     <View className="mt-6">
    //       <Pressable
    //         className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border bg-card px-4 active:opacity-90 ${
    //           isLoading ? "opacity-70" : ""
    //         }`}
    //         disabled={isLoading}
    //         onPress={() => handleSocialAuth("oauth_google")}
    //       >
    //         <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
    //           <Image
    //             source={require("../../assets/images/google.png")}
    //             style={{ width: 20, height: 20 }}
    //           />
    //         </View>

    //         <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
    //           {isGoogleClicked
    //             ? "Connecting Google..."
    //             : "Continue with Google"}
    //         </Text>

    //         <FontAwesome name="angle-right" size={18} color="#5f6e66" />
    //       </Pressable>

    //       <Pressable
    //         className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border bg-card px-4 active:opacity-90 ${
    //           isLoading ? "opacity-70" : ""
    //         }`}
    //         disabled={isLoading}
    //         onPress={() => handleSocialAuth("oauth_github")}
    //       >
    //         <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
    //           <FontAwesome name="github" size={24} color="#111" />
    //         </View>
    //         <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
    //           {isGitHubClicked
    //             ? "Connecting GitHub..."
    //             : "Continue with GitHub"}
    //         </Text>
    //         <FontAwesome name="angle-right" size={18} color="#5f6e66" />
    //       </Pressable>

    //       <Pressable
    //         className={`mb-3 h-14 flex-row items-center rounded-2xl border border-foreground bg-foreground px-4 active:opacity-90 ${
    //           isLoading ? "opacity-70" : ""
    //         }`}
    //         disabled={isLoading}
    //         onPress={() => handleSocialAuth("oauth_apple")}
    //       >
    //         <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
    //           <FontAwesome6 name="apple" size={22} color="#111" />
    //         </View>
    //         <Text className="ml-3 flex-1 text-lg font-semibold text-background">
    //           {isAppleClicked ? "Connecting Apple..." : "Continue with Apple"}
    //         </Text>
    //         <FontAwesome name="angle-right" size={18} color="#5f6e66" />
    //       </Pressable>

    //       <Pressable
    //         className="mt-4 h-14 items-center justify-center rounded-2xl border border-border bg-card"
    //         onPress={() => router.push("/(auth)/email-signin")}
    //       >
    //         <Text className="text-lg font-semibold text-card-foreground">
    //           Continue with Email
    //         </Text>
    //       </Pressable>
    //     </View>

    //     <Text className="mt-3 text-center text-sm leading-5 text-muted-foreground">
    //       By continuing, you agree to our Terms and Privacy Policy.
    //     </Text>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView
      className="flex-1 bg-primary dark:bg-dark-background" // Corrected: follows your dark green bg
      edges={["top"]}
    >
      {/* decorative elements */}
      <View className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-primary/80 dark:bg-dark-background/40" />
      <View className="absolute right-[-74px] top-40 h-72 w-72 rounded-full bg-primary/70 dark:bg-dark-background/35" />

      <View className="px-6 pt-4">
        <Text className="text-center text-5xl font-extrabold tracking-tight text-primary-foreground uppercase font-mono dark:text-dark-foreground">
          Grocify
        </Text>

        <Text className="mt-1 text-center text-[14px] text-primary-foreground/80 dark:text-dark-foreground/75">
          Plan smarter. Shop happier.
        </Text>

        <View className="mt-6 rounded-[30px] border border-white/20 bg-white/10 dark:bg-dark-background/20 p-3">
          <Image
            source={require("../../assets/images/auth.png")}
            style={{ width: "100%", height: 300 }}
            contentFit="contain"
          />
        </View>
      </View>

      <View className="mt-8 flex-1 rounded-t-[36px] bg-card dark:bg-dark-card px-6 pb-8 pt-6">
        <View className="self-center rounded-full bg-secondary dark:bg-dark-secondary px-3 py-1">
          <Text className="text-xs font-semibold uppercase tracking-[1px] text-secondary-foreground dark:text-dark-secondary-foreground">
            Welcome Back
          </Text>
        </View>

        <Text className="mt-2 text-center text-sm leading-6 text-muted-foreground dark:text-dark-muted-foreground">
          Choose a social provider and jump right into your personalized grocery
          experience.
        </Text>

        <View className="mt-6">
          {/* Google Button */}
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border dark:border-dark-border bg-card dark:bg-dark-card px-4 active:opacity-90 ${
              isLoading ? "opacity-70" : ""
            }`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_google")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <Image
                source={require("../../assets/images/google.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>

            <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground dark:text-dark-foreground">
              {isGoogleClicked
                ? "Connecting Google..."
                : "Continue with Google"}
            </Text>
            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>

          {/* GitHub Button */}
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border dark:border-dark-border bg-card dark:bg-dark-card px-4 active:opacity-90 ${
              isLoading ? "opacity-70" : ""
            }`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_github")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <FontAwesome name="github" size={24} color="#111" />
            </View>
            <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground dark:text-dark-foreground">
              {isGitHubClicked
                ? "Connecting GitHub..."
                : "Continue with GitHub"}
            </Text>
            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>

          {/* Apple Button */}
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border border-foreground bg-foreground dark:bg-dark-primary px-4 active:opacity-90 ${
              isLoading ? "opacity-70" : ""
            }`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_apple")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <FontAwesome6 name="apple" size={22} color="#111" />
            </View>
            <Text className="ml-3 flex-1 text-lg font-semibold text-background dark:text-dark-background">
              {isAppleClicked ? "Connecting Apple..." : "Continue with Apple"}
            </Text>
            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>

          {/* Email Button */}
          <Pressable
            className="mt-4 h-14 items-center justify-center rounded-2xl border border-border dark:border-dark-border bg-card dark:bg-dark-card"
            onPress={() => router.push("/(auth)/email-signin")}
          >
            <Text className="text-lg font-semibold text-card-foreground dark:text-dark-foreground">
              Continue with Email
            </Text>
          </Pressable>
        </View>

        <Text className="mt-3 text-center text-sm leading-5 text-muted-foreground dark:text-dark-muted-foreground">
          By continuing, you agree to our Terms and Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// import { useAuth } from "@clerk/expo";
// import { AuthView } from "@clerk/expo/native";
// import { useRouter } from "expo-router";
// import { useEffect } from "react";

// export default function SignInScreen() {
//   const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
//   const router = useRouter();

//   useEffect(() => {
//     if (isSignedIn) {
//       router.replace("/home");
//     }
//   }, [isSignedIn]);

//   return <AuthView mode="signInOrUp" />;
// }

// import { useSignIn } from "@clerk/expo";
// import { type Href, Link, useRouter } from "expo-router";
// import React from "react";
// import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// export default function Page() {
//   const { signIn, errors, fetchStatus } = useSignIn();
//   const router = useRouter();

//   const [emailAddress, setEmailAddress] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [code, setCode] = React.useState("");

//   const handleSubmit = async () => {
//     const { error } = await signIn.password({
//       emailAddress,
//       password,
//     });

//     if (error) {
//       console.error(JSON.stringify(error, null, 2));
//       return;
//     }

//     if (signIn.status === "complete") {
//       await signIn.finalize({
//         navigate: ({ session, decorateUrl }) => {
//           if (session?.currentTask) {
//             console.log(session?.currentTask);
//             return;
//           }

//           const url = decorateUrl("/home");
//           if (url.startsWith("http")) {
//             window.location.href = url;
//           } else {
//             router.push(url as Href);
//           }
//         },
//       });
//     } else if (signIn.status === "needs_client_trust") {
//       const emailCodeFactor = signIn.supportedSecondFactors.find(
//         (factor) => factor.strategy === "email_code",
//       );

//       if (emailCodeFactor) {
//         await signIn.mfa.sendEmailCode();
//       }
//     } else {
//       console.error("Sign-in attempt not complete:", signIn);
//     }
//   };

//   const handleVerify = async () => {
//     await signIn.mfa.verifyEmailCode({ code });

//     if (signIn.status === "complete") {
//       await signIn.finalize({
//         navigate: ({ session, decorateUrl }) => {
//           if (session?.currentTask) {
//             console.log(session?.currentTask);
//             return;
//           }

//           const url = decorateUrl("/home");
//           if (url.startsWith("http")) {
//             window.location.href = url;
//           } else {
//             router.push(url as Href);
//           }
//         },
//       });
//     } else {
//       console.error("Sign-in attempt not complete:", signIn);
//     }
//   };

//   // 🔐 Verification screen
//   if (signIn.status === "needs_client_trust") {
//     return (
//       <View style={styles.container}>
//         <Text style={[styles.title, { fontSize: 24, fontWeight: "bold" }]}>
//           Verify your account
//         </Text>

//         <TextInput
//           style={styles.input}
//           value={code}
//           placeholder="Enter your verification code"
//           placeholderTextColor="#666666"
//           onChangeText={setCode}
//           keyboardType="numeric"
//         />

//         {errors.fields.code && (
//           <Text style={styles.error}>{errors.fields.code.message}</Text>
//         )}

//         <Pressable
//           style={({ pressed }) => [
//             styles.button,
//             fetchStatus === "fetching" && styles.buttonDisabled,
//             pressed && styles.buttonPressed,
//           ]}
//           onPress={handleVerify}
//           disabled={fetchStatus === "fetching"}
//         >
//           <Text style={styles.buttonText}>Verify</Text>
//         </Pressable>

//         <Pressable
//           style={({ pressed }) => [
//             styles.secondaryButton,
//             pressed && styles.buttonPressed,
//           ]}
//           onPress={() => signIn.mfa.sendEmailCode()}
//         >
//           <Text style={styles.secondaryButtonText}>I need a new code</Text>
//         </Pressable>

//         <Pressable
//           style={({ pressed }) => [
//             styles.secondaryButton,
//             pressed && styles.buttonPressed,
//           ]}
//           onPress={() => signIn.reset()}
//         >
//           <Text style={styles.secondaryButtonText}>Start over</Text>
//         </Pressable>
//       </View>
//     );
//   }

//   // 🔐 Sign-in screen
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign in</Text>

//       <Text style={styles.label}>Email address</Text>
//       <TextInput
//         style={styles.input}
//         autoCapitalize="none"
//         value={emailAddress}
//         placeholder="Enter email"
//         placeholderTextColor="#666666"
//         onChangeText={setEmailAddress}
//         keyboardType="email-address"
//       />

//       {errors.fields.identifier && (
//         <Text style={styles.error}>{errors.fields.identifier.message}</Text>
//       )}

//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={styles.input}
//         value={password}
//         placeholder="Enter password"
//         placeholderTextColor="#666666"
//         secureTextEntry
//         onChangeText={setPassword}
//       />

//       {errors.fields.password && (
//         <Text style={styles.error}>{errors.fields.password.message}</Text>
//       )}

//       <Pressable
//         style={({ pressed }) => [
//           styles.button,
//           (!emailAddress || !password || fetchStatus === "fetching") &&
//             styles.buttonDisabled,
//           pressed && styles.buttonPressed,
//         ]}
//         onPress={handleSubmit}
//         disabled={!emailAddress || !password || fetchStatus === "fetching"}
//       >
//         <Text style={styles.buttonText}>Continue</Text>
//       </Pressable>

//       <View style={styles.linkContainer}>
//         <Text>Don't have an account? </Text>

//         {/* ✅ FIXED LINK */}
//         <Link href={"/(auth)/sign-up" as Href}>
//           <Text style={styles.link}>Sign up</Text>
//         </Link>
//       </View>
//     </View>
//   );
// }
