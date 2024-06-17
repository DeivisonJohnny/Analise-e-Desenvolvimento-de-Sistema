import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderPerfil from '../../../components/headerPerfil';
import ListElement from '../../../components/listarDados';
import { getData } from '../../../backend/User'; // supondo que esta seja a função que busca os dados

interface ListRendaProps {}

const ListRenda: React.FC<ListRendaProps> = (props) => {
    const [despesas, setDespesas] = useState<any[]>([]); // estado para armazenar os dados das despesas

    useEffect(() => {
        const fetchDespesas = async () => {
            try {
                const data = await getData('despesas'); // busca os dados da API
                setDespesas(data); // atualiza o estado com os dados obtidos
                console.log(despesas)
            } catch (error) {
                console.error('Erro ao obter despesas:', error);
                // Trate o erro aqui, se necessário
            }
        };

        fetchDespesas();
    }, []); // executa somente uma vez no carregamento inicial (com [])

    return (
        <View style={styles.body}>
            <HeaderPerfil />
            <View style={styles.main}>
                <Text style={styles.title}>Lista de Despesas</Text>
                <ListElement list={despesas} categoria={true} /> {/* Passa os dados de despesas para o componente ListElement */}
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
