import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input } from "react-native-elements";
import {initGeoCalcDb, writeData, setupDataListener} from '../helpers/fb-geocalculator';
import CalculatorScreen from './CalculatorScreen';
import { FlatList } from "react-native-gesture-handler";

const HistoryScreen = ({ route, navigation }) => {
    
    const hLat1 = route.params.lat1;
    const hLon1 = route.params.lon1;
    const hLat2 = route.params.lat2;
    const hLon2 = route.params.lon2;

    const [history, setHistory] = useState(coordinate);


    const coordinate = [
        { coord: hLat1 },
        { coord: hLon1 },
        { coord: hLat2 },
        { coord: hLon2 },
    ]



    return(
        <FlatList  
            keyExtractor={(history) => coordinate.coord}
            data = {coordinate}
            renderItem={({index, coordinate}) =>{
                return(
                    <Text> {coordinate.coord}</Text>
                )
            }}
            />
    );

}

export default HistoryScreen;