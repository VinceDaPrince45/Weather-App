import { extractWeather } from './data';
function importAll(r) {
	let images = {};
	r.keys().map((item,index) => {images[item.replace('./','')] = r(item); });
	return images;
}
const dayImages = importAll(require.context('./weather_icons/weather/64x64/day',false, /\.(png|jpe?g|svg)$/));
const nightImages = importAll(require.context('./weather_icons/weather/64x64/night',false, /\.(png|jpe?g|svg)$/));


// change display based on events and asynchronous functions from data.js

const submitBtn = document.querySelector('.searchbar > button');
const location = document.querySelector('input.searchbar');
const mainContainer = document.querySelector('#main');
const todayInfo = document.querySelector('.todayinfo');
const moreInfo = document.querySelector('.moreinfo');
const hoursBtn = document.querySelector('button.hour');
const weekBtn = document.querySelector('button.week');
const body = document.querySelector('body');
const weekForecast = document.querySelector('div.week');
const hourForecast = document.querySelector('div.hour');
const fahrenBtn = document.querySelector('button.fahren');
const celsiusBtn = document.querySelector('button.celsius');
let data;
let hour;
let date;
const iconList = [
	{
		"code" : 1000,
		"day" : "Sunny",
		"night" : "Clear",
		"icon" : 113
	},
	{
		"code" : 1003,
		"day" : "Partly cloudy",
		"night" : "Partly cloudy",
		"icon" : 116
	},
	{
		"code" : 1006,
		"day" : "Cloudy",
		"night" : "Cloudy",
		"icon" : 119
	},
	{
		"code" : 1009,
		"day" : "Overcast",
		"night" : "Overcast",
		"icon" : 122
	},
	{
		"code" : 1030,
		"day" : "Mist",
		"night" : "Mist",
		"icon" : 143
	},
	{
		"code" : 1063,
		"day" : "Patchy rain possible",
		"night" : "Patchy rain possible",
		"icon" : 176
	},
	{
		"code" : 1066,
		"day" : "Patchy snow possible",
		"night" : "Patchy snow possible",
		"icon" : 179
	},
	{
		"code" : 1069,
		"day" : "Patchy sleet possible",
		"night" : "Patchy sleet possible",
		"icon" : 182
	},
	{
		"code" : 1072,
		"day" : "Patchy freezing drizzle possible",
		"night" : "Patchy freezing drizzle possible",
		"icon" : 185
	},
	{
		"code" : 1087,
		"day" : "Thundery outbreaks possible",
		"night" : "Thundery outbreaks possible",
		"icon" : 200
	},
	{
		"code" : 1114,
		"day" : "Blowing snow",
		"night" : "Blowing snow",
		"icon" : 227
	},
	{
		"code" : 1117,
		"day" : "Blizzard",
		"night" : "Blizzard",
		"icon" : 230
	},
	{
		"code" : 1135,
		"day" : "Fog",
		"night" : "Fog",
		"icon" : 248
	},
	{
		"code" : 1147,
		"day" : "Freezing fog",
		"night" : "Freezing fog",
		"icon" : 260
	},
	{
		"code" : 1150,
		"day" : "Patchy light drizzle",
		"night" : "Patchy light drizzle",
		"icon" : 263
	},
	{
		"code" : 1153,
		"day" : "Light drizzle",
		"night" : "Light drizzle",
		"icon" : 266
	},
	{
		"code" : 1168,
		"day" : "Freezing drizzle",
		"night" : "Freezing drizzle",
		"icon" : 281
	},
	{
		"code" : 1171,
		"day" : "Heavy freezing drizzle",
		"night" : "Heavy freezing drizzle",
		"icon" : 284
	},
	{
		"code" : 1180,
		"day" : "Patchy light rain",
		"night" : "Patchy light rain",
		"icon" : 293
	},
	{
		"code" : 1183,
		"day" : "Light rain",
		"night" : "Light rain",
		"icon" : 296
	},
	{
		"code" : 1186,
		"day" : "Moderate rain at times",
		"night" : "Moderate rain at times",
		"icon" : 299
	},
	{
		"code" : 1189,
		"day" : "Moderate rain",
		"night" : "Moderate rain",
		"icon" : 302
	},
	{
		"code" : 1192,
		"day" : "Heavy rain at times",
		"night" : "Heavy rain at times",
		"icon" : 305
	},
	{
		"code" : 1195,
		"day" : "Heavy rain",
		"night" : "Heavy rain",
		"icon" : 308
	},
	{
		"code" : 1198,
		"day" : "Light freezing rain",
		"night" : "Light freezing rain",
		"icon" : 311
	},
	{
		"code" : 1201,
		"day" : "Moderate or heavy freezing rain",
		"night" : "Moderate or heavy freezing rain",
		"icon" : 314
	},
	{
		"code" : 1204,
		"day" : "Light sleet",
		"night" : "Light sleet",
		"icon" : 317
	},
	{
		"code" : 1207,
		"day" : "Moderate or heavy sleet",
		"night" : "Moderate or heavy sleet",
		"icon" : 320
	},
	{
		"code" : 1210,
		"day" : "Patchy light snow",
		"night" : "Patchy light snow",
		"icon" : 323
	},
	{
		"code" : 1213,
		"day" : "Light snow",
		"night" : "Light snow",
		"icon" : 326
	},
	{
		"code" : 1216,
		"day" : "Patchy moderate snow",
		"night" : "Patchy moderate snow",
		"icon" : 329
	},
	{
		"code" : 1219,
		"day" : "Moderate snow",
		"night" : "Moderate snow",
		"icon" : 332
	},
	{
		"code" : 1222,
		"day" : "Patchy heavy snow",
		"night" : "Patchy heavy snow",
		"icon" : 335
	},
	{
		"code" : 1225,
		"day" : "Heavy snow",
		"night" : "Heavy snow",
		"icon" : 338
	},
	{
		"code" : 1237,
		"day" : "Ice pellets",
		"night" : "Ice pellets",
		"icon" : 350
	},
	{
		"code" : 1240,
		"day" : "Light rain shower",
		"night" : "Light rain shower",
		"icon" : 353
	},
	{
		"code" : 1243,
		"day" : "Moderate or heavy rain shower",
		"night" : "Moderate or heavy rain shower",
		"icon" : 356
	},
	{
		"code" : 1246,
		"day" : "Torrential rain shower",
		"night" : "Torrential rain shower",
		"icon" : 359
	},
	{
		"code" : 1249,
		"day" : "Light sleet showers",
		"night" : "Light sleet showers",
		"icon" : 362
	},
	{
		"code" : 1252,
		"day" : "Moderate or heavy sleet showers",
		"night" : "Moderate or heavy sleet showers",
		"icon" : 365
	},
	{
		"code" : 1255,
		"day" : "Light snow showers",
		"night" : "Light snow showers",
		"icon" : 368
	},
	{
		"code" : 1258,
		"day" : "Moderate or heavy snow showers",
		"night" : "Moderate or heavy snow showers",
		"icon" : 371
	},
	{
		"code" : 1261,
		"day" : "Light showers of ice pellets",
		"night" : "Light showers of ice pellets",
		"icon" : 374
	},
	{
		"code" : 1264,
		"day" : "Moderate or heavy showers of ice pellets",
		"night" : "Moderate or heavy showers of ice pellets",
		"icon" : 377
	},
	{
		"code" : 1273,
		"day" : "Patchy light rain with thunder",
		"night" : "Patchy light rain with thunder",
		"icon" : 386
	},
	{
		"code" : 1276,
		"day" : "Moderate or heavy rain with thunder",
		"night" : "Moderate or heavy rain with thunder",
		"icon" : 389
	},
	{
		"code" : 1279,
		"day" : "Patchy light snow with thunder",
		"night" : "Patchy light snow with thunder",
		"icon" : 392
	},
	{
		"code" : 1282,
		"day" : "Moderate or heavy snow with thunder",
		"night" : "Moderate or heavy snow with thunder",
		"icon" : 395
	}
]

