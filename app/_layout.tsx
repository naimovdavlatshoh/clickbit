import { Stack } from "expo-router";
import React from "react";
import "react-native-gesture-handler";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="sendModal"
                options={{
                    presentation: "modal",
                }}
            />
            <Stack.Screen
                name="scan"
                options={{
                    presentation: "modal",
                }}
            />
            <Stack.Screen
                name="scanSend"
                options={{
                    presentation: "modal",
                }}
            />
        </Stack>
    );
}
