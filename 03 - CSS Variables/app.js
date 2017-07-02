document.addEventListener('DOMContentLoaded', function() {

console.log('hi');
    //changing base color
    const base = document.getElementById('base');
    const img = document.querySelector('img');

    img.style.backgroundColor = base.value
    base.addEventListener('change', function() {
        img.style.backgroundColor = base.value;
    })

    //spacing
    const spacing = document.getElementById('spacing');

    img.style.padding = spacing.value + 'px'
    spacing.addEventListener('change', function() {
        img.style.padding = spacing.value + 'px';
    })

    //blur
    const blur = document.getElementById('blur');

    img.style.filter = 'blur(' + blur.value +'px)'
    blur.addEventListener('change', function() {
        img.style.filter = 'blur(' + blur.value +'px)';
    })

});
