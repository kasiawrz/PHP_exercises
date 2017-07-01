document.addEventListener('DOMContentLoaded', function() {


    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand')
    const hourHand = document.querySelector('.hour-hand')

    function setDate() {

        var now = new Date();

        var seconds = now.getSeconds();
        var secondsDegree = (seconds / 60) * 360 + 90; //+90 cause this hand has beem moved in CSS
        secondHand.style.transform = 'rotate(' + secondsDegree + 'deg)';

        var min = now.getMinutes();
        var minDegree = (min / 60) * 360 + 90;
        minHand.style.transform = 'rotate(' + minDegree + 'deg)';

        var hour = now.getHours();
        var hourDegree = (hour / 60) * 360 + 90;
        hourHand.style.transform = 'rotate(' + hourDegree + 'deg)';

    }

    setInterval(setDate, 1000);


});
