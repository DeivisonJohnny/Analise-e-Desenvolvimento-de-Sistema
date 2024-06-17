import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Share } from 'react-native';
import HeaderPerfil from '../../../components/headerPerfil';
import { Icon } from 'react-native-elements';
import { getQtdData } from '../../../backend/User'; // Importe sua função getQtdData da API

interface ResumoProps {
    nuDespesas: number,
    nuRenda: number,
    sobras: number
}

const Resumo: React.FC<ResumoProps> = (props) => {
    const [nuDespesas, setNuDespesas] = useState<number>(0);
    const [nuRenda, setNuRenda] = useState<number>(0);
    const [sobras, setSobras] = useState<number>(0.0);

    useEffect(() => {
        fetchDadosResumo();
    }, []); // Executa uma vez no carregamento inicial

    const fetchDadosResumo = async () => {
        try {
            const dadosDespesas = await getQtdData('despesas'); // Supõe-se que getQtdData('despesas') busca os dados da API
            const dadosRenda = await getQtdData('renda'); // Supõe-se que getQtdData('renda') busca os dados da API

            setNuDespesas(dadosDespesas.nuDespesas);
            setNuRenda(dadosRenda.nuRenda);
            setSobras(dadosRenda.sobras);
        } catch (error) {
            console.error('Erro ao buscar dados de resumo:', error);
        }
    };

    function shareResume() {
        Share.share({
            message: `Quantidade de despesas: ${nuDespesas}
                      Quantidade de Renda: ${nuRenda}
                      Sobras mensal: R$ ${sobras}
            `,
        });
    }

    return (
        <View style={styles.body}>
            <HeaderPerfil />
            <TouchableOpacity style={styles.btnIconShare} onPress={shareResume}>
                <Icon name='share-social' type='ionicon' color={'white'} size={30} />
            </TouchableOpacity>

            <View style={styles.main}>
                <View style={styles.boxCount}>
                    <View style={styles.itemCount}>
                        <Text style={[styles.titleItem, { color: 'red' }]}>Despesas</Text>
                        <Text style={styles.nuCount}>{nuDespesas}</Text>
                    </View>
                    <View style={styles.itemCount}>
                        <Text style={[styles.titleItem, { color: 'lightgreen' }]}>Renda</Text>
                        <Text style={styles.nuCount}>{nuRenda}</Text>
                    </View>
                </View>

                <View style={styles.boxSobra}>
                    <Text style={[styles.nuCount, { fontSize: 33, fontWeight: 'bold' }]}>
                        Sobras mensais
                    </Text>
                    <Text style={[styles.nuCount, { fontSize: 36, fontWeight: 'bold', color: '#009cda' }]}>
                        R$ {sobras}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Resumo;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#182232',
        width: '100%',
        height: '100%',
    },
    main: {
        width: '100%',
        padding: 10,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ffffff28',
        position: 'relative'
    },
    btnIconShare: {
        position: 'absolute',
        right: 25,
        top: 20,
        zIndex: 1, // Garante que o botão esteja acima do restante do conteúdo
    },
    boxCount: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        height: '50%',
    },
    itemCount: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    titleItem: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    nuCount: {
        fontSize: 27,
        color: 'white',
    },
    boxSobra: {
        width: '100%',
        height: '50%',
        marginTop: 20,
        paddingLeft: 20,
    },
});
