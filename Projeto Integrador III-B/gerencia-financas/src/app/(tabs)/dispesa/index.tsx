import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderPerfil from '../../../components/headerPerfil';
import ListElement from '../../../components/listarDados';

interface listRendaProps { }
const listlistElement = [
    {
        titulo: 'Compras',
        valor: 556.5,
        categoria: 'casa'
    },
    {
        titulo: 'Agua',
        valor: 60.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Gasolina',
        valor: 230.0,
        categoria: 'Transporte'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        titulo: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
];

const listRenda = (props: listRendaProps) => {
    return (
        <View style={styles.body}>
            <HeaderPerfil/>


            <View style={styles.main}>
            <Text style={styles.title}>
                Lista de dispesas
            </Text>
                <ListElement list={listlistElement} categoria={false}></ListElement>
            </View>
        </View>
    );
};

export default listRenda;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#182232',
        width: '100%',
        height: '100%',
    },

    main: {
        flexDirection: 'column',
        // alignItems: ';',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 15,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderColor: '#ffffff28'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 20,
        color: 'white'
    }
});
