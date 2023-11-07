const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const form = document.querySelector('#form');
const btncal = document.querySelector('#btn_cal');
const presult = document.querySelector('#result');

//sobre el boton
btncal.addEventListener('click', clickboton);
//sobre el form
//form.addEventListener('submit', clickboton);

function clickboton(event){
    let ingreso1 = parseInt(input1.value);
    let ingreso2 = parseInt(input2.value);
    //el preventDefault evita que el form envie los datos, evita recargar la pagina
    //event.preventDefault();

    const sumavar = ingreso1 + ingreso2;
    presult.innerText = "Resultado: "+sumavar;
}