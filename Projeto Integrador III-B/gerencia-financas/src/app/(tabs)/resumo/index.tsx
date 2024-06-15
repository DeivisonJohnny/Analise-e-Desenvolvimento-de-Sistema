import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderPerfil from '../../../components/headerPerfil';
import { color } from '@rneui/base';

interface resumoProps { }

const resumo = (props: resumoProps) => {
    return (
        <View style={styles.body}>
            <HeaderPerfil />
            <View style={styles.main}>

                <View style={styles.boxCount}>

                    <View style={styles.itemCount}>
                        <Text style={[styles.titleItem, {color:  'red'}]}>Dispesas</Text>
                        <Text style={styles.nuCount}>23</Text>
                    </View>

                    <View style={styles.itemCount}>
                        <Text style={[styles.titleItem, {color: 'lightgreen'}]}>Renda</Text>
                        <Text style={styles.nuCount}>23</Text>
                    </View>

                </View>
                <View style={styles.boxSobra}>
                    <Text style={[styles.nuCount, {fontSize: 33, fontWeight: 'bold'}]}>
                        Sobras mensais
                    </Text>
                    <Text style={[styles.nuCount, {fontSize: 36, fontWeight: 'bold', color: '#009cda'}]}>
                        R$ 223,00
                    </Text>
                </View>

            </View>
        </View>
    );
};

export default resumo;

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
        borderColor: '#ffffff28'
        // backgroundColor: 'red',
        // justifyContent: 'center',
        // gap: 30
    },

    boxCount: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        height: '50%'
    },

    itemCount: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },

    titleItem: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'

    },

    nuCount: {
        fontSize: 27,
        color: 'white'
    },


    boxSobra: {
        width: '100%',
        height: '50%',
        gap: 20,
        paddingLeft: 20,
    },



});
