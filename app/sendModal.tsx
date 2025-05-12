import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Pressable,
    Dimensions,
    Image,
    Modal, // <-- bu yerda import qilingan
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

export default function SendModal() {
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [comment, setComment] = useState("");
    const [tokenModalVisible, setTokenModalVisible] = useState(false);

    const [addressFocus, setAddressFocus] = useState(false);
    const [amountFocus, setAmountFocus] = useState(false);
    const [commentFocus, setCommentFocus] = useState(false);

    return (
        <View style={styles.modalContainer}>
            <View style={styles.topBar}>
                <View style={styles.leftSpace} />
                <Pressable style={styles.walletHeader}>
                    <Text style={styles.walletText}>Send</Text>
                </Pressable>
                <Link href="../" style={styles.settingsIcon}>
                    <Ionicons name="close-outline" size={24} color="white" />
                </Link>
            </View>

            {/* Address input */}
            <View
                style={[
                    styles.inputWrapper,
                    addressFocus && styles.inputFocused,
                ]}
            >
                <TextInput
                    style={styles.inputWithIcons}
                    placeholder="Address or name"
                    placeholderTextColor="#888"
                    value={address}
                    onChangeText={setAddress}
                    onFocus={() => setAddressFocus(true)}
                    onBlur={() => setAddressFocus(false)}
                />
                <Pressable style={styles.pasteButton}>
                    <Text style={styles.pasteText}>Paste</Text>
                </Pressable>
                <Link href={"/scanSend"} style={styles.rightIcon}>
                    <Ionicons name="scan-outline" size={20} color="#888" />
                </Link>
            </View>

            {/* Amount + TON */}
            <View
                style={[
                    styles.inputWrapper,
                    amountFocus && styles.inputFocused,
                    { paddingHorizontal: 0 },
                ]}
            >
                <TextInput
                    style={styles.inputAmountWithToken}
                    placeholder="Amount"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                    onFocus={() => setAmountFocus(true)}
                    onBlur={() => setAmountFocus(false)}
                />
                <TouchableOpacity
                    style={styles.tokenBox}
                    onPress={() => setTokenModalVisible(true)}
                >
                    <Image
                        source={require("../assets/images/ton.png")}
                        style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                    <Text style={styles.tokenText}>TON</Text>
                    <Ionicons
                        name="chevron-down"
                        size={16}
                        color="white"
                        style={{ marginLeft: 4 }}
                    />
                </TouchableOpacity>
            </View>

            {/* Modal (Pastdan chiqadi) */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={tokenModalVisible}
                onRequestClose={() => setTokenModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.tokenModal}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Tokens</Text>
                            <TouchableOpacity
                                onPress={() => setTokenModalVisible(false)}
                            >
                                <Ionicons
                                    name="close-outline"
                                    size={20}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() => setTokenModalVisible(false)}
                            style={styles.modalToken}
                        >
                            <Image
                                source={require("../assets/images/ton.png")}
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginRight: 10,
                                }}
                            />
                            <Text style={{ color: "white" }}>TON</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Remaining and MAX */}
            <View style={styles.remainingRow}>
                <Text style={styles.remainingText}>Remaining 0 TON</Text>
                <TouchableOpacity>
                    <Text style={styles.maxText}>MAX</Text>
                </TouchableOpacity>
            </View>

            {/* Comment Input */}
            <View
                style={[
                    styles.inputWrapper,
                    commentFocus && styles.inputFocused,
                ]}
            >
                <TextInput
                    style={styles.inputWithIcons}
                    placeholder="Comment (optional)"
                    placeholderTextColor="#888"
                    value={comment}
                    onChangeText={setComment}
                    onFocus={() => setCommentFocus(true)}
                    onBlur={() => setCommentFocus(false)}
                />
                <Pressable style={styles.pasteButton}>
                    <Text style={styles.pasteText}>Paste</Text>
                </Pressable>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: Colors.dark.background,
        padding: 20,
        height: Dimensions.get("window").height * 0.93,
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    leftSpace: {
        width: 24,
    },
    walletHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
    },
    walletText: {
        color: "white",
        fontSize: 22,
        marginHorizontal: 5,
        fontWeight: "600",
    },
    settingsIcon: {
        padding: 8,
    },

    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1D2633",
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    inputWithIcons: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 10,
        color: "white",
    },
    inputAmountWithToken: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 12,
        color: "white",
    },
    inputFocused: {
        borderWidth: 1,
        borderColor: "#45AEF5",
    },
    pasteButton: {
        backgroundColor: "#2E3847",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    },
    pasteText: {
        color: "white",
        fontWeight: "500",
        fontSize: 12,
    },
    rightIcon: {
        marginLeft: 10,
        color: "#45AEF5",
    },

    tokenBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2E3847",
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 20,
        marginRight: 10,
    },
    tokenText: {
        color: "white",
        fontWeight: "600",
    },

    remainingRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
        marginBottom: 15,
    },
    remainingText: {
        color: "#8994A3",
    },
    maxText: {
        color: "#45AEF5",
        fontWeight: "500",
    },

    continueButton: {
        backgroundColor: "#378AC2",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    continueText: {
        color: "white",
        fontWeight: "600",
        fontSize: 14,
    },

    // Modal uchun
    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    tokenModal: {
        backgroundColor: "#1D2633",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        marginBottom: 15,
    },
    modalToken: {
        backgroundColor: "#2E3847",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
});
