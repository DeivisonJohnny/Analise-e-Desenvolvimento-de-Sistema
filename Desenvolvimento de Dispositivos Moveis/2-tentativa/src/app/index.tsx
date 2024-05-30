import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';

interface recursosNativosProps { }

const recursosNativos = (props: recursosNativosProps) => {

    let vetorNames: { nome: string }[] = [
        { nome: 'Deivison' },
        { nome: 'Vitoria' },
        { nome: 'Alexandre o grande' },
        { nome: 'paulo sergio' },
        { nome: 'Gustavo lima' },
        { nome: 'Santa amalia' },
        { nome: 'Deivison' },
        { nome: 'Vitoria' },
        { nome: 'Alexandre o grande' },
        { nome: 'paulo sergio' },
        { nome: 'Gustavo lima' },
        { nome: 'Santa amalia' },
    ]

    let name;
    return (
        <ScrollView style={styles.container}>
            <FlatList data={vetorNames}
                renderItem={(data) => (
                    <Text style={{fontSize: 50}}>{data.item.nome}</Text>
                )}
            />
        </ScrollView>
    );
};

export default recursosNativos;

const styles = StyleSheet.create({
    container: {}
});
