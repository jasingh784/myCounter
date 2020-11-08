import React , { useState } from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';



export default function MyButton(props) {
    
    return (
    <Pressable onPress={props.onMyPress}>
        <Text style={styles.button}>{props.title}</Text>
    </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 36,
        fontWeight: 'bold',
        backgroundColor: 'lightblue',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 5
    }
});
