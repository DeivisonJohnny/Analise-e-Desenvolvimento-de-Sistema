import { Link, router, useLocalSearchParams} from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const {name} = useLocalSearchParams();

const Dispesas = (props: any) => {

  console.log(name)

  return (
    <View style={styles.container}>
      <Text>Dipesas</Text>

      <View>
        <Button title='PAGINA DISPESA' color="red"  onPress={()=> {router.push('/')}}/>
        <Link href="../index">Link direcionamento</Link>
        </View>
        {name && <Text style={{color:'pink'}} >{name}</Text> }
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Dispesas;