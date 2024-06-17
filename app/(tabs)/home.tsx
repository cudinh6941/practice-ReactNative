import CustomIcon from '@/components/CustomIcon';
import Header from '@/components/Header';
import { StyleSheet,View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  const icons = [
    { size: 25, color: '', imageSource: require('@/assets/images/icon/Notification.png') },
    { size: 25, color: '', imageSource: require('@/assets/images/icon/Notification.png') },
    { size: 25, color: '', imageSource: require('@/assets/images/icon/Notification.png') }
];
  return (
    <SafeAreaView style={styles.container} >
      <Header title={'Good evening'} icons={icons} isHideIcon={false}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});