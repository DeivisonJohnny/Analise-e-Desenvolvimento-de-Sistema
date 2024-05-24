import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface GastoProps {}

let listGasto = [
    {
        nome: 'Compras',
        valor: 556.5,
        categoria: 'casa'
    },
    {
        nome: 'Agua',
        valor: 60.0,
        categoria: 'casa'
    },
    {
        nome: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        nome: 'Gasolina',
        valor: 230.0,
        categoria: 'Transporte'
    },
    {
        nome: 'asdasd',
        valor: 556.5,
        categoria: 'casa'
    },
    {
        nome: 'asdasd',
        valor: 556.5,
        categoria: 'casa'
    }
]

const Gasto = (props: GastoProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gastos</Text>
            {listGasto.map((item, index) => (
                <View key={index} style={styles.item}>
                    <Text>Nome: {item.nome}</Text>
                    <Text>Valor: {item.valor}</Text>
                    <Text>Categoria: {item.categoria}</Text>
                </View>
            ))}
        </View>
    );
};

export default Gasto;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    item: {
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5
    }
});
