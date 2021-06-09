const validator = {

  isValid(creditCardNumber) {
        const check = document.getElementById('bien');
        const equis = document.getElementById('mal');
        const crdIncomplete = document.getElementById('crdincomplete');
        if (creditCardNumber % 10 == 0) {
            check.style.display = 'block';
            equis.style.display = 'none';
            crdIncomplete.style.display = 'none';
        } else {
            check.style.display = 'none';
            equis.style.display = 'block';
        }
  },
  maskify(creditCardNumber) {
    creditCardNumber = creditCardNumber.map((num,i) => {
            if (i < (creditCardNumber.length - 4)) {
                return '*';
            } else {
                return num
            }
        })
        let finalNumber = creditCardNumber.join('');
        document.getElementById('cardnumber').value = finalNumber;
  }


  }

export default validator;
