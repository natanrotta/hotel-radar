import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import api from '../services/api';

function ListarHotel({ navigation }) {
    const [hotel, setHotel] = useState([]);
    const nomeHotel = navigation.getParam('nomeHotel');

    async function carregaHotel() {
        const responseHotel = await api.get(`/buscaHotel?nome=${nomeHotel}`);

        if (responseHotel.data.nome != null) {
            setHotel(responseHotel.data)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ borderBottomColor: '#999', padding: 10, width: 500, marginLeft: 100 }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#333' }}>
                    {hotel.nome}
                </Text>
                <Text style={{ fontSize: 18, color: '#999' }}>
                    {hotel.informacao}
                </Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={carregaHotel}
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}> Buscar </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default ListarHotel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        alignItems: 'center',
        padding: 10,
        margin: 15,
        height: 40,
        width: 300,
        borderRadius: 10
    },
    submitButtonText: {
        color: 'white',
        fontSize: 15
    },
    itemNome: {
        marginTop: 24,
        padding: 30,
        fontSize: 24
    },
    iteminfo: {
        marginTop: -50,
        padding: 30,
        fontSize: 16
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
});