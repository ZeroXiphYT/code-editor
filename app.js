const txt = document.getElementById('code');
const result = document.querySelector('div');
txt.addEventListener('keyup', change);
change();

function change() {
    const code = txt.value;
    result.innerHTML = code;
}