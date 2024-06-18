import {View, Image, Text, ImageSourcePropType, StyleSheet, Dimensions} from 'react-native'
interface ItemProps {
    title: string
    imageSource: ImageSourcePropType
}
const AlbumItem: React.FC<ItemProps> = ({title, imageSource}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSource} resizeMode='contain' />
            <View style={styles.viewText}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    width: Dimensions.get('window').width / 2 - 10, // Đặt chiều rộng cố định cho item
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    },
    viewText: {
        flex: 1,
        // borderRadius: 5,
        backgroundColor: '#444444',
        height: 60,
    },
    image: {
        // flex: 1,
        height: 60
    },
    text: {
        paddingLeft: 8,
        paddingTop: 18,
        // paddingRight: 35,
        // paddingVertical: 30,
        alignItems: 'center',
        color: 'white',
        fontSize: 20
    }
})

export default AlbumItem