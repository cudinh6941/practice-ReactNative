import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import AlbumItem from '@/components/HomeHeaderItem';

export default function HomeScreen() {
  const icons = [
    { size: 25, color: '', imageSource: require('@/assets/images/icon/Notification.png') },
    { size: 25, color: '', imageSource: require('@/assets/images/icon/Recents.png') },
    { size: 25, color: '', imageSource: require('@/assets/images/icon/Settings.png') }
  ];

  const data = [
    { title: 'Album 1', imageSource: require('@/assets/images/Loved.png') },
    { title: 'Album 2', imageSource: require('@/assets/images/Loved.png') },
    { title: 'Album 3', imageSource: require('@/assets/images/Loved.png') },
    { title: 'Album 4', imageSource: require('@/assets/images/Loved.png') },
    { title: 'Album 5', imageSource: require('@/assets/images/Loved.png') },
    { title: 'Album 6', imageSource: require('@/assets/images/Loved.png') }
  ];

  return (
    <SafeAreaView style={styles.container}>
        <Header title={'Good evening'} icons={icons} isHideIcon={false}/>
        <ScrollView>
          <View style={styles.albumContainer}>
            {data.map((item, index) => (
              <TouchableOpacity onPress={()=>{
                console.log(item)
              }}>
                <View key={index.toString()} style={styles.albumItem}>
                  <AlbumItem title={item.title} imageSource={item.imageSource} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // paddingHorizontal: 10
  },
  albumContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  albumItem: {
    width: '50%', // 48% để hiển thị 2 cột, có thể điều chỉnh theo ý muốn
    marginBottom: 10,
  },
});
