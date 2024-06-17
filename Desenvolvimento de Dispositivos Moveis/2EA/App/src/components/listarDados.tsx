import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';

interface ListElementProps {
    categoria: boolean
    list: {
        titulo: string;
        valor: number;
        categoria: string;
    }[];
}



const ListElement = (props: ListElementProps) => {
    return (
        <View style={styles.bodylistElement}>
            <View style={styles.headerList}>
                <Text style={styles.titleHeadeList}>Titulo</Text>
                <Text style={styles.titleHeadeList}>Valor</Text>
                {props.categoria && <Text style={styles.titleHeadeList}>Categoria</Text>}
            </View>

            <View style={styles.bodyList}>
                <FlatList 
                    data={props.list}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemlistElement}>
                            <Text style={[styles.textItem, {color: 'white', letterSpacing: 1}]}>{item.titulo}</Text>
                            <Text style={[styles.textItem, {color: 'lightgreen', fontWeight: 'normal', textShadowColor: 'red', textShadowRadius: 1}]}>R$ {item.valor}</Text>
                            {props.categoria && <Text style={[styles.textItem, {color: 'lightgreen'}]}>{item.categoria}</Text>}
                        </TouchableOpacity>                    )}
                />
            </View>
        </View>
    );
};

export default ListElement;

const styles = StyleSheet.create({
    bodylistElement: {
        backgroundColor: '#ffffff0c',
        borderWidth: 1,
        borderColor: '#ffffff28',
        width: '100%',
        maxHeight: '76%',
        minHeight: '50%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 5,
        overflow: 'hidden'
    },

    headerList: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: '#ffffff28',
        paddingBottom: 15
    },

    bodyList: {
        width: '100%',
        height: '95%',
        overflow: 'hidden'
    },

    itemlistElement: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ffffff18'
    },

    titleHeadeList: {
        width: '30%',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1
    },

    textItem: {
        textAlign: 'center',
        width: '30%',
        fontWeight: 'bold'
    }
});
