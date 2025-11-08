import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../_globalStyles";
import { homeStyles } from "./_homeStyle"
import HomeTabs from "./homeTabs"; 

export default function Home() {
    return(
        <View style={globalStyles.container}>
            <View>
                <Text style={homeStyles.title}>My resume</Text>
                <Text style={homeStyles.description}>Desenvolvedor e Analista Jr Windows Networking</Text>
                 <HomeTabs/>   
            </View>

        </View>

    );
}