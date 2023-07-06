import { extractWeather } from './data';

// change display based on events and asynchronous functions from data.js

export function updateDisplay() {
    const submitBtn = document.querySelector('.searchbar > button');
    submitBtn.addEventListener('click', (e) => {
        const location = document.querySelector('input.searchbar');
        console.log(extractWeather(location.value));

        // when pressing submit, set textcontent of all divs to none and update with data
    })
}

// pressing search removes all content from divs and refreshes with new data

// pressing weekly or hourly changes bottom data to whatever

// hourly data is displayed for next 24 hours

// button to switch between fahrenheit and celsius