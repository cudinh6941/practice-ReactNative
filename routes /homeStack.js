import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../screens/DetailScreen'

const screens = {
    Home: {
        screen: DetailScreen
    }, 
    Detail: {
        screen: DetailScreen
    }
    
}
const HomeStack = createNativeStackNavigator(screens)
export default createAppContainer