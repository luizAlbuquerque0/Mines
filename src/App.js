import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native"
import params from "./params";
import Field from "./components/Field";
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, flagsUsed } from "./functions";
import MineField from "./components/MineField";
import Header from "./components/Header";
import LevelSelection from "./screens/LevelSelection";

export default props => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    const minesAmount =  Math.ceil(cols * rows * params.difficultLevel);
    const [board, setBoard] = useState(createMinedBoard(rows, cols, minesAmount));
    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);
    const [showLevelSelection, setShowLevelSelection] = useState(false);

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

    const newGame = ()=>{
        setBoard(createMinedBoard(rows, cols, minesAmount));
        setWon(false);
        setLost(false);
        setShowLevelSelection(false);
    }

    const onLevelSelected = level =>{
        params.difficultLevel = level;
        newGame();
    }

    return(
        <View style={styles.container}>
            <LevelSelection isVisible={showLevelSelection} onLevelSelected={onLevelSelected} onCancel={() => setShowLevelSelection(false)} />
           <Header flagsLeft={minesAmount - flagsUsed(board)} onNewGame={newGame} onFlagPress={() => setShowLevelSelection(true)}/>
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
