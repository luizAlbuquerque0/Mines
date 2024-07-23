import React from "react";
import { Text, View } from "react-native"
import params from "./params";
import Field from "./components/Field";

export default props => {

    return(
        <View>
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
        </View>
    )
}

