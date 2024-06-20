
// import React from 'react';
// import { WebView, WebViewNavigation } from 'react-native-webview';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import qs from 'qs';
// import axios from 'axios';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RouteProp } from '@react-navigation/native';
// import { AppDispatch } from '@/store/store';
// import { useDispatch } from 'react-redux';
// import { signIn } from '@/store/authSlice';

// // Define types for navigation and route props
// type RootStackParamList = {
//   Home: undefined;
//   Auth: undefined;
// };

// type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;
// type AuthScreenRouteProp = RouteProp<RootStackParamList, 'Auth'>;

// type Props = {
//   navigation: AuthScreenNavigationProp;
//   route: AuthScreenRouteProp;
// };

// const AuthScreen: React.FC<Props> = ({ navigation }) => {
// const dispatch: AppDispatch = useDispatch()
//   const clientId = 'YOUR_CLIENT_ID';
//   const clientSecret = 'YOUR_CLIENT_SECRET';
//   const redirectUri = 'YOUR_REDIRECT_URI';
//   const scope = 'user-read-private user-read-email';

//   const getAccessToken = async (code: string) => {
//     try {
//       const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({
//         grant_type: 'authorization_code',
//         code: code,
//         redirect_uri: redirectUri,
//         client_id: clientId,
//         client_secret: clientSecret,
//       }), {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });

//       await AsyncStorage.setItem('access_token', response.data.access_token);
//       dispatch(signIn(''));
//     //   navigation.navigate('Home');
//     } catch (error) {
//       console.error('Error getting access token', error);
//     }
//   };

//   const handleUrlChange = (event: WebViewNavigation) => {
//     const { url } = event;
//     if (url.startsWith(redirectUri)) {
//       const code = new URL(url).searchParams.get('code');
//       if (code) {
//         getAccessToken(code);
//       }
//     }
//   };

//   return (
//     <WebView
//       source={{ uri: `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}` }}
//       onNavigationStateChange={handleUrlChange}
//     />
//   );
// };

// export default AuthScreen;
import UserAPI from "@/Network/UserAPI"
import { signIn } from "@/store/authSlice"
import { AppDispatch } from "@/store/store"
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import { useDispatch } from "react-redux"


export default function Login() {
    const dispatch: AppDispatch = useDispatch()
    const handleTap = () => {
        // try {
        //     const data = await UserAPI.requestLogin();
        //     console.log("data login là", data);
        //     // dispatch(signIn(data.user));
        // } catch (e) {
        //     console.error('Error fetching data', e);
        // }
       dispatch(signIn(''));
    };
    
    return (
      <View style={styles.container}>
            <Image source={require('@/assets/images/Logo svg 1.png')}/>
            <TouchableOpacity onPress={handleTap}>
                <View style = {styles.text}>
                    <Text>Login Page</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#0d5384',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        padding: 10,
        backgroundColor: 'green'
    }
})
