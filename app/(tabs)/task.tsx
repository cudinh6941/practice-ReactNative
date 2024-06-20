import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Image, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "@/store/store";
import { signIn, signOut } from "@/store/authSlice";
import UserAPI from "@/Network/UserAPI";

type ItemData = {
    id: number;
    title: string;
    url: string;
};

const Task: React.FC = () => {
    console.log('Task re-rendered');
    const dispatch: AppDispatch = useDispatch();
    const [data, setData] = useState<ItemData[]>([]);
    const [loading, setLoading] = useState(true);

    const handleTap = () => {
        dispatch(signOut());
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: any = await UserAPI.requestLogin();
                setData(response);
            } catch (e) {
                console.error('Error fetching data', e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const renderItem = ({ item }: { item: ItemData }) => (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image} source={{ uri: item.url }} resizeMode='cover' />
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size='large' color='gray' />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>TASK SCREEN</Text>
            <TouchableOpacity style={styles.button} onPress={handleTap}>
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={10}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: 'green',
        marginBottom: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    list: {
        width: '100%',
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default Task;
