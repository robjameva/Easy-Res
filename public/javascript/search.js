let namesArr = [];

const autocomplete = document.querySelector("#autocomplete");
const resultsHTML = document.querySelector("#results");

async function getNames() {
    const response = await fetch(`/api/restaurant`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    namesArr.push(data[i].business_name)
                }
            });
        } else {
            alert("")
        }
    });
}


autocomplete.oninput = function () {
    let results = [];
    const userInput = this.value;
    resultsHTML.innerHTML = "";
    if (userInput.length > 0) {
        results = getResults(userInput);
        resultsHTML.style.display = "block";
        for (i = 0; i < results.length; i++) {
            resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
        }
    }
};

function getResults(input) {
    const results = [];
    for (i = 0; i < namesArr.length; i++) {
        if (input === namesArr[i].slice(0, input.length)) {
            results.push(namesArr[i]);
        }
    }
    return results;
}

resultsHTML.onclick = function (event) {
    const setValue = event.target.innerText;
    autocomplete.value = setValue;
    this.innerHTML = "";
};

async function searchSubmitHandler(event) {
    event.preventDefault();
    console.log('test')

    const businessName = document.querySelector('input[id="autocomplete"]').value.trim();

    const response = await fetch(`/api/restaurant`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data[0].business_name);
                for (var i = 0; i < data.length; i++) {
                    if(data[i].business_name === businessName) {
                        const id = data[i].id;
                        document.location.replace(`/restaurant/${id}`);
                    }
                }
            });
        } else {
            alert("")
        }
    });
};

document.querySelector('.search-submit-form').addEventListener('submit', searchSubmitHandler);

window.onload = getNames;

