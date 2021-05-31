import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Licence = () =>  {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Licence</Text>
            <Text style={styles.sub_heading}>iOS and Android application</Text>
            <Text style={styles.body}>
                This software is published under the MIT.
            </Text>
            <Text style={styles.sub_heading}>Symbols and Categories</Text>
            <Text style={styles.body}>
                The symbols used in this project is free to use and are downloaded from Sclera Symbols(wwww.sclera.be) published under the Creative Commons Licence.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
        marginTop: 10,
        marginLeft: 0,
        backgroundColor: '#d6d6d6',
        padding: 20
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
    },
    sub_heading: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    },
    body: {
        fontSize: 14
    }
});

export default Licence;