import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import {initGeoCalcDb, writeData, setupDataListener} from '../helpers/fb-geocalculator';

const HistoryScreen = ({ route, navigation }) => {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StyleSheet.container}>
                
            </View>
        </TouchableWithoutFeedback>
    )
}

export default HistoryScreen;