// functions to fetch data from weather api

const baseURL = 'https://api.weatherapi.com/v1';
const key = '2b93e0b7f93640cbace163743233006';

// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london

export function extractWeather(location) {
    const currentData = {};
    const forecastDays = [
        {},{},{},{},{},{},{}
    ];
    const forecastHour = [
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ];
    const allData = {
        currentData,forecastDays,forecastHour
    };
    const promise = getForecast(location)
    .then(
        response => {
            currentData.condition = response.current.condition.text;
            currentData.actualTempF = response.current.temp_f;
            currentData.actualTempC = response.current.temp_c;
            currentData.feelsLikeF = response.current.feelslike_f;
            currentData.feelsLikeC = response.current.feelslike_c;
            currentData.location = response.location.name;
            const date = response.location.localtime.split(' ')[0];
            currentData.date = date;
            const time = response.location.localtime.split(' ')[1];
            currentData.time = time;
            currentData.humidity = response.current.humidity;
            currentData.isDay = response.current.is_day;
            currentData.uv = response.current.uv;
            currentData.windkph = response.current.wind_kph;
            currentData.windmph = response.current.wind_mph;
            currentData.cloud = response.current.cloud;
            currentData.code = response.current.condition.code;
            let dayCounter = 0;
            for (const day of response.forecast.forecastday) {
                forecastDays[dayCounter].condition = day.day.condition.text;
                forecastDays[dayCounter].maxtempc = day.day.maxtemp_c;
                forecastDays[dayCounter].maxtempf = day.day.maxtemp_f;
                forecastDays[dayCounter].code = day.day.condition.code;
                forecastDays[dayCounter].date = day.date;
                forecastDays[dayCounter].mintempc = day.day.mintemp_c;
                forecastDays[dayCounter].mintempf = day.day.mintemp_f;
                if (day.date == currentData.date) {
                    let hourCounter = 0;
                    for (const hour of day.hour) {
                        forecastHour[hourCounter].time = hour.time.split(' ')[1];
                        forecastHour[hourCounter].tempc = hour.temp_c;
                        forecastHour[hourCounter].tempf = hour.temp_f;
                        forecastHour[hourCounter].condition = hour.condition.text;
                        forecastHour[hourCounter].code = hour.condition.code;
                        hourCounter += 1;
                    }
                }
                dayCounter += 1;
            }
        }
    )
    .catch(err => {
        throw new Error('spelled wrong')
    });

    // return object of data to access
    return allData;
}

async function getForecast(location) {
    try {
        const response = await fetch(baseURL + '/forecast.json?key=' + key + '&q=' + String(location) + '&days=7', {mode:'cors'});
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

// both above functions return promise, need to use .then to access data

