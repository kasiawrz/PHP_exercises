document.addEventListener('DOMContentLoaded', function() {

    //visual effects
   var btns = document.querySelectorAll('.key');

    var play = function (event) {

        if (event.keyCode) {
            var code = event.keyCode,
                btn =  document.querySelector('div[data-key="' + code + '"');


        } else {
            var code = this.dataset.key,
                btn = this;
        }

        //select a sound that matches a key code
        var sound = document.querySelector('audio[data-key="' + code + '"]');

        //stop if there is no audio element
        if(!sound) return;

        sound.currentTime = 0
        sound.play();

        //add transformation
        btn.classList.add('playing');

    }


    //play sound on click or keydown
    for (var i = 0, len = btns.length; i < len; i++) {

        btns[i].addEventListener('click', play);
        btns[i].addEventListener('transitionend', function(e) {
                this.classList.remove('playing');
        });
   }

   window.addEventListener('keydown', play);




});
