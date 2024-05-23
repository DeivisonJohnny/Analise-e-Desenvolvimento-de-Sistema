import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Link, router } from 'expo-router';


const Home = (props: any) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <View>

                <TextInput placeholder='Digite seu nome' style={{ width: '100%', padding: 5, borderWidth: 1, borderColor: 'gray' }}  >

                </TextInput>

            </View>

            <View>
                <Button title='Pagina dispesas' color="blue" onPress={() => { router.push({pathname: './dispesas/dispesasPage', params: {name: 'Deivison'}}) }} />
                <Link href="./dispesas/dispesasPage">Link direcionamento</Link>
            </View>
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

export default Home;