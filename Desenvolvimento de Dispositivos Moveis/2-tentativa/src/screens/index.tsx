import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, TextInput, StyleSheet } from 'react-native';

interface InputProps {
  placeholder: string;
}

const Index: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);

  const calculateImc = () => {
    const newImc = weight / (height * height);
    setImc(newImc);
  };

  return (
    <ImageBackground source={require('../assets/imgs/bgandroid.png')} style={styles.body}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Calculadora de IMC</Text>
      </View>

      <View style={styles.main}>
        <TextInput
          style={styles.inputs}
          placeholder="altura (cm)"
          keyboardType="numeric"
          onChangeText={(text: string) => setHeight(parseFloat(text))}
        />
        <TextInput
          style={styles.inputs}
          placeholder="peso (kg)"
          keyboardType="numeric"
          onChangeText={(text: string) => setWeight(parseFloat(text))}
        />
        <Button title="Calcular" onPress={calculateImc} />
      </View>

      {imc > 0 && (
        <View>
          <Text>Resultado: {imc}</Text>
        </View>
      )}
    </ImageBackground>
  );
};


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
    alignItems: 'center',
  },

  main: {
    width: '100%',
    height: 'auto', // Adjusted height to accommodate content
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  inputs: {
    paddingVertical: 10,
    paddingLeft: 20,
    backgroundColor: '#ffffff52',
    borderRadius: 50,
    width: '95%',
  },
});

export default Index;
