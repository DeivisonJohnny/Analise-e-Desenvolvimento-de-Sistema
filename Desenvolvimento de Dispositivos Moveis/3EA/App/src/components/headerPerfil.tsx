import { router } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

interface HeaderPerfilProps { }

const HeaderPerfil = (props: HeaderPerfilProps) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.boxNameUser}>
                <Image
                    source={require('../assets/img/foto-perfil.jpg')}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nameUser}>Deivison Johnny</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{gap: 0, flexDirection: 'column', }}>

                <Icon
                    name='log-out-outline'
                    type='ionicon'
                    color='white'
                    onPress={()=> router.replace('/')}
                />
            </TouchableOpacity>

        </View>
    );
};

export default HeaderPerfil;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#182232',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    fotoPerfil: {
        width: 43,
        height: 43,
        padding: 5,
        borderRadius: 25, // 50 -> 25, metade do tamanho da imagem
        borderWidth: 2.4,
        borderColor: 'white',
    },
    boxNameUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameUser: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'white' // Adicionar margem entre a imagem e o texto
    },
});
