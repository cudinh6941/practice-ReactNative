import { View, Text, TouchableOpacity,StyleSheet } from "react-native"

const TabView = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style = {{flex: 1, alignItems:'center'}}>
                    <View >
                        <Text style = {styles.text}>Hôm nay</Text>
                    </View>
            </TouchableOpacity>
            <View style={{width: 1, height: 30, backgroundColor: 'gray'}} />
            <TouchableOpacity style = {{flex: 1, alignItems:'center'}}>
                <View >
                    <Text >Sắp tới</Text>
                </View>
            </TouchableOpacity >
            <View style={{width: 1, height: 30, backgroundColor: 'gray'}} />
            <TouchableOpacity style = {{flex: 1, alignItems:'center'}}>
                <View>
                    <Text style ={styles.text}>Lịch sử</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#8db8d6',
        height: 40,
        flex: 1,
        // paddingHorizontal: 25
    },
    text: {
    }
})
export default TabView