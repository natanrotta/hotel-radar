import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';


function Main({ navigation }) {

    const [currentRegion, setCurrentRegion] = useState(null);
    const [nomeHotel, setNomeHotel] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }
        loadInitialPosition();
    }, []);

    //Cada vez que o usuário mover o mapa, ele atualiza minha região;
    //O onRegionChage sempre manda uma region, sendo assim basta receber ela no método;
    function handleRegionChanged(region) {
        setCurrentRegion(region)
    }

    if (!currentRegion) {
        return null
    }

    return (
        <>
            <MapView
                onRegionChange={handleRegionChanged}
                initialRegion={currentRegion}
                style={styles.map}
            />
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar Hotel..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    onChangeText={(value) => setNomeHotel(value)}
                />
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ListarHotel', { nomeHotel })
                }} style={styles.loadButton}>
                    <MaterialIcons name="search" size={20} color='#FFF' />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Listagem')
            }} style={styles.buscarHoteis}>
                <MaterialIcons name="list" size={20} color='#FFF' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Inserir')
            }} style={styles.adicionarHotel}>
                <MaterialIcons name="add" size={20} color='#FFF' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Deletar')
            }} style={styles.deletarHotel}>
                <MaterialIcons name="delete" size={20} color='#FFF' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Atualizar')
            }} style={styles.atualizarHotel}>
                <MaterialIcons name="cached" size={20} color='#FFF' />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 4,
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    adicionarHotel: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 160
    },
    buscarHoteis: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 100
    },
    deletarHotel: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 220
    },
    atualizarHotel: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 280
    },
})

export default Main;