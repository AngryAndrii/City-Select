// fetch('./city.list.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

import data from './city.list.json' assert { type: 'json' };

// for (let i = 0; i <= data.length; i++) {
//     let cityes =
// }

const cityListElement = document.querySelector("#city-list");
let cityInputElement = document.querySelector("#city-input");

let cityes = data.map(x => x.name);
cityes.sort();
console.log(cityes);
loadData(cityes, cityListElement);

function loadData(name, element) {
    if (name) {
        element.innerHTML = '';
        let innerElement = '';
        name.forEach((item) => {
            innerElement += `
            <li>${item}</li>`;
        });

        element.innerHTML = innerElement;
    }
}

function filterName(name, searchText) {
    return name.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
}

cityInputElement.addEventListener('input', function() {
    const filteredName = filterName(cityes, cityInputElement.value);
    loadData(filteredName, cityListElement);
})