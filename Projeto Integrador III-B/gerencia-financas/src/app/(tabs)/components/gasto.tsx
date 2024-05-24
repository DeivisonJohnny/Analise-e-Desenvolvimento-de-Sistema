import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface GastoProps { }

let listGasto = [
    {
        nome: 'Compras',
        valor: 556.5,
        categoria: 'casa'
    },
    {
        nome: 'Agua',
        valor: 60.0,
        categoria: 'casa'
    },
    {
        nome: 'Agua',
        valor: 60.0,
        categoria: 'casa'
    },
    {
        nome: 'Agua',
        valor: 60.0,
        categoria: 'casa'
    },
    {
        nome: 'Agua',
        valor: 60.0,
        categoria: 'casa'
    },
    {
        nome: 'Agua',
        valor: 60.0,
        categoria: 'casa'
    },
    {
        nome: 'Agua',
        valor: 60.0,
        categoria: 'casa'
    },
    {
        nome: 'Energia',
        valor: 220.0,
        categoria: 'casa'
    },
    {
        nome: 'Gasolina',
        valor: 230.0,
        categoria: 'Transporte'
    },
    {
        nome: 'asdasd',
        valor: 556.5,
        categoria: 'casa'
    },
    {
        nome: 'asdasd',
        valor: 556.5,
        categoria: 'casa'
    }
]

const Gasto = (props: GastoProps) => {



    return (
        <View style={styles.bodyGasto}>

            <View style={styles.headerList}>
                <Text style={styles.titleHeadeList}>Nome</Text>
                <Text style={styles.titleHeadeList}>Valor</Text>
                <Text style={styles.titleHeadeList}>Categoria</Text>
            </View>

                
            <ScrollView style={styles.bodyList} >
                {listGasto.map((item, index) => (
                    <TouchableOpacity style={styles.itemGasto} key={index.toString()}>
                        <Text style={[styles.textItem, {color: 'white', letterSpacing: 1}]}>{item.nome}</Text>
                        <Text style={[styles.textItem, {color: 'red', fontWeight: 'normal', textShadowColor: 'red', textShadowRadius: 1}]}>R$ {item.valor}</Text>
                        <Text style={[styles.textItem, {color: '#d9e900a6',}]}>{item.categoria}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>


        </View>
    )

    // return (
    //     <View style={styles.container}>
    //         <Text style={styles.title}>Gastos</Text>
    //         {listGasto.map((item, index) => (
    //             <View key={index} style={styles.item}>
    //                 <Text>Nome: {item.nome}</Text>
    //                 <Text>Valor: {item.valor}</Text>
    //                 <Text>Categoria: {item.categoria}</Text>
    //             </View>
    //         ))}
    //     </View>
    // );
};

export default Gasto;

const styles = StyleSheet.create({
    bodyGasto: {
        backgroundColor: '#ffffff0c',
        borderWidth: 1,
        borderColor: '#ffffff28',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 5
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
        height: 200,
        overflow: 'scroll',
        // flex: 1
    },

    itemGasto: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
        width: '100%'
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


// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
// } from 'react-native';

// const Gasto = () => {
//   return (
//       <ScrollView style={styles.scrollView}>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetu
//         </Text>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetu
//         </Text>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetu
//         </Text>

//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetu
//         </Text>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetu
//         </Text>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetu
//         </Text>
//       </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     backgroundColor: 'pink',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 42,
//   },
// });

// export default Gasto;