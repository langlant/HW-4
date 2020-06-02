import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input } from "react-native-elements";
import {initGeoCalcDb, writeData, setupDataListener} from '../helpers/fb-geocalculator';
import CalculatorScreen from './CalculatorScreen';
import { FlatList } from "react-native-gesture-handler";

const HistoryScreen = ({ route, navigation }) => {
    const [lat1, lon1, lat2, lon2] = route.params;

    return(
        <FlatList  
            keyExtractor={(useState) => item.text}
            data = {useState}
            renderItem={({index, useState}) =>{
                <Text> {lat1.text} </Text>
                <Text> {lon1.text} </Text>
                <Text> {lat2.text} </Text>
                <Text> {lon2.text} </Text>
            }}
            />
    );

}

export default HistoryScreen;