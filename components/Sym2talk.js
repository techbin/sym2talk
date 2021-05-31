import React, {useState} from 'react';
import {Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import symbolData from '../assets/json/symbol-info1.json';
import * as Speak from "expo-speech";
import ImageSrc from './Images.js';

function showSymbols(category,categoryGroup) {
    const symbol = [];
    categoryGroup[category].map(item => {
        symbol.push(item)
    })
    return symbol;
}


function showCategory(categoryGroup) {
    const category = [];
    Object.keys(categoryGroup).map(key =>
        category.push(key)
    )
    return category;
}

function getGroupByCategory(symbolData)
{
    //const groupByKey = (list, key, {omitKey=false}) => list.reduce((hash, {[key]:value, ...rest}) => ({...hash, [value]:( hash[value] || [] ).concat(omitKey ? {...rest} : {[key]:value, ...rest})} ), {})
    //const categoryGrouping = groupByKey(symbolData, 'category', {omitKey:true});
    const obj = symbolData.reduce(function (a, e) {
        // GROUP BY estimated key (estKey), well, may be a just plain key
        // a -- Accumulator result object
        // e -- sequentally checked Element, the Element that is tested just at this itaration

        // new grouping name may be calculated, but must be based on real value of real field
        let estKey = (e['category']);
        estKey = estKey === '' ? 'others' : estKey;
        (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
        return a;
    }, {});
    return obj;//Object.values( obj );
}



function sym2talk ()  {
    const [selCategory, setCategory] =    useState('Abstract');
    const [speakText, setSpeakText] =    useState('');

    const categoryGroup = getGroupByCategory(symbolData);
    const sybols = showSymbols(selCategory,categoryGroup);

    const speakLoud = () => {
        Speak.stop().then(r => Speak.speak(speakText, {
            language: 'en',
            pitch: 1,
            rate: 0.75
        }));
    }

    const cleanText = ((text) => {
        return text;//.replace(/[^a-zA-Z0-9]/g, ' ')
    })

    const clearSpeakText = (() => {
        let currentTxt = speakText;
        let lastIndex = currentTxt.lastIndexOf(' ');

        setSpeakText(currentTxt.substring(0, lastIndex));
    })

    const listRowPressed = (item) => {
        setCategory(item)
    }

    const getImageSrc = (item, imageSrc) => {
        const obj = imageSrc.reduce(function (a, e) {
            let src =  require('../assets/icon.png');
            if(typeof(e['image_'+item]) != 'undefined') {
                src = e['image_' + item].src;
            }
            return src;
        }, {});
        return obj;
    }

    return (

        <View style={styles.maincontainer}>
            <View style={styles.topbar}>
                <Text style={styles.topbar_text}>{speakText}</Text>
                <TouchableOpacity onPress={() => speakLoud()} ><View><Image style={styles.topbar_button_speak} alt="Speak" source={ require('../assets/speak.png') } /></View></TouchableOpacity>
                <TouchableOpacity onPress={() => clearSpeakText()} ><View><Image style={styles.topbar_button_clear} alt="Clear" source={ require('../assets/remove.png') }/></View></TouchableOpacity>
            </View>
            <View style={styles.contentcontainer}>
                <View style={styles.categorycontainer}>
                    <FlatList style={styles.flatlist} data={showCategory(categoryGroup)}  keyExtractor={(item, index) => index.toString()} renderItem={data => (
                        <TouchableOpacity onPress={() => listRowPressed(data.item)} >
                            <View style={styles.flatlistitem} onClick={() => setCategory(data.item)}>
                                <Text style={styles.flatlisttext}>{data.item}</Text>
                            </View>
                        </TouchableOpacity>
                    )} />
                </View>
                <View style={styles.symbolcontainer}>
                    <FlatList style={styles.flatlist_symbol} columnWrapperStyle={{ flexWrap: 'wrap' }} numColumns={10} data={sybols}  keyExtractor={(item, index) => index.toString()} renderItem={data => (
                        <TouchableOpacity style={styles.btn1} onPress={() => setSpeakText(speakText + ' ' + cleanText(data.item.speakText))}>
                            <View key={data.item.id} style={styles.symbol}>
                                <Image style={{width: 100, height: 100}} source={ getImageSrc(data.item.id,ImageSrc) } />
                                <Text>{cleanText(data.item.speakText)}</Text>
                            </View>
                        </TouchableOpacity> )} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 10,
    },
    topbar: {
        backgroundColor: "#e9e9e9",
        height: 80,
        width: "100%",
        flexDirection: "row"
    },
    topbar_text: {
        width: "70%",
        height: "70%",
        backgroundColor: "white",
        borderRadius: 30,
        fontSize: 40,
        padding: 5,
        marginVertical: 14,
        marginHorizontal: 16,
    },
    topbar_button_speak: {
        width: 60,
        height: 60,
        marginVertical: 4,
        padding: 5,
        marginHorizontal: 16
    },
    topbar_button_clear: {
        width: 60,
        height: 60,
        marginVertical: 4,
        padding: 5,
        marginHorizontal: 16
    },
    contentcontainer: {
        backgroundColor: "#e9e9e9",
        flexDirection:'column',
        width: "100%",
        top: 10
    },
    categorycontainer: {
        position: "absolute",
        width: "30%",
        top: 10,
        backgroundColor: "#e9e9e9",
        fontSize: 20,
    },
    symbolcontainer: {
        position: "absolute",
        width: "70%",
        top: 0,
        left: "30%",
        flexDirection:'row',
        flexWrap: 'wrap',

    },
    flatlist: {
        height: 700,
        flexGrow: 0
    },
    flatlistitem: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    flatlisttext: {
        fontSize: 22,
    },
    symbol: {
        width: 100,
        height: 100,
        borderColor: "black",
        backgroundColor: "grey",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
        flexShrink: 1,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    flatlist_symbol: {
        height: 800,
        flexGrow: 0
    }
});

export default sym2talk;
