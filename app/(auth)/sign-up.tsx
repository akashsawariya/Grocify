import { useSignUp } from "@clerk/expo";
import { Image } from "expo-image";
import { useRouter, type Href } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const { signUp, errors } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const router = useRouter();

  // 👉 SIGN UP
  const handleSignUp = async () => {
    if (!signUp) return;

    try {
      await signUp.password({
        emailAddress,
        password,
      });

      await signUp.verifications.sendEmailCode();
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // 👉 VERIFY CODE
  const handleVerify = async () => {
    try {
      await signUp.verifications.verifyEmailCode({ code });

      if (signUp.status === "complete") {
        await signUp.finalize({
          navigate: ({ decorateUrl }) => {
            const url = decorateUrl("/home");
            if (url.startsWith("http")) {
              window.location.href = url;
            } else {
              router.push(url as Href);
            }
          },
        });
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // ✅ VERIFICATION UI
  if (
    signUp.status === "missing_requirements" &&
    signUp.unverifiedFields.includes("email_address")
  ) {
    return (
      <SafeAreaView
        className="flex-1 bg-primary dark:bg-dark-secondary"
        edges={["top"]}
      >
        <View className="px-6 pt-10">
          <Text className="text-center text-4xl font-bold text-primary-foreground dark:text-dark-foreground">
            Verify Email
          </Text>

          <Text className="mt-2 text-center text-sm text-primary-foreground/80 dark:text-foreground/70">
            Enter the code sent to your email
          </Text>
        </View>

        <View className="mt-10 flex-1 rounded-t-[36px] bg-card px-6 pt-8">
          <TextInput
            value={code}
            placeholder="Enter verification code"
            placeholderTextColor="#666"
            onChangeText={setCode}
            keyboardType="numeric"
            className="mb-4 h-14 rounded-xl border border-border px-4 text-center text-lg text-foreground"
          />

          {errors?.fields?.code && (
            <Text className="mb-2 text-sm text-red-500">
              {errors.fields.code.message}
            </Text>
          )}

          <Pressable
            onPress={handleVerify}
            className="h-14 items-center justify-center rounded-xl bg-primary"
          >
            <Text className="text-lg font-semibold text-primary-foreground">
              Verify Code
            </Text>
          </Pressable>

          <Pressable
            onPress={() => signUp.verifications.sendEmailCode()}
            className="mt-4"
          >
            <Text className="text-center text-primary font-semibold">
              Resend Code
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // ✅ SIGN UP UI
  return (
    <SafeAreaView
      className="flex-1 bg-primary dark:bg-dark-secondary"
      edges={["top"]}
    >
      {/* Background blobs */}
      <View className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-primary/80 dark:bg-dark-background/40" />
      <View className="absolute right-[-74px] top-40 h-72 w-72 rounded-full bg-primary/70 dark:bg-dark-background/35" />

      {/* Header Section */}
      <View className="px-6 pt-4">
        {/* Main Logo Text */}
        <Text className="text-center text-5xl font-extrabold tracking-tight text-primary-foreground uppercase font-mono dark:text-dark-foreground">
          Grocify
        </Text>

        {/* Slogan */}
        <Text className="mt-1 text-center text-[14px] text-primary-foreground/80 dark:text-dark-foreground/75">
          Plan smarter. Shop happier.
        </Text>

        {/* Image Container with Glassmorphism */}
        <View className="mt-6 w-[70%] self-center rounded-[30px] border border-white/20 bg-white/10 dark:bg-dark-background/20 p-3 items-center justify-center">
          <Image
            source={require("../../assets/images/auth.png")}
            style={{ width: 180, height: 120 }}
            contentFit="contain"
          />
        </View>
      </View>

      <View className="mt-8 flex-1 rounded-t-[36px] bg-card dark:bg-dark-card px-6 pb-8 pt-6">
        {/* Badge */}
        <View className="self-center rounded-full bg-secondary dark:bg-dark-secondary px-3 py-1">
          <Text className="text-xs font-semibold uppercase tracking-[1px] text-secondary-foreground dark:text-dark-secondary-foreground">
            Create Account
          </Text>
        </View>

        {/* Title */}
        <Text className="mt-2 text-center text-sm text-muted-foreground dark:text-dark-muted-foreground">
          Start your grocery journey today
        </Text>

        <Text className="mt-2 text-3xl font-bold text-center text-foreground dark:text-dark-foreground">
          Sign Up with Email
        </Text>

        {/* Inputs */}
        <View className="mt-6">
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            placeholderTextColor="#94a3b8"
            onChangeText={setEmailAddress}
            className="mb-4 h-14 rounded-xl border border-border/30 dark:border-dark-border px-4 text-foreground dark:text-dark-foreground bg-background/5 dark:bg-dark-background/40"
          />

          <TextInput
            value={password}
            placeholder="Enter password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            onChangeText={setPassword}
            className="mb-4 h-14 rounded-xl border border-border/30 dark:border-dark-border px-4 text-foreground dark:text-dark-foreground"
          />

          <Pressable
            onPress={handleSignUp}
            disabled={!emailAddress || !password}
            className="h-14 items-center justify-center rounded-xl bg-primary dark:bg-dark-primary active:opacity-90"
          >
            <Text className="text-lg font-semibold text-primary-foreground dark:text-dark-primary-foreground">
              Sign Up
            </Text>
          </Pressable>
        </View>

        {/* Switch to Sign In */}
        <View className="mt-4 flex-row justify-center">
          <Text className="text-muted-foreground dark:text-dark-muted-foreground">
            Already have an account?
          </Text>

          <Pressable onPress={() => router.push("/(auth)/sign-in" as Href)}>
            <Text className="ml-1 font-semibold text-primary dark:text-dark-primary">
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
