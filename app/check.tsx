import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function CheckBackup() {
    const [words, setWords] = useState({ one: "", two: "", three: "" });

    const handleChange = (key: string, value: string) => {
        setWords((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        router.push("/(tabs)/browser");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.container}
        >
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                </Pressable>
            </View>

            {/* Description */}
            <Text style={styles.headerTitle}>Backup Check</Text>
            <View style={{ width: 28 }} />
            <Text style={styles.description}>
                Let’s see if you’ve got everything right. Enter words 9.10, and
                12.
            </Text>

            {/* Inputs */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>7.</Text>
                <TextInput
                    style={styles.input}
                    value={words.one}
                    onChangeText={(text) => handleChange("one", text)}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>15.</Text>
                <TextInput
                    style={styles.input}
                    value={words.two}
                    onChangeText={(text) => handleChange("two", text)}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>23.</Text>
                <TextInput
                    style={styles.input}
                    value={words.three}
                    onChangeText={(text) => handleChange("three", text)}
                />
            </View>

            {/* Submit Button */}
            <Pressable style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>Continue</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 40,
        marginBottom: 30,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    description: {
        color: "#ccc",
        fontSize: 14,
        marginBottom: 20,
        textAlign: "center",
    },
    inputGroup: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1D2633",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginBottom: 15,
    },
    label: {
        color: "#fff",

        fontWeight: 500,
        fontSize: 16,
        width: 30,
    },
    input: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: "#378AC2",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    submitText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
});
