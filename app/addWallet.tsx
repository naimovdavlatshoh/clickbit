import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    FlatList,
} from "react-native";
import { useState } from "react";
import EmojiSelector from "react-native-emoji-selector";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import React from "react";

const COLORS = [
    "#2D343E",
    "#3B3F47",
    "#8E8E93",
    "#FF6B6B",
    "#FFA500",
    "#FFD93D",
    "#6FCF97",
    "#4AA7F7",
    "#7B61FF",
];

export default function AddWallet() {
    const [walletName, setWalletName] = useState("Wallet");
    const [selectedColor, setSelectedColor] = useState(COLORS[0]);
    const [selectedEmoji, setSelectedEmoji] = useState("💼");

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                </Pressable>
                <Text style={styles.headerTitle}>Customize your wallet</Text>
                <View style={{ width: 28 }} />
            </View>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Back up your wallet manually by writing down the recovery
                phrase.
            </Text>

            {/* Wallet Name + Emoji */}
            <View
                style={[
                    styles.inputContainer,
                    { backgroundColor: selectedColor },
                ]}
            >
                <View style={{ flex: 1 }}>
                    <Text style={styles.inputLabel}>Wallet Name</Text>
                    <TextInput
                        value={walletName}
                        onChangeText={setWalletName}
                        style={styles.input}
                        placeholder="Wallet"
                        placeholderTextColor="#ccc"
                    />
                </View>
                <View style={styles.emojiContainer}>
                    <Text style={styles.emoji}>{selectedEmoji}</Text>
                </View>
            </View>

            <FlatList
                data={COLORS}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.colorList}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => setSelectedColor(item)}
                        style={[
                            styles.colorCircle,
                            { backgroundColor: item },
                            selectedColor === item && styles.selectedBorder,
                        ]}
                    />
                )}
            />

            {/* Emoji Selector */}
            <View style={{ flex: 1, marginBottom: 50 }}>
                <EmojiSelector
                    onEmojiSelected={(emoji) => setSelectedEmoji(emoji)}
                    showSearchBar={false}
                    showTabs={false}
                    showHistory={true}
                    category={undefined}
                    columns={8}
                />
            </View>

            <Pressable
                onPress={() => router.push("/backup")}
                style={styles.createButton}
            >
                <Text style={styles.createText}>Create New Wallet</Text>
            </Pressable>
        </View>
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
        marginBottom: 10,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#ccc",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 12,
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 12,
        color: "#aaa",
    },
    input: {
        color: "#fff",
        fontSize: 16,
    },
    emojiContainer: {
        backgroundColor: "#1A1A1A",
        borderRadius: 10,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 12,
    },
    emoji: {
        fontSize: 24,
    },
    colorList: {
        marginBottom: 16,
    },
    colorCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 12,
    },
    selectedBorder: {
        borderWidth: 2,
        borderColor: "#fff",
    },
    createButton: {
        backgroundColor: "#4AA7F7",
        height:50,
        justifyContent:"center",
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 30,
    },
    createText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
