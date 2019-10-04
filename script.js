let result = document.getElementById("result");

function check() {
    let regex = /^[(][0-9]{2}[)][-][(][0][0-9]{9}[)]$/;
    let input = document.getElementById("inp");
    if (regex.test(input.value)) {
        result.innerText = " Valid";
    } else result.innerText = " Invalid";
    input.focus();
}