import validator from './validator.js';

//console.log(validator);

const inputNumber = document.getElementById('cardnumber');
const inputDate = document.getElementById('date');
const inputcvv = document.getElementById('cvv');
const inputName = document.getElementById('holdername');
const payButton = document.getElementById('submit')
const goodCard = document.getElementById('valid');
const capa = document.getElementById('capa');
const check = document.getElementById('bien');
const equis = document.getElementById('mal');
const payment = document.getElementById("bigcontainer");
const cart = document.getElementById("cart");
const checkout = document.getElementById("change");


//BLOQUEANDO LAS TECLAS ALFABETICAS

inputNumber.addEventListener("keypress", function(evt) {
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
});
inputName.addEventListener("keypress", function(evt) {
    var ch = String.fromCharCode(evt.which);
    if(!(/[a-z A-Z]/.test(ch))) {
        evt.preventDefault();
    }
});
inputDate.addEventListener("keypress", function(evt) {
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9/]/.test(ch))) {
        evt.preventDefault();
    }
});
inputcvv.addEventListener("keypress", function(evt) {
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
});


//VALIDACION

document.getElementById("cardnumber").addEventListener("change", function() {
    let cardNumber = inputNumber.value;

//APLICAMOS VALIDATOR.JS
    validator.isValid(cardNumber);

    if (validator.isValid(cardNumber) == true) {
        check.style.display = 'block';
        equis.style.display = 'none';
        crdIncomplete.style.display = 'none';
    } else {
        check.style.display = 'none';
        equis.style.display = 'block';
    }

    //FRANQUICIA DE TARJETA
    validator.getIssuer(cardNumber);
    if (validator.getIssuer(cardNumber) == "JCB"){
        document.getElementById("jcb").style.display = "block";
        document.getElementById("diners").style.display = "none";
        document.getElementById("american").style.display = "none";
        document.getElementById("visa").style.display = "none";
        document.getElementById("mastercard").style.display = "none";
        document.getElementById("discover").style.display = "none"
    } else if (validator.getIssuer(cardNumber) == "Diners Club"){
        document.getElementById("diners").style.display = "block";
        document.getElementById("jcb").style.display = "none";
        document.getElementById("american").style.display = "none";
        document.getElementById("visa").style.display = "none";
        document.getElementById("mastercard").style.display = "none";
        document.getElementById("discover").style.display = "none"
    } else if (validator.getIssuer(cardNumber) == "American Express") {
        document.getElementById("american").style.display = "block";
        document.getElementById("jcb").style.display = "none";
        document.getElementById("visa").style.display = "none";
        document.getElementById("mastercard").style.display = "none";
        document.getElementById("discover").style.display = "none";
        document.getElementById("diners").style.display = "none"
    } else if (validator.getIssuer(cardNumber) == "Visa") {
        document.getElementById("visa").style.display = "block";
        document.getElementById("american").style.display = "none";
        document.getElementById("jcb").style.display = "none";
        document.getElementById("mastercard").style.display = "none";
        document.getElementById("discover").style.display = "none";
        document.getElementById("diners").style.display = "none"
    } else if (validator.getIssuer(cardNumber) == "MasterCard") {
        document.getElementById("mastercard").style.display = "block";
        document.getElementById("visa").style.display = "none";
        document.getElementById("american").style.display = "none";
        document.getElementById("jcb").style.display = "none";
        document.getElementById("discover").style.display = "none";
        document.getElementById("diners").style.display = "none"
    } else if (validator.getIssuer(cardNumber) == "Discover") {
        document.getElementById("discover").style.display = "block";
        document.getElementById("mastercard").style.display = "none";
        document.getElementById("visa").style.display = "none";
        document.getElementById("american").style.display = "none";
        document.getElementById("jcb").style.display = "none";
        document.getElementById("diners").style.display = "none"
    } else {
        document.getElementById("discover").style.display = "none";
        document.getElementById("mastercard").style.display = "none";
        document.getElementById("visa").style.display = "none";
        document.getElementById("american").style.display = "none";
        document.getElementById("jcb").style.display = "none";
        document.getElementById("diners").style.display = "none"
    }


// MASKIFY
    validator.maskify(cardNumber);
    document.getElementById('cardnumber').value = validator.maskify(cardNumber);

});

// MENSAJES DE VACIOS
const crdIncomplete = document.getElementById('crdincomplete');
const nameIncomplete = document.getElementById('chdincomplete');
const dateIncomplete = document.getElementById('dtincomplete');
const cvvIncomplete = document.getElementById('cvvincomplete');

payButton.addEventListener("click", function() {
        if (inputNumber.value == '') {
            crdIncomplete.style.display = 'block'
        }
        if (inputName.value == '') {
            nameIncomplete.style.display = 'block'
        }
        if (inputDate.value == '') {
            dateIncomplete.style.display = 'block'
        }
        if (inputcvv.value == '') {
            cvvIncomplete.style.display = 'block'
        }

        //PAGAR
        if (inputNumber.value != '' && check.style.display == 'block' && inputName.value != '' && inputDate.value != '' && inputcvv.value != '' ) {
            goodCard.style.display = 'block'
            capa.style.display = 'block'
        }
});


inputNumber.addEventListener("change", function() {
    if (inputNumber.value != '') {
        crdIncomplete.style.display = 'none';
        document.getElementById("numer").innerHTML = inputNumber.value;
    }
})
inputName.addEventListener("change", function() {
    if (inputName.value != '') {
        nameIncomplete.style.display = 'none';
        document.getElementById("titular").innerHTML = inputName.value;
    }
})
inputDate.addEventListener("change", function() {
    if (inputDate.value != '') {
        dateIncomplete.style.display = 'none';
        document.getElementById("fecha").innerHTML = inputDate.value;
    }
})
inputcvv.addEventListener("change", function() {
    if (inputcvv.value != '') {
        cvvIncomplete.style.display = 'none';
    }
})

// CUADROS DE RESPUESTA

document.getElementById('close2').addEventListener('click', function() {
    goodCard.style.display = 'none';
    capa.style.display = 'none'
})

document.getElementById('back').addEventListener('click', function() {
    payment.style.display = 'none';
    cart.style.display = 'block';
    checkout.style.display = 'block';
})

document.getElementById('change').addEventListener('click', function() {
    payment.style.display = 'grid';
    cart.style.display = 'none';
    checkout.style.display = 'none';
})

