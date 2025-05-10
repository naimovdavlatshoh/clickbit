import { Stack } from "expo-router";
import React from "react";
import 'react-native-gesture-handler';


export default function RootLayout() {
    return <Stack screenOptions={{ headerShown: false }} />;
}
