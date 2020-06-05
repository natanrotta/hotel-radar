import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';

function Inserir({ navigation }) {
    const [nomeHotel, setNomeHotel] = useState(null);
    const [infoHotel, setInfoHotel] = useState(null);

    let hotel = {
        nome: nomeHotel,
        informacao: infoHotel
    }

    async function salvarDados() {
        const responseApi =
            await api.post('/hotel',
                { "nome": hotel.nome, "informacao": hotel.informacao });
        setInfoHotel('')
        setNomeHotel('')
        navigation.navigate('Resposta')
    }

    return (
        <View style={styles.container}>
            <>
                <Text style={styles.text}>Nome Hotel</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    placeholderTextColor="#9a73ef"
                    value={nomeHotel}
                    onChangeText={(value) => setNomeHotel(value)}
                />
            </>
            <>
                <Text style={styles.text}>Informações</Text>
                <TextInput
                    style={styles.inputInfo}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    placeholderTextColor="#9a73ef"
                    value={infoHotel}
                    onChangeText={(value) => setInfoHotel(value)}
                />
            </>
            <TouchableOpacity onPress={salvarDados} style={styles.submitButton}>
                <Text style={styles.submitButtonText}> Salvar </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Inserir;

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    text: {
        fontSize: 15,
        marginLeft: 18,
        color: '#7a42f4'
    },
    input: {
        borderRadius: 5,
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "stretch",
        padding: 6,

    },
    inputInfo: {
        borderRadius: 5,
        margin: 15,
        height: 200,
        padding: 6,
        borderColor: '#7a42f4',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "stretch"

    },
    submitButton: {
        backgroundColor: '#7a42f4',
        alignItems: 'center',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 10,
        marginBottom: 36
    },
    submitButtonText: {
        color: 'white'
    }
});