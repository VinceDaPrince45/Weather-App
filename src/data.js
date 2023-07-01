// functions to fetch data from weather api

const baseURL = 'https://api.weatherapi.com/v1';
const key = '2b93e0b7f93640cbace163743233006';

// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london

export async function getCurrentWeather(location) {
    try {
        const response = await fetch(baseURL + '/current.json?key=' + key + '&q=' + String(location), {mode:'cors'});
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

export async function getForecast(location) {
    try {
        const response = await fetch(baseURL + '/forecast.json?key=' + key + '&q=' + String(location), {mode:'cors'});
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

export async function getSearch(location) {
    try {
        const response = await fetch(baseURL + '/search.json?key=' + key + '&q=' + String(location), {mode:'cors'});
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
