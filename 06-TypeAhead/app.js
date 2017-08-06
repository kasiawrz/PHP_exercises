//document.addEventListener('DOMContentLoaded', function() {

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    let cities = [];

    fetch(endpoint)
        .then(resp => resp.json())
        .then(data => data.forEach(city => cities.push(city)));

    //looking for matching words
    // function regFun(word, cities) {
    //
    //     return cities.filter(place => {
    //         const regex = new RegExp(word, 'gi');
    //         console.log(place.city.match(regex)|| place.state.match(regex));
    //         return place.city.match(regex)|| place.state.match(regex);
    //     });
    // }

    const input = document.querySelector('.search');
    const sugg = document.querySelector('.suggestions');


    function findMatches() {
        console.log(input.value);

        //array of matching cities/states
        const matching = cities.filter(place => {
            const regex = new RegExp(input.value, 'gi');
            return place.city.match(regex)|| place.state.match(regex);
        });

        //remove old matches
        sugg.innerHTML = '';

        //display matches
        matching.forEach(city => {

            let newLi = document.createElement('li');
            newLi.innerText = city.city;
            sugg.appendChild(newLi);

            console.log(city.city)
        });
        return matching;
    }


    input.addEventListener('focus', () => {
        this.addEventListener('keyup', findMatches) //regFun(input.value, cities));
    });
    console.log(input, sugg);

    // input.addEventListener('keyup', matches);
    // sugg.addEventListener('change', matches);

//});
