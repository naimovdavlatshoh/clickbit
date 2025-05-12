import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Switch,
    Modal,
    Animated,
    Pressable,
    Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import SendModal from "../sendModal";
import { Link } from "expo-router";

export default function Wallet() {
    const [modalVisible, setModalVisible] = useState(false); // State to control the modal visibility
    const [modalVisible2, setModalVisible2] = useState(false); // State to control the modal visibility
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [faceIdEnabled, setFaceIdEnabled] = useState(false);

    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const handleCloseModal2 = () => {
        setModalVisible2(false);
    };

    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <View style={styles.leftSpace} />
                {/* Left space for centering */}
                {/* Wallet Header */}
                <Pressable
                    onPress={() => setModalVisible(true)}
                    style={styles.walletHeader}
                >
                    <Ionicons name="wallet" size={20} color="white" />
                    <Text style={styles.walletText}>Wallet</Text>
                    <Ionicons
                        name="chevron-down"
                        size={20}
                        color="white"
                        style={{ marginLeft: 4 }}
                    />
                </Pressable>
                {/* Settings icon on the right */}
                <TouchableOpacity style={styles.settingsIcon}>
                    <Ionicons name="settings-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Balance */}
            <Text style={styles.balance}>$0</Text>
            <Text style={styles.address}>Your address: D5...6fAdD</Text>

            {/* Actions */}
            <View style={styles.actionsRow}>
                <Link href={"/sendModal"}>
                    <ActionButton icon="send" label="Send" />
                </Link>

                <ActionButton icon="download" label="Receive" />
                <ActionButton icon="qr-code" label="Scan" />
            </View>
            <View style={styles.actionsRowCenter}>
                <ActionButton icon="swap-horizontal" label="Swap" />
            </View>

            {/* Finish Setting Up */}
            <Text style={styles.finishTitle}>Finish setting up</Text>
            <View style={styles.finishSetup}>
                {/* Enable transaction notifications */}
                <View style={styles.settingItem}>
                    <Image
                        source={require("../../assets/images/ellipse1.png")}
                        style={{ width: 40, height: 40, marginRight: 10 }}
                    />
                    <Text style={styles.settingText}>
                        Enable transaction notifications
                    </Text>
                    <Switch
                        value={notificationsEnabled}
                        onValueChange={setNotificationsEnabled}
                        trackColor={{ false: "#767577", true: "#3599EA" }} // ko‘k rang
                    />
                </View>

                {/* Join ClickBit Channel */}
                <View style={styles.settingItem}>
                    <Image
                        source={require("../../assets/images/ellipse4.png")}
                        style={{ width: 40, height: 40, marginRight: 10 }}
                    />
                    <Text style={styles.settingText}>
                        Join ClickBit Channel
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Open</Text>
                    </TouchableOpacity>
                </View>

                {/* Use Face ID to approve transactions */}
                <View style={styles.settingItem}>
                    <Image
                        source={require("../../assets/images/ellipse3.png")}
                        style={{ width: 40, height: 40, marginRight: 10 }}
                    />
                    <Text style={styles.settingText}>
                        Use Face ID to approve transactions
                    </Text>
                    <Switch
                        value={faceIdEnabled}
                        onValueChange={setFaceIdEnabled}
                        trackColor={{ false: "#767577", true: "#3599EA" }}
                    />
                </View>

                {/* Back up the wallet’s recovery phrase */}
                <View style={styles.settingItem}>
                    <Image
                        source={require("../../assets/images/ellipse2.png")}
                        style={{ width: 40, height: 40, marginRight: 10 }}
                    />
                    <Text style={styles.settingText}>
                        Back up the wallet’s recovery phrase
                    </Text>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </View>
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <TouchableOpacity
                    style={styles.modalBackground}
                    onPress={handleCloseModal}
                >
                    <TouchableOpacity
                        style={styles.modalContainer}
                        activeOpacity={1}
                    >
                        <Text style={styles.modalText}>
                            This is the Wallet Modal!
                        </Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.modalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>

         
        </View>
    );
}

function ActionButton({ icon, label }: any) {
    return (
        <View style={styles.actionButton}>
            <Ionicons name={icon} size={24} color="white" />
            <Text style={styles.actionLabel}>{label}</Text>
        </View>
    );
}

function SettingItem({
    icon,
    text,
    isSwitch,
    buttonText,
    isArrow,
    defaultValue,
}: any) {
    return (
        <View style={styles.settingItem}>
            <MaterialIcons name={icon} size={24} color="#7d7d7d" />
            <Text style={styles.settingText}>{text}</Text>
            {isSwitch ? (
                <Switch value={defaultValue} />
            ) : buttonText ? (
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            ) : isArrow ? (
                <Ionicons name="chevron-forward" size={24} color="#7d7d7d" />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        paddingTop: 60,
        paddingHorizontal: 20,
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
        backgroundColor: "#293342",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
    },
    walletText: {
        color: "white",
        fontSize: 16,
        marginHorizontal: 5,
    },
    settingsIcon: {
        padding: 8,
    },
    balance: {
        color: "white",
        fontSize: 40,
        textAlign: "center",
        marginVertical: 10,
    },
    address: {
        color: "#aaa",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 30,
    },
    actionsRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 30,
    },
    actionsRowCenter: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 30,
    },
    actionButton: {
        alignItems: "center",
    },
    actionLabel: {
        color: "white",
        marginTop: 5,
    },
    finishSetup: {
        backgroundColor: "#222C3A",
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    finishTitle: {
        color: "white",
        fontSize: 18,
        marginBottom: 20,
    },
    settingItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    settingText: {
        flex: 1,
        marginLeft: 10,
        color: "white",
        fontSize: 14,
    },
    button: {
        backgroundColor: "#3A404B",
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 6,
    },
    buttonText: {
        color: "white",
    },

    // Modal styles
    modalBackground: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        backgroundColor: Colors.dark.background,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalText: {
        color: "white",
        fontSize: 18,
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: "#333",
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 6,
    },
    modalButtonText: {
        color: "white",
    },

    // Touchable for opening modal
    walletTouchable: {
        marginTop: 20,
        alignItems: "center",
    },
});
