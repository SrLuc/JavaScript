const input = document.querySelector("body > input");

function inserir(){
    let p = document.querySelector("body > p");
    p.innerHTML = input.value.length;
    p.style.color = "blue";
}

input.onchange = inserir;

