import * as React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
//import {NavigationContainer, useNavigation, useNavigationState} from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator, useIsDrawerOpen} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Licence from './components/Licence.js';
import Setup from './components/Setup.js';
import {Appbar} from "react-native-paper";
import Sym2Talk from './components/Sym2talk.js';
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={ styles.heading }>
                Welcome to Sym2Talk
            </Text>
            <Image source={require('./assets/wechat.png')} style={{width: 150, height: 150}} />
            <Text style={ styles.sub_heading }>

                Sym2Talk is a Communication App, also known as AAC App meant for the adults who have difficulty using speech to convey their
                thoughts and ideas using 8000 images.

            </Text>

            <Text style={ styles.body }>

                Swipe left to right of your screen to access Application drawer or click the Sym2Talk button to access the application.

            </Text>
            <Button
                style={ styles.button }
                title="Sym2Talk"
                onPress={() => navigation.navigate('Sym2Talk')}
            />
            {/*<Button*/}
            {/*    style={styles.button}*/}
            {/*    title="About Sym2Talk"*/}
            {/*    onPress={() => navigation.navigate('Setup')}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    style={styles.button}*/}
            {/*    title="Licence"*/}
            {/*    onPress={() => navigation.navigate('Licence')}*/}
            {/*/>*/}
        </View>
    );
}

function DetailsScreen() {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Sym2Talk" subtitle="A Communication App" />
            </Appbar.Header>
            <Sym2Talk/>
        </View>
    );
}

function LicenceScreen( ) {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Licence" subtitle="" />
            </Appbar.Header>
            <Licence/>
        </View>
    );
}


function SetupUpgradeScreen( ) {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Setup" subtitle="" />
            </Appbar.Header>
            <Setup/>
        </View>
    );
}
//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Home">
        //         <Stack.Screen name="Home" component={HomeScreen}/>
        //         <Stack.Screen name="Sym2Talk" component={DetailsScreen}/>
        //         <Stack.Screen name="Licence" component={LicenceScreen}/>
        //         <Stack.Screen name="Setup" component={SetupUpgradeScreen}/>
        //     </Stack.Navigator>
        // </NavigationContainer>

    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Sym2Talk" component={DetailsScreen} />
            <Drawer.Screen name="Licence" component={LicenceScreen} />
            <Drawer.Screen name="Setup" component={SetupUpgradeScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 400,
        borderRadius: 30,
        marginTop: '10%',
        marginLeft: '10%',
        backgroundColor: '#d6d6d6',
        padding: 10
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },
    sub_heading: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
        width: '70%'
    },
    body: {
        fontSize: 12,
        marginBottom: 30
    },
    button: {
        marginTop: 30,
        width: 100,
        height: 50,
        fontWeight: 'bold',
        fontSize: 21
    }
});

export default App;
