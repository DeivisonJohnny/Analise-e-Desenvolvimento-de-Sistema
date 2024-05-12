import React from "react";
import { View, Text, Button, ImageBackground, TextInput, StyleSheet } from 'react-native'


const Index = () => {
    return (
        <ImageBackground source={require('../assets/imgs/bgandroid.png')} style={styles.body}>

            <View style={styles.header}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Calculadora de IMC</Text>
            </View>

            <View style={styles.main}>
                <TextInput style={styles.inputs} placeholder="altura"></TextInput>
                <TextInput style={styles.inputs} placeholder="peso"></TextInput>
                <Button title="Calcular" ></Button>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },

    header: {
        backgroundColor: 'lightblue',
        width: '100%',
        paddingVertical: 10,
        display: 'flex',
        alignItems: 'center'
    },

    main: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },

    inputs: {
        paddingVertical: 10,
        paddingLeft: 20,
        backgroundColor: '#ffffff52',
        borderRadius: 50,
        width: '95%'

    }

})


export default Index;