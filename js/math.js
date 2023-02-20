function getPin(){
        const pin = generateIn();
        const pinString = pin + '';
        if(pinString.length === 4){
                return pin;
        }else{
                return getPin();
        }

}

function generateIn(){
        const random = Math.round(Math.random()*10000);
        return random;
}

document.getElementById('btn-generate').addEventListener('click', function(){
        const pin = getPin()
        // console.log(pin)
        const displayPin = document.getElementById('display-pin');
        displayPin.value = pin;
})

 document.getElementById('calculator').addEventListener('click', function(event){
         const number = event.target.innerText;
         const typeNumberField = document.getElementById('type-number');

         const previousNumber = typeNumberField.value;

        if( isNaN(number)){
                 if(number === 'C'){
                        typeNumberField.value = '';
                 }
                 else if(number === '<'){
                       const digits = previousNumber.split('');
                       digits.pop();
                       const remainingDigits = digits.join('');
                       typeNumberField.value = remainingDigits;
                 }
        }else{
                
                const newNumber =  previousNumber + number;
                typeNumberField.value = newNumber;

        }

 })

 document.getElementById('btn-submit').addEventListener('click',function(){

        const displayPin = document.getElementById('display-pin');
        currentPin = displayPin.value;

        const typeNumberField = document.getElementById('type-number');
        currentTypeNumber = typeNumberField.value;

        const inCorrectPin = document.getElementById('incorrect-pin');
        const successPin = document.getElementById('success-pin');

        if(currentPin === currentTypeNumber){
                successPin.style.display = 'block'
                inCorrectPin.style.display = 'none';
        }else{
                
                inCorrectPin.style.display = 'block';
                successPin.style.display = 'none';
        }
         
 })
  