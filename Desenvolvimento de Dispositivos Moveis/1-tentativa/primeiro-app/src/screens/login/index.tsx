import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'




export interface LoginScreenProps {

}

export function LoginScreen(props: LoginScreenProps) {

    return (
        <ImageBackground style={styles.background} source={require('../../assets/imgs/background-android.png')}>
            <View style={styles.main}>
                <Text style={styles.label} >
                    Acesso do usuario
                </Text>
                <Input placeholder='Digite seu email' leftIcon={{ name: 'person', color: 'white' }} inputStyle={{ color: 'white' }} inputContainerStyle={styles.inputs} />

                <Input leftIcon={{ name: 'lock', color: 'white' }} placeholder='Digite sua senha' inputStyle={{ color: 'white' }} secureTextEntry={true} inputContainerStyle={styles.inputs} />

                <TouchableOpacity onPress={() => {console.log('Teste'); alert('Olá mundo')}} style={styles.btnAcesso}>
                    <Text style={{ fontSize: 18 }}>
                        Acessar
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: 'white', textDecorationLine: 'underline', fontSize: 11 }}>
                    Não possui conta? Clique aqui para se cadastrar
                </Text>

            </View>

        </ImageBackground>

    )

}


const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    // header: {
    //     display: 'flex',
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: 47,
    // },

    title: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        textAlign: 'center',
        position: 'absolute',
        top: 20,
        left: 0,
        fontSize: 20,
    },

    main: {
        position: 'absolute',
        top: '30%',
        height: 'auto',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        width: '100%',
    },

    label: {
        fontSize: 35,
        color: 'white',
    },

    btnAcesso: {
        width: '90%',
        padding: 15,
        fontSize: 25,
        backgroundColor: 'lightblue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },

    inputs: {
        backgroundColor: 'white',
        opacity: 0.5,
        borderRadius: 50,
        padding: 5,
    }

})
