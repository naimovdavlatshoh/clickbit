import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Pressable,
    Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function SendModal({ modalVisible2, handleCloseModal2 }: any) {
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [comment, setComment] = useState("");

    return (
        <Modal
            isVisible={modalVisible2}
            onBackdropPress={handleCloseModal2}
            onSwipeComplete={handleCloseModal2}
            swipeDirection="down"
            style={styles.modalStyle}
        >
            <View style={styles.modalContainer}>
                <View style={styles.topBar}>
                    <View style={styles.leftSpace} />

                    <Pressable style={styles.walletHeader}>
                        <Text style={styles.walletText}>Send</Text>
                    </Pressable>

                    <TouchableOpacity
                        onPress={handleCloseModal2}
                        style={styles.settingsIcon}
                    >
                        <Ionicons
                            name="close-outline"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Address or name"
                    placeholderTextColor="#888"
                    value={address}
                    onChangeText={setAddress}
                />
                <View style={styles.amountRow}>
                    <TextInput
                        style={[styles.input, { flex: 1, marginRight: 10 }]}
                        placeholder="Amount"
                        placeholderTextColor="#888"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />
                    <View style={styles.tokenBox}>
                        <Text style={styles.tokenText}>TON</Text>
                    </View>
                </View>

                <View style={styles.remainingRow}>
                    <Text style={styles.remainingText}>Remaining 0 TON</Text>
                    <TouchableOpacity>
                        <Text style={styles.maxText}>MAX</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Comment"
                    placeholderTextColor="#888"
                    value={comment}
                    onChangeText={setComment}
                />

                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },

    modalContainer: {
        backgroundColor: Colors.dark.background,
        padding: 20,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: Dimensions.get("window").height * 0.93, // deyarli to‘liq ekran
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    leftSpace: {
        width: 24, // settings icon size bilan teng qilib bo'sh joy qoldirildi
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
        fontWeight: 600,
    },
    settingsIcon: {
        padding: 8,
    },
    input: {
        backgroundColor: "#1D2633",
        padding: 14,
        borderRadius: 10,
        color: "white",
        marginBottom: 15,
    },
    amountRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    tokenBox: {
        backgroundColor: "#1c1e2c",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    tokenText: {
        color: "white",
        fontWeight: "600",
    },
    remainingRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 20,
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
        fontWeight: 600,
        fontSize: 14,
    },
    modalStyle: {
        justifyContent: "flex-end",
        margin: 0, // modalni to‘liq pastdan chiqarish uchun
    },
});
