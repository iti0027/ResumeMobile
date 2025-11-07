import React, { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Colors } from "./constants/colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    if(fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <Stack 
      screenOptions={{
         headerShown: false,
         contentStyle: { backgroundColor: Colors.background}
        }}
    >

    <Stack.Screen name="pages/"/>
    </Stack>
  </>
  );
}
