import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import { Colors } from "@/constants/Colors";

export default function ScanModal() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [cameraRef, setCameraRef] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return (
            <View style={styles.modalContainer}>
                <Text>Requesting permission...</Text>
            </View>
        );
    }
    if (hasPermission === false) {
        return (
            <View style={styles.modalContainer}>
                <Text>No access to camera</Text>
            </View>
        );
    }

    return (
        <View style={styles.modalContainer}>
            <Camera
                style={StyleSheet.absoluteFill}
                ref={(ref) => setCameraRef(ref)}
                type={Camera.Constants.Type.back}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        height: Dimensions.get("window").height * 0.93,
        justifyContent: "center",
        alignItems: "center",
    },
});
