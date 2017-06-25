document.addEventListener('DOMContentLoaded', function() {

    //visual effects
   var btns = document.querySelectorAll('.key');

    // var play = function() {
    //     this.className = 'key playing';
    //     console.log(this);
    // }

    var play = function (event) {

        if (event.keyCode) {
            var code = event.keyCode,
                btn =  document.querySelector('div[data-key="' + code + '"');


        } else {
            var code = this.dataset.key,
                btn = this;


        }

        var sound = document.querySelector('audio[data-key="' + code + '"]');


        //stop if there is no audio element
        if(!sound) return;

        sound.play();

        console.log(btn.className);
        btn.classList.add('playing');
        //btn.setAttribute('class', 'key playing');

        //.className('playing');
        // btns.querySelector('[data-key="' + event.keyCode + '"')//.className('playing')

    }


    for (var i = 0, len = btns.length; i < len; i++) {

        btns[i].addEventListener('click', play);
        console.log(btns[i].dataset.key);

   }

   window.addEventListener('keydown', play);




});
