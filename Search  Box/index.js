const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const list = [];
fetch(endpoint)
.then(blob => blob.json()
.then(data => list.push(... data)))

function findMatch(wordToMatch, list){
    return list.filter(place => {

            const regex = new RegExp(wordToMatch, 'gi')
            return place.city.match(regex) || place.state.match(regex) 
    })
}
function numberWithCommas(x) {
    // this function will give the commas in population value
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
function display(){
    result = findMatch(this.value, list)
    html = result.map(found => {
        const regex2 = new RegExp(this.value, 'gi')
        const cityName = found.city.replace(regex2,`<span class="hl">${this.value}</span>`)
        const stateName = found.state.replace(regex2, `<span class='hl'>${this.value}</span>`)

        return `
        <li>
        <span class='suggestion' > ${cityName}, ${stateName} </span>
        <span class='population'> ${numberWithCommas(found.population)} </span>
        </li>
        `
    }).join('');
    suggestion.innerHTML = html
}

input = document.querySelector('.search')
suggestion = document.querySelector('.suggestion')

input.addEventListener('keyup', display)