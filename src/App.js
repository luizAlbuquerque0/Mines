import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native"
import params from "./params";
import Field from "./components/Field";
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag } from "./functions";
import MineField from "./components/MineField";

export default props => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    const minesAmount =  Math.ceil(cols * rows * params.difficultLevel);
    const [board, setBoard] = useState(createMinedBoard(rows, cols, minesAmount));
    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);

    const onOpenField = (row, column) =>{
        const vBoard = cloneBoard(board);
        openField(vBoard, row, column);
        const lost = hadExplosion(vBoard);
        const won = wonGame(vBoard);

        if(lost){
            showMines(vBoard);
            Alert.alert("Perdeeeuuuu", "Que buuuuuurrrooo")
        }

        if(won){
            Alert.alert("Parabens!!!", "Você ganhou")
        }
        setBoard(vBoard);
        setLost(lost);
        setWon(won);
    }

    const onSelectField = (row, column) => {
        const vBoard = cloneBoard(board);
        invertFlag(vBoard, row, column)
        const won = wonGame(vBoard);

        if(won){
            Alert.alert("Parabens!!!", "Você ganhou")
        }

        setBoard(vBoard);
        setWon(won);
    }

    return(
        <View style={styles.container}>
            <Text>Iniciando o Mines!</Text>
            <Text>Tamanho da grande:
                {params.getRowsAmount()} X {params.getColumnsAmount()}
            </Text>
            <View style={styles.board}>
                <MineField board={board} onOpenField={onOpenField} onSelectField={onSelectField}/>
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
