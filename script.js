let tipo = document.getElementById('tipo_seguro')
let precio = document.getElementById('precio_seguro')
let cuadro = document.getElementById('datos')


function ShowSelected() {

    cuadro.classList.add('borde');

    /* Para obtener el valor */
    let cod = document.getElementById("producto").value;
    precio.innerText = "Precio $ " + cod


    /* Para obtener el texto */
    let combo = document.getElementById("producto");
    let selected = combo.options[combo.selectedIndex].text;
    tipo.innerText = "Tipo de seguro: " + selected
}