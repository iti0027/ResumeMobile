import { Text, View } from "react-native";


import { globalStyles } from "../../_globalStyles";
import { academicsStyle } from "./_academicsStyle"
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/app/constants/colors";

export default function Academics() {
    return(
        <ScrollView style={globalStyles.scroll} contentContainerStyle={globalStyles.container}>
            <View style ={academicsStyle.section}>
                <View style={academicsStyle.header}>
                    <Ionicons name="school-outline" size={24} color={Colors.primaryText} />
                    <Text style={academicsStyle.title}>Formação Acadêmica</Text>
                </View>
                <Text style={academicsStyle.text}>Tecnólogo em Sistemas para Internet</Text>
                <Text style={academicsStyle.subtext}>UNICAP - Universidade Católica de Pernambuco - Conclusão: 2026</Text>
            </View>

            <View style ={academicsStyle.section}>
                <View style={academicsStyle.header}>
                    <Ionicons name="book-outline" size={24} color={Colors.primaryText} />
                    <Text style={academicsStyle.title}>Certificações</Text>
                </View>
                <Text style={academicsStyle.text}>Windows Foundation BootCamp</Text>
                <Text style={academicsStyle.text}>AI-900: Microsoft AI Fundamentals</Text>
            </View>

            <View style ={academicsStyle.section}>
                <View style={academicsStyle.header}>
                    <Ionicons name="language-outline" size={24} color={Colors.primaryText} />
                    <Text style={academicsStyle.title}>Idiomas</Text>
                </View>
                <Text style={academicsStyle.text}>Português - Nativo</Text>
                <Text style={academicsStyle.text}>Inglês - Avançado</Text>
                <Text style={academicsStyle.text}>Espanhol - Básico</Text>
                <Text style={academicsStyle.text}>Frânces - Básico</Text>
            </View>

        </ScrollView>    
    );
}