export function updateDisplay() {
    submitBtn.addEventListener('click', (e) => {
		data = extractWeather(location.value);
		var fileInterval = setInterval(function() {
			if (typeof data.currentData.condition !== 'undefined') {
				console.log(data)
				clearAll()
				const time = data.currentData.time;
				hour = +time.split(':')[0];
				date = data.currentData.date;
				displayAll(data);
				clearInterval(fileInterval)
			} else {console.log('waiting')}
		},100)

        // when pressing submit, set textcontent of all divs to none and update with data
        // look at which tabs are active as well

    })
    body.addEventListener('click', (e) => {
		if (data !== undefined) {
			activeTab(e);
		}
		activeTemp(e);
    })
}

// pressing search removes all content from divs and refreshes with new data

function clearAll() {
    location.value = '';
    for (const div of Array.from(document.querySelectorAll('.main'))) {
        if (div.children.length == 0) {
            div.textContent = '';
        }
    }
	weekForecast.textContent = '';
	hourForecast.textContent = '';
	todayInfo.textContent = '';
	moreInfo.textContent = '';
}

// pressing weekly or hourly changes bottom data to whatever // add active class

function activeTab(e) {
    if (e.target.classList.contains('hour') || e.target.classList.contains('week')) {
        // remove active class from both divs and add to target
        weekForecast.classList.remove('active');
        hourForecast.classList.remove('active');
		weekForecast.textContent = '';
		hourForecast.textContent = '';
		if (e.target.classList.contains('hour')) {
			hourForecast.classList.add('active');
			displayHours(data.forecastHour);
		};
		if (e.target.classList.contains('week')) {
			weekForecast.classList.add('active');
			displayWeek(data.forecastDays);
		};
    }
}

