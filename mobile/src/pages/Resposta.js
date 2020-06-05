import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Resposta() {

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Sucesso!
            </Text>
        </View>
    );
}

export default Resposta;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 20,
    }
});