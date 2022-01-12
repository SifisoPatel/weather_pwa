import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '10db94b5406595a703afe1ae5b20de04';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}