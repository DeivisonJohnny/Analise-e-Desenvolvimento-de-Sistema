import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderPerfil from '../../../components/headerPerfil';
import ListElement from '../../../components/listarDados';
import { getData } from '../../../backend/User'; 

interface ListRendaProps {}

const ListRenda: React.FC<ListRendaProps> = (props) => {
    const [despesas, setDespesas] = useState<any[]>([]); 

    useEffect(() => {
        const fetchDespesas = async () => {
            try {
                const data = await getData('despesas'); 
                setDespesas(data); 
                console.log(despesas)
            } catch (error) {
                console.error('Erro ao obter despesas:', error);
                
            }
        };

        fetchDespesas();
    }, []); 

    return (
        <View style={styles.body}>
            <HeaderPerfil />
            <View style={styles.main}>
                <Text style={styles.title}>Lista de Despesas</Text>
                <ListElement list={despesas} categoria={true} /> 
            </View>
        </View>
    );
};

export default ListRenda;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#182232',
        width: '100%',
        height: '100%',
    },
    main: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 15,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderColor: '#ffffff28',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 20,
        color: 'white',
    },
});
