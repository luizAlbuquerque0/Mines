import React from "react";
import { Text, View } from "react-native"
import params from "./params";


export default props => {

    return(
        <View>
            <Text>Iniciando o Mines!</Text>
            <Text>Tamanho da grande:
                {params.getRowsAmount()} X {params.getColumnsAmount()}
            </Text>
        </View>
    )
}

