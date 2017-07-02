document.addEventListener('DOMContentLoaded', function() {

    //changing base color
    const base = document.getElementById('base');
    const img = document.querySelector('img');
    const js = document.querySelector('.hl');

    img.style.backgroundColor = base.value;
    js.style.color = base.value;

    base.addEventListener('change', function() {
        img.style.backgroundColor = base.value;
        js.style.color = base.value;
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
