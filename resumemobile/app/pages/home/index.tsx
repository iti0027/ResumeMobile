import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../_globalStyles";
import { homeStyles } from "./_homeStyle"
import HomeTabs from "./homeTabs"; 

export default function Home() {
    return(
        <View style={globalStyles.container}>
            <View style={homeStyles.navBar}> 
                <Text style={homeStyles.title}>Ítalo Verçoza</Text>
                <Text style={homeStyles.description}>Desenvolvedor e Analista Jr Windows Networking</Text>
                <HomeTabs/>   
            </View>

        </View>

    );
}