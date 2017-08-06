document.addEventListener('DOMContentLoaded', function() {

    const panels = document.querySelectorAll('.panel');

    function toggle() {
        this.classList.toggle('open');
    }

    panels.forEach(panel => panel.addEventListener('click', toggle));
    // panels.forEach(panel => panel.addEventListener('transitionend', (e) => console.log(e.propertyName)));

});
