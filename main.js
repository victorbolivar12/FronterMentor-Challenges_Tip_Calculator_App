const tipButton = document.getElementsByName("tipbutton");

/*----- variables---*/
var tipAmounts = document.getElementById("displayamountstip");
var tip;
var totalPerson = document.getElementById("displaytotalperson");


tipButton.forEach(function(boton){
    boton.addEventListener('click', function(){
        setTip(boton.innerText);
        calculator();
        console.log(tipAmounts);
    });
});

function setTip(num){
    switch (num) {
        case '5%':
            tip = 0.05;
            break
        case '10%':
            tip = 0.10;
            break;
        case '15%':
            tip = 0.15;
            break
        case '25%':
            tip = 0.25;
             break
        case '50%':
            tip = 0.50;
            break;
    }
}

function calculator(){
    let numPerson = document.getElementById("inputpeaple").value;
    let bill = document.getElementById("inputbill").value;
    tipAmounts = (bill * tip) / numPerson;
}