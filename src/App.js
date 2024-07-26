import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native"
import params from "./params";
import Field from "./components/Field";
import { createMinedBoard } from "./functions";
import MineField from "./components/MineField";

export default props => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    const minesAmount =  Math.ceil(cols * rows * params.difficultLevel);
    const [board, setBoard] = useState(createMinedBoard(rows, cols, minesAmount));

    return(
        <View style={styles.container}>
            <Text>Iniciando o Mines!</Text>
            <Text>Tamanho da grande:
                {params.getRowsAmount()} X {params.getColumnsAmount()}
            </Text>
            <View style={styles.board}>
                <MineField board={board}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end'
    },
    board:{
        alignItems: 'center',
        backgroundColor: "#AAA"
    }
})
