import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface botaoProps {
    text: string,
    onPress(): void,
    colorBg?: string
}


export function Praticando(props: botaoProps){
  return (
      <TouchableOpacity style={[styles.botao, {backgroundColor: props.colorBg}]} onPress={props.onPress}>
        <Text>{props.text}</Text>
      </TouchableOpacity>
  );
};

Praticando.defaultProps = {
    colorBg: 'yellow'
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  botao: {
    backgroundColor: 'tomato',
    borderRadius: 5,
    padding: 10,
  }
});
