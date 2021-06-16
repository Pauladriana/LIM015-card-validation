const validator = {

isValid(creditCardNumber) {
        let toString = creditCardNumber.toString()
        let intoArray = toString.split('').reverse().map(Number);
        intoArray = intoArray.map((num, i) => {
            if (i % 2 == 1) {
                return num*2
            } else {
                return num;
            }
        });
        intoArray = intoArray.map((num) => {
            if (num >= 10) {
                return num -= 9;
            } else {
                return num
            }
        });
        const totalnumber = intoArray.reduce((accumulator, currentvalue) => {
            return accumulator + currentvalue;
        });
        if (totalnumber % 10 == 0) {
            return true;
        } else {
            return false;
        }
},

getIssuer(creditCardNumber) {
    let toString = creditCardNumber.toString();
    let twoNumbers = toString.slice(0,2);
    let threeNumbers = toString.slice(0,3);
    let fourNumbers = toString.slice(0,4);

    if (toString[0] == 3) {
        if (twoNumbers == 36 || twoNumbers == 38) {
            return "Diners Club"
        } else if (twoNumbers == 34 || twoNumbers == 37) {
            return "American Express"
        } else if (threeNumbers == 300 || threeNumbers == 301 || threeNumbers == 302 || threeNumbers == 303 || threeNumbers == 304 || threeNumbers == 305) {
            return "Diners Club"
        } else {
            return "JCB";
        }
    }
    if (toString[0] == 4) {
        return "Visa"
    }

    if (twoNumbers == 51 || twoNumbers == 52 || twoNumbers == 53 || twoNumbers == 54 || twoNumbers == 55) {
        return "Mastercard"
    }

    if (fourNumbers == 1800 || fourNumbers == 2131) {
        return "JCB"
    }
    if (fourNumbers == 2014 || fourNumbers == 2149) {
        return "Diners Club"
    }
    if (fourNumbers == 6011) {
        return "Discover"
    }
},

maskify(creditCardNumber) {
    let toString = creditCardNumber.toString()
    let secretNumber = toString.split('')
    secretNumber = secretNumber.map((num,i) => {
            if (i < (secretNumber.length - 4)) {
                return '#';
            } else {
                return num
            }
        })
        let finalNumber = secretNumber.join('');
        return finalNumber;
},

}

export default validator;
