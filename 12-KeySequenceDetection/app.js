const pressed = [];
const code = 'warsaw';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    console.log(pressed);
    pressed.splice(-(code.length+1), pressed.length - code.length);
    joined = pressed.join('');
    console.log(joined);
    if (joined === code) cornify_add();

});