import { View, Text, StyleSheet } from "react-native";

export default function BrowserScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Browser Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        color: "#333",
    },
});
