import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Setup = () =>  {
    return (
        <View style={styles.container}>
            <Text style={styles.sub_heading}>About Sym2Talk</Text>
                <Text>
                    Sym2Talk is a Communication App, also known as AAC App meant for the adults who have difficulty using speech to convey their
                    thoughts and ideas using 8000 images.
                </Text>
            <Text style={styles.sub_heading}>Setup and Upgrade</Text>
            <Text style={styles.body}>
                This Communication Apps, also known as AAC App has been tested on both iOS and Android phones, tablets etc. But in case there are
                any issues please feel to report the issue to admin@cloudninestore.com.au.
                We will release upgrades in Expo.io.
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
        padding: 50
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

export default Setup;