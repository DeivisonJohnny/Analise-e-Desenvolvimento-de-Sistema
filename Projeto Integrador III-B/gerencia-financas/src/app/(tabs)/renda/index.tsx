import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderPerfil from '../../../components/headerPerfil';
import ListElement from '../../../components/listarDados';
import { getData } from '../../../backend/User';

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

const ListRenda: React.FC<listRendaProps> = (props) => {
    const [data, setData] = React.useState<any[]>([]); // inicializa com um array vazio de qualquer tipo

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData('renda');
                setData(result); 
                console.log(result)
            } catch (error) {
                console.error('Erro ao obter dados:', error);
                // tratar erros aqui, se necessário
            }
        };

        fetchData();
    }, []); // executa somente uma vez no carregamento inicial (com [])

    return (
        <View style={styles.body}>
            <HeaderPerfil />
            <View style={styles.main}>
                <Text style={styles.title}>Lista de Renda</Text>
                <ListElement list={data} categoria={false} /> {/* passa os dados obtidos para o componente ListElement */}
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