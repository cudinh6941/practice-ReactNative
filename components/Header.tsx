import {Text, View, StyleSheet, TouchableOpacity, ImageSourcePropType} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomIcon from './CustomIcon'
interface IconProps {
    size: number
    color: string
    imageSource: ImageSourcePropType
}
interface HeaderProps {
    title: string;
    icons: IconProps[];
    isHideIcon: boolean
}
const Header: React.FC<HeaderProps> = ({ title, icons, isHideIcon }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <View>
                {!isHideIcon && (
                       <View style={styles.viewIcon}>
                       {icons.map((icon, index) => (
                           <TouchableOpacity key={index}>
                               <CustomIcon size={icon.size} color={icon.color} imageSource={icon.imageSource} />
                           </TouchableOpacity>
                       ))}
                   </View>
                )}
            </View>
        </View>
    );
};
export default Header
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        color: 'white',
        fontSize: 30,
      //  fontFamily: 'circular-std'
    },
    viewIcon: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 25
    }
})
