import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';
import { insertRenda } from '../../../backend/User';
import { router } from 'expo-router';

interface AddRendaProps { }

const AddRenda = (props: AddRendaProps) => {

  const rendaSubmit = async ({ nome, valor }: any) => {
    const result = await insertRenda(nome, valor)

    console.log(result)

    if(result.response_code == 200) {
      router.replace('../home/')
    } 
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Adicionar Renda</Text>
      </View>

      <ScrollView style={{ width: '100%', height: '100%' }} contentContainerStyle={{ height: '100%' }}>
        <Formik
          initialValues={{ nome: '', valor: 0 }}
          onSubmit={rendaSubmit}
          validationSchema={Yup.object({
            nome: Yup.string().min(3, 'O campo deve ter ao menos 3 caracteres').required('O campo deve ser preenchido'),
            valor: Yup.number().required('O campo deve ser preenchido'),
          })}
        >
          {({ errors, handleChange, handleSubmit, values }) => (
            <>
              <View style={styles.boxForm}>
                <View style={styles.boxInputs}>
                  <View style={styles.boxLabel}>
                    <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 17 }}>*</Text>
                    <Text style={styles.label}>Título da renda</Text>
                  </View>
                  <TextInput
                    style={styles.inputs}
                    onChangeText={handleChange('nome')}
                    value={values.nome}
                  />
                  {errors.nome && <Animatable.Text animation="fadeInLeft" duration={700} style={styles.errorText}>{errors.nome}</Animatable.Text>}
                </View>

                <View style={styles.boxInputs}>
                  <View style={styles.boxLabel}>
                    <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 17 }}>*</Text>
                    <Text style={styles.label}>Valor</Text>
                  </View>
                  <TextInput
                    style={styles.inputs}
                    keyboardType='numeric'
                    onChangeText={handleChange('valor')}
                    value={values.valor.toString()}
                  />
                  {errors.valor && <Animatable.Text animation="fadeInLeft" duration={700} style={styles.errorText}>{errors.valor}</Animatable.Text>}
                </View>

                <View style={styles.boxInputs}>
                  <TouchableOpacity style={styles.btnInsert} onPress={handleSubmit}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', letterSpacing: 1 }}>Adicionar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default AddRenda;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#182232',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    height: '20%',
    justifyContent: 'center',
    paddingLeft: 10,
    width: '100%',
  },
  titleHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 15,
  },
  boxForm: {
    width: '100%',
    height: '90%',
    paddingHorizontal: 20,
    gap: 10,
    justifyContent: 'space-around',
  },
  boxLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  boxInputs: {
    gap: 10,
  },
  label: {
    color: 'white',
  },
  inputs: {
    backgroundColor: '#1b2431',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ffffff2c',
    color: 'white'
  },
  btnInsert: {
    backgroundColor: '#009cda',
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
