import { useSignIn } from "@clerk/expo";
import { Image } from "expo-image";
import { useRouter, type Href } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmailSignIn() {
  const { signIn, errors, fetchStatus } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const { error } = await signIn.password({
      emailAddress,
      password,
    });

    if (error) {
      console.error(JSON.stringify(error, null, 2));
      return;
    }

    if (signIn.status === "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            console.log(session?.currentTask);
            return;
          }

          const url = decorateUrl("/home");
          if (url.startsWith("http")) {
            window.location.href = url;
          } else {
            router.push(url as Href);
          }
        },
      });
    } else {
      console.error("Sign-in attempt not complete:", signIn);
    }
  };

  // const handleVerify = async () => {
  //   await signIn.mfa.verifyEmailCode({ code });

  //   if (signIn.status === "complete") {
  //     await signIn.finalize({
  //       navigate: ({ session, decorateUrl }) => {
  //         if (session?.currentTask) {
  //           console.log(session?.currentTask);
  //           return;
  //         }

  //         const url = decorateUrl("/home");
  //         if (url.startsWith("http")) {
  //           window.location.href = url;
  //         } else {
  //           router.push(url as Href);
  //         }
  //       },
  //     });
  //   } else {
  //     console.error("Sign-in attempt not complete:", signIn);
  //   }
  // };

  // if (signIn.status === "needs_client_trust") {
  //   return (
  //     <SafeAreaView className="flex-1 bg-primary dark:bg-secondary">
  //       {/* top section */}
  //       <View className="px-6 pt-10">
  //         <Text className="text-center text-4xl font-bold text-primary-foreground dark:text-foreground">
  //           Verify Email
  //         </Text>

  //         <Text className="mt-2 text-center text-sm text-primary-foreground/80 dark:text-foreground/70">
  //           Enter the code sent to your email
  //         </Text>
  //       </View>

  //       {/* bottom card */}
  //       <View className="mt-10 flex-1 rounded-t-[36px] bg-card px-6 pt-8">
  //         <TextInput
  //           value={code}
  //           placeholder="Enter verification code"
  //           placeholderTextColor="#666"
  //           onChangeText={setCode}
  //           keyboardType="numeric"
  //           className="mb-4 h-14 rounded-xl border border-border px-4 text-center text-lg text-foreground"
  //         />

  //         {errors?.fields?.code && (
  //           <Text className="mb-2 text-sm text-red-500">
  //             {errors.fields.code.message}
  //           </Text>
  //         )}

  //         <Pressable
  //           onPress={handleVerify}
  //           disabled={fetchStatus === "fetching"}
  //           className="h-14 items-center justify-center rounded-xl bg-primary"
  //         >
  //           <Text className="text-lg font-semibold text-primary-foreground">
  //             Verify Code
  //           </Text>
  //         </Pressable>

  //         <Pressable
  //           onPress={() => signIn.mfa.sendEmailCode()}
  //           className="mt-4"
  //         >
  //           <Text className="text-center text-primary font-semibold">
  //             Resend Code
  //           </Text>
  //         </Pressable>

  //         <Pressable onPress={() => signIn.reset()} className="mt-2">
  //           <Text className="text-center text-muted-foreground">
  //             Start Over
  //           </Text>
  //         </Pressable>
  //       </View>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView
      className="flex-1 bg-primary dark:bg-dark-background"
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

        <View className="mt-6 w-[70%] rounded-[30px] border border-white/20 bg-white/10 dark:bg-dark-background/20 p-3 items-center justify-center self-center">
          <Image
            source={require("../../assets/images/auth.png")}
            style={{ width: 180, height: 120 }}
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

        <Text className="mt-6 text-3xl font-bold text-center text-foreground dark:text-dark-foreground">
          Sign in with Email
        </Text>

        <View className="mt-6">
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            placeholderTextColor="#94a3b8" // Improved visibility for dark mode
            onChangeText={setEmailAddress}
            keyboardType="email-address"
            className="mb-4 h-14 rounded-xl border border-border dark:border-dark-border px-4 text-foreground dark:text-dark-foreground bg-background/50 dark:bg-dark-background/40"
          />

          <TextInput
            value={password}
            placeholder="Enter password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            onChangeText={setPassword}
            className="mb-4 h-14 rounded-xl border border-border dark:border-dark-border px-4 text-foreground dark:text-dark-foreground bg-background/50 dark:bg-dark-background/40"
          />

          <Pressable
            onPress={handleSubmit}
            disabled={!emailAddress || !password || fetchStatus === "fetching"}
            className={`h-14 items-center justify-center rounded-xl bg-primary dark:bg-dark-primary ${
              fetchStatus === "fetching" ? "opacity-70" : ""
            }`}
          >
            <Text className="text-lg font-semibold text-primary-foreground dark:text-dark-primary-foreground">
              {fetchStatus === "fetching" ? "Signing In..." : "Sign In"}
            </Text>
          </Pressable>
        </View>

        <View className="mt-4 flex-row justify-center">
          <Text className="text-muted-foreground dark:text-dark-muted-foreground">
            Don’t have an account?
          </Text>

          <Pressable onPress={() => router.push("/(auth)/sign-up" as Href)}>
            <Text className="ml-1 font-semibold text-primary dark:text-dark-primary">
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
  title: {
    marginBottom: 8,
    fontSize: 22,
    fontWeight: "700",
  },
  label: {
    fontWeight: "600",
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  secondaryButtonText: {
    color: "#0a7ea4",
    fontWeight: "600",
  },
  linkContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: 12,
    alignItems: "center",
  },
  link: {
    color: "#0a7ea4",
    fontWeight: "600",
  },
  error: {
    color: "#d32f2f",
    fontSize: 12,
    marginTop: -8,
  },
  debug: {
    fontSize: 10,
    opacity: 0.5,
    marginTop: 8,
  },
});
