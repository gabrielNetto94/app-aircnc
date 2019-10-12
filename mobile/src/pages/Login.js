import React from 'react';
import { View, Text, TextInput ,Image, StyleSheet } from 'react-native';//importar do react-native, todo componente que for utilizar!!

import logo from '../assets/logo.png';

export default function Login(){
    return (
        <View style={styles.container}>
            <Image source={logo} ></Image>

            <View style={styles.form}>
                <Text style={styles.label} >SEU E-MAIL * </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor= "#999"
                />
            </View>
        </View>
    );
}

//cria uma constante styles, e cham
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        margin: 30,

    },  

    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,

    },

    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
});