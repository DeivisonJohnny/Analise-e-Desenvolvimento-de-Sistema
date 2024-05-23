import { Form, Formik } from "formik"
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native"
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from "react";
import * as Yup from 'yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Login2 = () => {

    const [result, setResult] = useState('negado')

    const handleLogin = ({ email, senha }: any) => {

        

        if (email.trim() == 'deivison' && senha.trim() == '123456') {
            setResult('logado')
        } else {
            setResult('negado')
        }

    }


    return (

        <View style={styles.body}>
            {/*BOX Header Login */}


            <ImageBackground
                source={require('../../assets/img/bgLogin.jpg')}
                style={styles.header}
                imageStyle={{ width: '100%', height: '100%' }}>

                <LinearGradient
                    colors={['#00000069', '#151F30']}
                    style={styles.bgGradient}>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold', position: 'relative', bottom: 100 }}>Acessar suas finanças</Text>
                </LinearGradient>
            </ImageBackground>


            <View style={styles.main}>
                <Formik
                    initialValues={{ email: '', senha: '' }}
                    onSubmit={handleLogin}
                    validationSchema={Yup.object({
                        email: Yup.string().min(3, 'Deve ter ao menos 3 caracteres').email('Digite um email válido').required('Campo obrigátorio'),
                        senha: Yup.string().min(6, 'Deve ter ao menos 6 caracteres').required('Campo obrigatório')
                    })}
                >
                    {({ errors, handleChange, handleSubmit }) => (
                        <>

                            <KeyboardAwareScrollView style={{width: '100%'}}>

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
                                    {errors.senha && <Animatable.Text animation="fadeInLeft" duration={700} style={styles.errorText}>{errors.senha}</Animatable.Text>}


                                </View>

                                <View style={styles.boxInputs}>
                                    <TouchableOpacity style={styles.btnAcessar} onPress={() => handleSubmit()} >
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Acessar</Text>
                                    </TouchableOpacity>
                                </View>


                            </KeyboardAwareScrollView>

                        </>
                    )}

                </Formik>

            </View>



        </View>
    )
}

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

});


export default Login2



// FUNCIONANDO 