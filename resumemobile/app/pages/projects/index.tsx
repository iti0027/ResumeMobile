import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import {getRandomJoke} from "./api";
import { globalStyles } from "../../_globalStyles";
import { projectStyle } from "./_projectStyle";

export default function Project() {
    const [joke, setJoke] = useState({setup: '', punchline: ''});
    const [loading, setLoading] = useState(false);

    const fetchJoke = async () => {
        setLoading(true);
        const data = await getRandomJoke();
        if (data && data.punchline && data.setup){
            setJoke({setup: data.setup, punchline: data.punchline});
        } else{
            setJoke({setup: '', punchline: 'Não foi possível carregar a piada.'});
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return(
            <View style={globalStyles.container}>
                <Text style={projectStyle.title}>Piadas Aleatórias</Text>
                {loading ? (
                    <Text style={projectStyle.text}>Carregando piada...</Text>
                ) : (
                    <View style ={{flex:1, justifyContent: 'flex-start'}}>
                        <Text style={projectStyle.text}>{joke.setup}</Text>
                        <Text style={projectStyle.text}>{joke.punchline}</Text>
                    </View>
                )}
                <Button title="Nova piada" onPress={fetchJoke} />
            </View>
    );
}