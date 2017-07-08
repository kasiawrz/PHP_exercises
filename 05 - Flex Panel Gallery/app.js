document.addEventListener('DOMContentLoaded', function() {

    panels = document.querySelectorAll('.panel');

    for (var i = 0; i < panels.length; i++) {
        panels[i].addEventListener('click', function() {

            this.classList.toggle('open');
        });
    }
});