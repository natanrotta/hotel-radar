import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

import api from '../services/api';

function Listagem({ navigation }) {
    const [hoteis, setHoteis] = useState([]);

    async function carregaHoteis() {

        const responseHoteis = await api.get('/hotel');

        setHoteis(responseHoteis.data);
    }

    return (
        <View style={styles.container}>

            {hoteis.length > 0 || hoteis != null ?
                <FlatList
                    keyExtractor={(item) => item._id}
                    data={hoteis}
                    renderItem={({ item }) => (

                        <View style={{ borderBottomColor: '#999', padding: 10, width: 500 }}>
                            <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#333' }}>
                                {item.nome}
                            </Text>
                            <Text style={{ fontSize: 18, color: '#999' }}>
                                Informação: {item.informacao}
                            </Text>
                        </View>

                    )} />
                :
                <Text style={{ fontSize: 20, color: 'red' }}>
                    Nenhum Hotel encontrado!
                </Text>
            }

            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={carregaHoteis}
                    style={styles.submitButton}>
                    <Text style={styles.submitButtonText}> Carregar </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Listagem;

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

    listItem: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        borderBottomWidth: 2,
        borderBottomColor: '#999'
    }
});


