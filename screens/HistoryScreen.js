import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import { Button, Input} from "react-native-elements";
//import {initGeoCalcDb, writeData, setupDataListener} from '../helpers/fb-geocalculator';
import CalculatorScreen from './CalculatorScreen';
import { FlatList } from "react-native-gesture-handler";

const HistoryScreen = ({ route, navigation }) => {


    const { currentHistory } = route.params;
    
    // const hLat1 = route.params.lat1;
    // const hLon1 = route.params.lon1;
    // const hLat2 = route.params.lat2;
    // const hLon2 = route.params.lon2;

    // const [history, setHistory] = useState(coordinate);


    // const coordinate = [
    //     { coord: hLat1 },
    //     { coord: hLon1 },
    //     { coord: hLat2 },
    //     { coord: hLon2 },
    // ]


    const History = ({item, index}) =>{
        return (
    
        <TouchableHighlight onPress={()=> buttonPress(item)}>
            <View>
                 <Text>{' '} Start: {item.lat1}, {item.lon1}</Text>
                 <Text>{' '} End: {item.lat2}, {item.lon2}</Text>
                 <Text>{item.timestamp}</Text>
        </View>
        </TouchableHighlight>
        
        );
    }
    return(
        <FlatList  
            keyExtractor={(item) => item.timestamp}
            data = {currentHistory}
            renderItem={History}
            />
    );

}

export default HistoryScreen;