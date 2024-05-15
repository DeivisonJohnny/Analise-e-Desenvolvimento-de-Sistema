// import { LinearGradient } from 'expo-linear-gradient'
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native';

interface LoginProps { }

const Login = (props: LoginProps) => {
    return (
        <View style={styles.body}>

            {/* Header Login */}
            <ImageBackground
                source={require('../../assets/img/background-login3.jpg')}
                style={styles.header}
                imageStyle={{ width: '100%', height: '100%' }}>

                {/* Gradiente do background header */}
                <LinearGradient
                    colors={['#00000069', '#151F30']}
                    style={styles.bgGradient}>

                    <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold', position: 'relative', bottom: 100 }}>Acessar suas finanças</Text>

                </LinearGradient>

            </ImageBackground>

            {/* Main  */}
            <View style={styles.main}>

                <View style={styles.boxInputs}>
                    <View style={styles.boxLabel}>

                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>*</Text>
                        <Text style={styles.label}>Email</Text>
                    </View>


                    <TextInput
                        placeholder='devprogrammer@code.com'
                        style={styles.inputs}
                        placeholderTextColor={'gray'} />
                    <Text style={styles.requiredText}>O campo deve ser preenchido</Text>

                </View>

                <View style={styles.boxInputs}>
                    <View style={styles.boxLabel}>

                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>*</Text>
                        <Text style={styles.label}>Senha</Text>
                    </View>
                    <TextInput
                        placeholder='********'
                        style={styles.inputs}
                        placeholderTextColor={'gray'}
                        secureTextEntry
                    />
                    <Text style={styles.requiredText}>O campo deve ser preenchido</Text>
                </View>


                <View style={styles.boxInputs}>
                    <TouchableOpacity style={styles.btnAcessar} onPress={TesteBtn} >
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Acessar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );
};

function TesteBtn() {

}

export default Login;

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '45%',
        width: '100%',
    },

    bgGradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
    },

    main: {
        width: '100%',
        height: '65%',
        backgroundColor: '#151F30',
        alignItems: 'center',
        flexDirection: 'column'
    },

    boxInputs: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 5
    },
    boxLabel: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        paddingLeft: 5
    },

    label: {
        color: 'white',
        fontSize: 15,

    },

    inputs: {
        backgroundColor: '#ffffff11',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#c7ffed18',
        borderRadius: 6,
        color: 'white'
    },

    requiredText: {
        color: 'red',
        fontSize: 11,
        fontWeight: 'bold',
        paddingLeft: 5
    },

    btnAcessar: {
        backgroundColor: '#008F8C',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }



});
