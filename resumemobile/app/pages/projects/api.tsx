import axios from "axios";

export const getRandomJoke = async () => {
    try{
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        return response.data;
    } catch (error) {
        console.error("Error fetching joke:", error);
        return null;
    }

};