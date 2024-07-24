import React from "react";
import { Text, View, StyleSheet } from "react-native"
import params from "./params";
import Field from "./components/Field";

export default props => {

    return(
        <View style={styles.container}>
            <Text>Iniciando o Mines!</Text>
            <Text>Tamanho da grande:
                {params.getRowsAmount()} X {params.getColumnsAmount()}
            </Text>
            <Field />
            <Field opened/>
            <Field opened nearMines={1}/>
            <Field opened nearMines={2}/>
            <Field opened nearMines={5}/>
            <Field opened nearMines={6}/>
            <Field mined opened/>
            <Field mined opened exploded/>
            <Field flagged/>
            <Field flagged opened/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: "center",
        flex: 1
    }
})
