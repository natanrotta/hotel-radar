import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';

function Atualizar({ navigation }) {
    const [hotel, setHotel] = useState(null);
    const [nomeHotel, setNomeHotel] = useState(null);
    const [nomeAtualizado, setNomeAtualizado] = useState(null)
    const [informacaoAtualizada, setInformacaoAtualizada] = useState(null)

    let hotelAtualizado = {
        nome: nomeAtualizado,
        informacao: informacaoAtualizada
    }

    async function carregaHotel() {
        const responseHotel = await api.get(`/buscaHotel?nome=${nomeHotel}`);
        setHotel(responseHotel.data)
    }

    async function atualizarHotel() {
        const responseHotel = await api.put(`/hotel?nomeAntigo=${hotel.nome}&nome=${hotelAtualizado.nome}&informacao=${hotelAtualizado.informacao}`);
        navigation.navigate('Resposta')
    }

    return (
        <View style={styles.container}>
            <>
                <TextInput
                    style={styles.inputInfo}
                    placeholder="Nome do Hotel"
                    value={nomeHotel}
                    onChangeText={(value) => setNomeHotel(value)}
                />
            </>
            <View
                style={{
                    borderBottomColor: '#999',
                    padding: 10,
                    width: 500,
                    marginLeft: 140,
                    marginTop: 20
                }}>
                {
                    hotel != null
                        ?
                        <>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}
                            >
                                Nome: {hotel.nome}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}
                            >
                                Informação: {hotel.informacao}
                            </Text>
                            <TextInput
                                style={styles.inputInfo}
                                placeholder={"Novo Nome"}
                                onChangeText={(value) => setNomeAtualizado(value)}
                            />
                            <TextInput
                                style={styles.inputInfo}
                                placeholder={"Nova Informação"}
                                onChangeText={(value) => setInformacaoAtualizada(value)} />
                            <TouchableOpacity
                                style={styles.Bottondeletar}
                                onPress={atualizarHotel}
                            >
                                <MaterialIcons
                                    name="cached"
                                    size={20}
                                    color='#FFF' />
                            </TouchableOpacity>
                        </>
                        :
                        <>
                        </>
                }
            </View>
            <View
                style={styles.bottom}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={carregaHotel}
                >
                    <Text
                        style={styles.submitButtonText}>
                        Carregar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Atualizar;

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
    inputInfo: {
        borderRadius: 5,
        marginTop: 20,
        margin: 15,
        height: 40,
        width: 350,
        padding: 6,
        borderColor: '#7a42f4',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "stretch"
    },
    Bottondeletar: {
        marginTop: 20,
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginLeft: 290
    }
});