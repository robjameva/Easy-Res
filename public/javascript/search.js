let data = [];

const autocomplete = document.querySelector("#autocomplete");
const resultsHTML = document.querySelector("#results");
// const dataInput = document.querySelector(".search-results");

function getNames () {
    const list = document.querySelector('.search-results').getElementsByTagName('li');
   
    for (var i = 0; i < list.length; i++) {
        var arrValue = list[i].innerHTML;
        data.push(arrValue);    
    }
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
    for (i = 0; i < data.length; i++) {
        if (input === data[i].slice(0, input.length)) {
            results.push(data[i]);
        }
    }
    return results;
}

resultsHTML.onclick = function (event) {
    const setValue = event.target.innerText;
    autocomplete.value = setValue;
    this.innerHTML = "";
};

window.onload = getNames;

