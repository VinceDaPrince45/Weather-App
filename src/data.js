// functions to fetch data from weather api

const baseURL = 'https://api.weatherapi.com/v1';
const key = '2b93e0b7f93640cbace163743233006';

// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london

async function getCurrentWeather(location) {
    try {
        const response = await fetch(baseURL + '/current.json?key=' + key + '&q=' + String(location), {mode:'cors'});
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export function extractCurrentWeather(location) {
    const currentData = {};
    const promise = getCurrentWeather(location).then(
        response => {
            console.log(response)
            currentData.condition = response.current.condition.text;
            currentData.actualTempF = response.current.temp_f;
            currentData.actualTempC = response.current.temp_c;
            currentData.feelsLikeF = response.current.feelslike_f;
            currentData.feelsLikeC = response.current.feelslike_c;
            currentData.location = response.location.name;
            currentData.time = response.location.localtime;
            currentData.humidity = response.current.humidity;
            currentData.isDay = response.current.is_day;
        }
    );
    console.log(currentData)
    // return object of data to access
}

export async function getForecast(location) {
    try {
        const response = await fetch(baseURL + '/forecast.json?key=' + key + '&q=' + String(location) + '&days=7', {mode:'cors'});
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

// both above functions return promise, need to use .then to access data

