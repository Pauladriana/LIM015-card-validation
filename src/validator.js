const validator = {

isValid(creditCardNumber) {
        let intoArray = creditCardNumber.split('').reverse().map(Number);
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

maskify(creditCardNumber) {
    let secretNumber = creditCardNumber.split('')
    secretNumber = secretNumber.map((num,i) => {
            if (i < (secretNumber.length - 4)) {
                return '#';
            } else {
                return num
            }
        }) 
        let finalNumber = secretNumber.join('');
        return finalNumber;
        
}


}

export default validator;
