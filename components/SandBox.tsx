import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native"

const SandBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text >One</Text>
            </View>
            <View style={styles.box2}>
                 <Text >Two</Text>
            </View>
            <View style={styles.box3}>
                 <Text >Three</Text>
            </View>
            <View style={styles.box4}>
                <Text >Four</Text>
            </View>
        </View>
    )
} 
export default SandBox
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center'
    },
    box1: {
        backgroundColor: 'green',
        flex: 1
    },
    box2: {
        backgroundColor: 'red',
        flex: 2
    },
    box3: {
        backgroundColor: 'blue',
        flex: 3
    }, 
    box4: {
        backgroundColor: 'pink',
        flex: 4
    }
})