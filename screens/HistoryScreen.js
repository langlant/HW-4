import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input } from "react-native-elements";
import {initGeoCalcDb, writeData, setupDataListener} from '../helpers/fb-geocalculator';
import CalculatorScreen from './CalculatorScreen';
import { FlatList } from "react-native-gesture-handler";

const HistoryScreen = ({ route, navigation }) => {
    
    const coords = [
        {coord: lat1},
        {coord: lon1},
        {coord: lat2},
        {coord: lat2},
    ];

    const [useState, setState] = useState(coords);



    return(
        <FlatList  
            keyExtractor={(coord) => coord.coord}
            data = {useState}
            renderItem={({index, useState}) =>{
                return(
                    <Text> {coord.coord}</Text>
                )
            }}
            />
    );

}

export default HistoryScreen;