import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';


import * as Animatable from 'react-native-animatable'

import * as Yup from 'yup'



const Login = () => {

    const handleLogin = ({ email, senha }: any) => {

        console.log(email)
        console.log(senha)

    }


    return (
        <View style={styles.body}>

            {/*BOX Header Login */}
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
            <ScrollView style={styles.main}>

                <Formik
                    initialValues={{ email: '', senha: '' }}
                    onSubmit={handleLogin}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Digite um email válido').required('o campo deve ser preenchido'),
                        senha: Yup.string().min(8, 'O este campo deve ter ao menos 8 caracteres').required('O campo deve ter preenchido')
                    })}
                >
                    {({ errors, handleChange, handleSubmit }) => (

                        <>
                            <View style={styles.boxInputs}>
                                <View style={styles.boxLabel}>
                                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>*</Text>
                                    <Text style={styles.label}>Email</Text>
                                </View>

                                <TextInput
                                    placeholder='devprogrammer@code.com'
                                    style={styles.inputs}
                                    placeholderTextColor={'gray'}
                                    onChangeText={handleChange('email')}

                                />


                                {errors.email && <Animatable.Text animation="fadeInLeft" duration={700} style={styles.errorText}>{errors.email}</Animatable.Text>}

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
                                    onChangeText={handleChange('senha')}
                                />
                                {errors.senha && <Animatable.Text animation="fadeInLeft" duration={650} style={styles.errorText} >{errors.senha}</Animatable.Text>}
                            </View>

                            <View style={styles.boxInputs}>
                                <TouchableOpacity style={styles.btnAcessar} onPress={() => handleSubmit()}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Acessar</Text>
                                </TouchableOpacity>
                            </View>


                        </>
                    )}

                </Formik>


            </ScrollView>
            {/* <View style={styles.footer}>
                <View style={styles.boxIcons}>
                    <Ionicons name="logo-linkedin" size={24} color="black" />
                    <Ionicons name="logo-instagram" size={24} color="black" />
                    <Ionicons name="logo-github" size={24} color="black" />
                    <Ionicons name="logo-whatsapp" size={24} color="black" />
                </View>

                <View>
                    <Text>Dev Johnny</Text>
                </View>
            </View> */}
        </View>
    );
};



const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#151F30',
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '40%',
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
        
        backgroundColor: '#151F30',
        flexDirection: 'column'
    },

    boxInputs: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 5,
        overflow: 'hidden'
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
    },


    errorText: {
        color: 'red',
        fontSize: 11,
        fontWeight: 'bold',
        paddingLeft: 5
    },

    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // height: '5%',
        paddingVertical: 10,
        width: '100%',
        backgroundColor: 'red'
    },

    boxIcons: {
      flexDirection: 'row',
      gap: 10
    },
});

export default Login;