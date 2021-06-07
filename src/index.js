import validator from './validator.js';

console.log(validator);

const inputNumber = document.getElementById('cardnumber');
const inputDate = document.getElementById('date');
const inputcvv = document.getElementById('cvv');
const inputName = document.getElementById('holdername');
const payButton = document.getElementById('submit')
//const container = document.getElementById('bigcontainer');
// const goodCard = document.getElementById('valid');
// const badCard = document.getElementById('invalid');

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
    //console.log(cardNumber);
    //console.log(typeof cardNumber);
    let intoArray = cardNumber.split('').reverse().map(Number);

    // multiplicamos las posiciones pares x2
    intoArray = intoArray.map((num, i) => {
        if (i % 2 == 1) {
            return num*2
        } else {
            return num;
        }
    });

    // sumamos los numeros mayores iguales a 10

    intoArray = intoArray.map((num) => {
        if (num >= 10) {
            return num -= 9;
        } else {
            return num
        }
    })

    console.log(intoArray);

    //Ahora sumamos los componentes del array

    const totalnumber = intoArray.reduce((accumulator, currentvalue) => {
        return accumulator + currentvalue;
    })

    console.log(totalnumber);

    // Ahora validamos si es multimplo de diez

    function validez() {
        const check = document.getElementById('bien');
        const equis = document.getElementById('mal')
        if (totalnumber % 10 == 0) {
           check.style.display = 'block';
           equis.style.display = 'none';
           crdIncomplete.style.display = 'none';
        } else {
            check.style.display = 'none';
            equis.style.display = 'block';

        }

    }

    validez();



    //OCULTAR CARACTERES
    function asteriscos() {
        let secret = inputNumber.value;
        let secretNumber = secret.split('')
        secretNumber = secretNumber.map((num,i) => {
            if (i < (secretNumber.length - 4)) {
                return '*';
            } else {
                return num
            }
        })
    
        let finalNumber = secretNumber.join('');
        document.getElementById('cardnumber').value = finalNumber;
        console.log(secret);
    }

    asteriscos()

});

// MENSAJES DE VACIOS
const crdIncomplete = document.getElementById('crdincomplete');
const nameIncomplete = document.getElementById('chdincomplete');
const dateIncomplete = document.getElementById('dtincomplete');
const cvvIncomplete = document.getElementById('cvvincomplete');

payButton.addEventListener("click", function() {

        if (inputNumber.value == '') {
            crdIncomplete.style.display = 'block'
        } /*else {
            crdIncomplete.style.display = 'none';
        }*/

        if (inputName.value == '') {
            nameIncomplete.style.display = 'block'
        } /*else {
            nameIncomplete.style.display = 'none';
        }*/

        if (inputDate.value == '') {
            dateIncomplete.style.display = 'block'
        } /*else {
            dateIncomplete.style.display = 'none';
        }*/

        if (inputcvv.value == '') {
            cvvIncomplete.style.display = 'block'
        } /*else {
            cvvIncomplete.style.display = 'none';
        }*/
});



inputName.addEventListener("change", function() {
    if (inputName.value != '') {
        nameIncomplete.style.display = 'none';
    }
})

inputDate.addEventListener("change", function() {
    if (inputName.value != '') {
        dateIncomplete.style.display = 'none';
    }
})

inputcvv.addEventListener("change", function() {
    if (inputName.value != '') {
        cvvIncomplete.style.display = 'none';
    }
})