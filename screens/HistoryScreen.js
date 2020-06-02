import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input } from "react-native-elements";
import {initGeoCalcDb, writeData, setupDataListener} from '../helpers/fb-geocalculator';
import CalculatorScreen from './CalculatorScreen';
import { FlatList } from "react-native-gesture-handler";

const HistoryScreen = ({ route, navigation }) => {
    const [useState, setState] = useState({
        lat1= route.parans,
        lon1 = route.params,
        lat2 = route.params,
        lon2 = route.params
    });
    return(
        <FlatList  
            keyExtractor={(useState) => item.text}
            data = {useState}
            renderItem={({index, useState}) =>{
                <Text> {useState.text} </Text>
            }}
            />
    );

}

export default HistoryScreen;