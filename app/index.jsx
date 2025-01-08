
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import { router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

import CustomButton from "../components/CustomButton";
import { StrictMode } from "react";
// import { cssInterop } from "nativewind";
// cssInterop(Image, { className: "style" });

export default function App() {
  return (
    <StrictMode>
    <SafeAreaView className="bg-primary h-full">
      <ScrollView style={{ borderWidth: 1, borderColor: 'red' }} horizontal={false}  contentContainerStyle={{height: '100%'}} >
        <View className="w-full justify-center min-h-[85vh]  items-center  px-4 ">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-4xl text-white font-bold text-center">
              Discover Endless Possibilties with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meat inovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton title="Continue with Email" handlePress={() => {router.push('/sign-in')}} containerStyles="w-full mt-7 p-4" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

    </StrictMode>
  );
}
