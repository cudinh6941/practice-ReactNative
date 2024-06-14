import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Đảm bảo bạn đã cài đặt và import Ionicons từ thư viện Expo Icons
import { Image } from 'react-native';
const CustomIcon = ({ size, color, imageSource, ...rest} : { size: number; color: string; imageSource: any }) => {
    return (
      <>
      {/* <Ionicons size={size} color={color} {...rest} /> */}
      <Image source={imageSource} style={{marginTop: 30, left: 0, width: size, height: size }} />
  </>
    )
  }
export default CustomIcon