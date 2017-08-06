document.addEventListener('DOMContentLoaded', function() {

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    let cities = [];

    fetch(endpoint)
        .then(resp => resp.json())
        .then(data => cities = data)
        .then(cities => {
            console.log(cities);
            return cities;
        });

        console.log('tu ', cities);
    //from the video: .then(data => cities.push(...data));

    //looking for matching words while typing
    function regFun(word, cities) {
        return cities.filter(place => {

            const regex = new RegExp(word, 'gi');
            console.log(place.city.match(regex), place.state.match(regex))
            return place.city.match(regex) || place.state.match(regex);
        })();
    }



regFun('yor', cities);



    const input = document.querySelector('.search');
    const sugg = document.querySelector('.suggestions');

    // input.addEventListener('keyup', matches);
    // sugg.addEventListener('change', matches);

});