function activeTemp(e) {
	if (e.target.classList.contains('fahren') || (e.target.classList.contains('celsius'))) {
		fahrenBtn.classList.remove('active');
		celsiusBtn.classList.remove('active');
		e.target.classList.add('active');
		if (data !== undefined) {
			clearAll();
			displayAll(data);
		}
	}
}

// hourly data is displayed for next 24 hours

function displayHours(array) {
    for (let i=0;i < array.length;i++) {
        const hourContainer = document.createElement('div');
        hourContainer.classList.add('hour');
        const time = document.createElement('div');
        time.textContent = array[i].time;
        const temperature = document.createElement('div');
		if (determineTemp()) {
			temperature.textContent = `Temp F: ${array[i].tempf}`;
		} else {temperature.textContent = `Temp C: ${array[i].tempc}`}
        const icon = document.createElement('div');
		let string = array[i].code.toString();
		let concatenated = 'Code number is ' + string;
        icon.textContent = concatenated
        hourContainer.append(time,temperature,icon)

        hourContainer.style.cssText = 'display:grid;grid-template-rows:auto;grid-template;column;1;border:1px solid black';
		if (hour == +array[i].time.split(':')[0]) {
			hourContainer.style.border = '5px solid blue';
		}
        hourForecast.appendChild(hourContainer);
    }
}

function displayWeek(array) {
	for (let i=0;i < array.length;i++) {
        const weekContainer = document.createElement('div');
        weekContainer.classList.add('week');
        const day = document.createElement('div');
        day.textContent = array[i].date;
		// put temperature conditional here
        const maxTemp = document.createElement('div');
		if (determineTemp()) {
			maxTemp.textContent = `Max F: ${array[i].maxtempf}`;
		} else {maxTemp.textContent = `Max C: ${array[i].maxtempc}`}
		const minTemp = document.createElement('div');
		if (determineTemp()) {
			minTemp.textContent = `Min F: ${array[i].mintempf}`;
		} else {minTemp.textContent = `Min C: ${array[i].mintempc}`}
        const icon = document.createElement('div');
		let string = array[i].code.toString();
		let concatenated = 'Code number is ' + string;
        icon.textContent = concatenated
        weekContainer.append(day,maxTemp,minTemp,icon);

        weekContainer.style.cssText = 'display:grid;grid-template-rows:auto;grid-template;column;1;border:1px solid black';
		if (date == array[i].date) {
			weekContainer.style.border = '5px solid blue';
		}
        weekForecast.appendChild(weekContainer);
    }
}

function displayMain(object) {
	const todayContainer = document.createElement('div');
	todayContainer.classList.add('today');
	const dateTime = document.createElement('div');
	dateTime.textContent = object.date.toString() + ' ' + object.time.toString()
	const currentCondition = document.createElement('div');
	currentCondition.textContent = object.condition;
	const location = document.createElement('div');
	location.textContent = object.location;
	const currentTemp = document.createElement('div');
	if (determineTemp()) {
		currentTemp.textContent = 'Temperature F: ' + object.actualTempF.toString();
	} else {currentTemp.textContent = 'Temperature C: ' + object.actualTempC.toString()}
	const currentIcon = document.createElement('div');
	currentIcon.textContent = object.code.toString();
	
	todayContainer.append(currentCondition,location,dateTime,currentTemp,currentIcon);
	todayContainer.style.cssText = 'display:grid;grid-template-columns:1;border:1px solid black';

	todayInfo.appendChild(todayContainer);
}	

function displayMoreInfo(object) {
	const moreinfoContainer = document.createElement('div');
	const feelsLike = document.createElement('div');
	if (determineTemp()) {
		feelsLike.textContent = 'Feels like F: ' + object.feelsLikeF.toString();
	} else {feelsLike.textContent = 'Feels like C: ' + object.feelsLikeC.toString()}
	const humidity = document.createElement('div');
	humidity.textContent = 'Humidity: ' + object.humidity.toString() + '%';
	const cloud = document.createElement('div');
	cloud.textContent = 'Cloud percentage: ' + object.cloud.toString() + '%';
	const windspeed = document.createElement('div');
	windspeed.textContent = 'Wind speed: ' + object.windmph.toString() + 'mph';
	const uv = document.createElement('div');
	uv.textContent = object.uv;

	moreinfoContainer.append(feelsLike,humidity,cloud,windspeed,uv);
	moreinfoContainer.style.cssText = 'display:grid;grid-template-columns:1;border:1px solid black';

	moreInfo.appendChild(moreinfoContainer);
}

function displayAll(data) {
	displayMain(data.currentData);
	displayMoreInfo(data.currentData); 
	if (hourForecast.classList.contains('active')) {
		displayHours(data.forecastHour);
	}
	if (weekForecast.classList.contains('active')) {
		displayWeek(data.forecastDays);
	}
}

// button to switch between fahrenheit and celsius


function determineTemp() {
	if (fahrenBtn.classList.contains('active')) {
		return true;
	} else return false;
}