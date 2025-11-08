import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { globalStyles } from "../../_globalStyles";
import { aboutMeStyle } from "./_aboutMeStyle"

export default function AboutMe() {
    const [showMyself, setShowMyself] = useState(false);
    const [showSafira, setShowSafira] = useState(false);
    const [showPerola, setShowPerola] = useState(false);
    const [showAgatha, setShowAgatha] = useState(false);


    const handleMyselfPress = () => {
        setShowMyself(prev => !prev);
        setShowSafira(false);
        setShowPerola(false);
        setShowAgatha(false);
    };

    const handleSafiraPress = () => {
        setShowSafira(prev => !prev);
        setShowMyself(false);
        setShowPerola(false);
        setShowAgatha(false);
    };

    const handlePerolaPress = () => {
        setShowPerola(prev => !prev);
        setShowMyself(false);
        setShowSafira(false);
        setShowAgatha(false);
    };

    const handleAgathaPress = () => {
        setShowAgatha(prev => !prev);
        setShowMyself(false);
        setShowSafira(false);
        setShowPerola(false);
    };

    return(
        <View style={globalStyles.container}>
            <View style={aboutMeStyle.row}> 
                <View style={aboutMeStyle.item}>
                    <TouchableOpacity onPress={handleMyselfPress}>
                        <Image
                            source={require('../../../assets/images/myself.jpeg')}
                            style={aboutMeStyle.myselfImage}
                        />
                    </TouchableOpacity>
                    {showMyself && (
                        <Text style={aboutMeStyle.text}>
                            Me chamo <Text style={aboutMeStyle.name}>Ítalo Verçoza</Text>
                        </Text>
                    )}
                </View>

                <View style={aboutMeStyle.item}>
                    <TouchableOpacity onPress={handleSafiraPress}>
                        <Image
                            source={require('../../../assets/images/safira.jpeg')}
                            style={aboutMeStyle.safiraImage}
                        />
                    </TouchableOpacity>
                    {showSafira && (
                        <Text style={aboutMeStyle.text}>
                            Esta é a rainha da casa <Text style={aboutMeStyle.name}>Safira</Text>
                        </Text>
                    )}
                </View>
            </View>

            <View style={aboutMeStyle.row}>
                <View style={aboutMeStyle.item}>
                    <TouchableOpacity onPress={handlePerolaPress}>
                        <Image
                            source={require('../../../assets/images/perola.jpeg')}
                            style={aboutMeStyle.perolaImage}
                        />
                    </TouchableOpacity>
                    {showPerola && (
                        <Text style={aboutMeStyle.text}>
                            Peta safadinha trelosa da casa <Text style={aboutMeStyle.name}>Perola</Text>
                        </Text>
                    )}
                </View>

                <View style={aboutMeStyle.item}>
                    <TouchableOpacity onPress={handleAgathaPress}>
                        <Image
                            source={require('../../../assets/images/agatha.jpeg')}
                            style={aboutMeStyle.perolaImage}
                        />
                    </TouchableOpacity>
                    {showAgatha && (
                        <Text style={aboutMeStyle.text}>
                            Petinha manhosa <Text style={aboutMeStyle.name}>Agatha</Text>, essa é a mais brava ksksk
                        </Text>
                    )}
                </View>
            </View>

        </View>

    );
}