import * as React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

export interface CalculadoraProps {
}

export function Calculadora(props: CalculadoraProps) {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={{fontSize: 20}}>Calculadora</Text>
            </View>

            <View style={styles.boxInput}>

                <Text>Valor 1:</Text>
                <TextInput style={styles.inputs} placeholder='Digite um valor' placeholderTextColor="lightgray"></TextInput>


                <Text>Valor 2:</Text>
                <TextInput style={styles.inputs} placeholder='Digite um valor' placeholderTextColor="lightgray"></TextInput>


            </View>
            <View style={styles.boxButtons}>

                <Button title='+'  />
                <Button title='-'  />
                <Button title='/'  />
                <Button title='X'  />
                <Button title='C'  color="red" />
            </View>
            <View style={styles.boxResult}>

                <Text>Resultado</Text>
                <Text>X</Text>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    body: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'

    },

    header: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        width: '100%'
    },

    boxInput: {
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 5,
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 20,
    },

    inputs: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
    },

    boxButtons: {
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

    boxResult: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 20,
        marginVertical: 20
    }

});