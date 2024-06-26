import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Gasto from '../../../components/listarDados';
import HeaderPerfil from '../../../components/headerPerfil';
import { getData } from '../../../backend/User';


const listlistElement = [
  {
      titulo: 'Compras',
      valor: 556.5,
      categoria: 'casa'
  },
  {
      titulo: 'Agua',
      valor: 60.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Gasolina',
      valor: 230.0,
      categoria: 'Transporte'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
  {
      titulo: 'Energia',
      valor: 220.0,
      categoria: 'casa'
  },
];

const Home = () => {
  const [despesas, setDespesas] = React.useState<any[]>([]); 

  React.useEffect(() => {
      const fetchDespesas = async () => {
          try {
              const data = await getData('despesas'); 
              setDespesas(data);
              console.log(despesas)
          } catch (error) {
              console.error('Erro ao obter despesas:', error);
              
          }
      };

      fetchDespesas();
  }, []); 
  return (

    //     
    <SafeAreaView style={styles.body} >
      <ImageBackground source={require('../../../assets/img/bg-home.png')} height={100} imageStyle={{ width: '100%', height: '100%' }} style={{width:'100%', height: '100%'}}>

        <HeaderPerfil/>

        <View style={styles.containerSaldos}>


          <TouchableOpacity style={styles.boxSaldos}>
            <Text style={[styles.titleSaldo, { color: 'red' }]}>Dispesas</Text>
            <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>R$ 2.300,00</Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Text style={styles.titleStatus}>Status: </Text>
              <Text style={styles.status}>Insuficiente</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxSaldos} >
            <Text style={styles.titleSaldo}>Renda</Text>
            <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>R$ 1.757,32</Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Text style={styles.titleStatus}>Status: </Text>
              <Text style={styles.status}>Insuficiente</Text>
            </View>
          </TouchableOpacity>


        </View>

        <View style={{ paddingHorizontal: 20, paddingVertical: 20, overflow:'hidden'}}>
          <Gasto list={despesas} categoria={true}/>
        </View>

      </ImageBackground>
    </SafeAreaView>

  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',


  },

  containerSaldos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 15,
    paddingHorizontal: 15,
  },


  boxSaldos: {
    borderWidth: 1,
    borderColor: '#ffffff28',
    justifyContent: 'space-around',
    gap: 10,
    width: '48%',
    backgroundColor: '#ffffff0c',
    padding: 15,
    borderRadius: 5
  },

  titleSaldo: {
    color: '#00cf68f3',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1.2
  },


  titleStatus: {
    color: 'gray',
    fontSize: 12,
  },

  status: {
    color: 'lightblue', 
    fontWeight: 'bold',
    fontSize: 13
  }

});
