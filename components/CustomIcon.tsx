import React from 'react';
import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

interface CustomIconProps {
    size: number;
    color: string;
    imageSource: ImageSourcePropType;
}

const CustomIcon: React.FC<CustomIconProps> = ({ size, color, imageSource }) => {
    return (
        <View style={styles.iconContainer}>
            <Image source={imageSource} style={{ width: size, height: size }} />
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CustomIcon;
