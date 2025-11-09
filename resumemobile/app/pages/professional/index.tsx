import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/app/constants/colors";
import { globalStyles } from "../../_globalStyles";
import { professionalStyle } from "./_professionalStyle"

export default function Professional() {
    return(
        <ScrollView style={globalStyles.scroll} contentContainerStyle={globalStyles.scrollContainer}>
            <View style ={professionalStyle.section}>
                <View style={professionalStyle.header}>
                    <Ionicons name="briefcase-outline" size={24} color={Colors.primaryText} />
                    <Text style={professionalStyle.title}>Experiência Profissional</Text>
                </View>
                <Text style={professionalStyle.text}>Analista Jr de Modern Workplace</Text>
                <Text style={professionalStyle.subtext}>Accenture-Avanade | 01/2025 | - Presente</Text>
                <Text style={professionalStyle.text}>Atuando na equipe de Windows Networking da CSS Microsoft, especialista em redes e comunicação entre servidores e dispositivos finais, fluente em Português e Inglês, aprendendo Espanhol e Frânces.</Text>
            </View>

            <View style ={professionalStyle.section}>
                <View style={professionalStyle.header}>
                    <Ionicons name="hammer-outline" size={24} color={Colors.primaryText} />
                    <Text style={professionalStyle.title}>Habilidades Técnicas</Text>
                </View>
                <Text style={professionalStyle.text}>Experiência no suporte a empresas de diferentes portes (grande, médio e pequeno), solucionando problemas técnicos relacionados à comunicação de rede, compartilhamento de arquivos (SMB), DHCP, DNS, VPN e outros.</Text>
                <Text style={professionalStyle.text}>Habilidadde na análise de pacotes de rede utilizando ferramentas como WireShark, NET Monitor, interpretação de logs com o Visualizador de Eventos da Microsoft e TSS Logs.</Text>
                <Text style={professionalStyle.text}>Proficiência no uso de plataformas Dynamics 365 para gerenciamento de chamados e soluções técnicas. Experiência em gestão de escopo, diagnóstico de problemas e validação de soluções adaptando o atendimento ao perfil, cultura e fuso horário do cliente.</Text>
            </View>

            <View style ={professionalStyle.section}>
                <View style={professionalStyle.header}>
                    <Ionicons name="people-outline" size={24} color={Colors.primaryText} />
                    <Text style={professionalStyle.title}>Soft Skills</Text>
                </View>
                <Text style={professionalStyle.text}>Fortes habilidades de comunicação e colaboração com clientes e equipes internas, utilizando e-mail, telefone e plataformas como o Microsoft Teams para garantir eficiência e alinhamento nas soluções técnicas.</Text>
                <Text style={professionalStyle.text}>Liderança;</Text>
                <Text style={professionalStyle.text}>Trabalho em equipe;</Text>
                <Text style={professionalStyle.text}>Comunicação;</Text>
                <Text style={professionalStyle.text}>Organização;</Text>
                <Text style={professionalStyle.text}>Estratégia;</Text>

            </View>
        </ScrollView>
    );
}