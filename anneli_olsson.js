
    let form = document.getElementById('quiz');
    form.addEventListener('submit', validate);

   function validate (event) {
    let valueFirstName = document.getElementById('firstname').value;
    let errorFirstName = document.getElementById('errorFirstName');
    let letters = /^[A-Za-z]+$/;
        
    if(valueFirstName === '' || (!isNaN(valueFirstName)) || !valueFirstName.match(letters)) {
    errorFirstName.innerText ='Please enter your first name (only letters)';
    errorFirstName.style.color = 'red';
    }

    else {
        errorFirstName.innerText ='';
    }

    let valueLn = document.getElementById('lastname').value;
    let errorLn = document.getElementById('errorLastName');
    if(valueLn === '' || (!isNaN(valueLn)) || !valueLn.match(letters)) {
        errorLn.innerText = 'Please enter your last name (only letters)';
        errorLn.style.color = 'red';
    }
    else {
        errorLn.innerText ='';

    }

    let valueEmail = document.getElementById('email').value;
    let errorEmail = document.getElementById('errorEmail');
    if( valueEmail === '' || ( valueEmail.indexOf('@') === -1) || (valueEmail.indexOf('.') === -1 ) ) {
        errorEmail.innerText = 'Please enter a valid email adress';
        errorEmail.style.color = 'red';
    }
    else {
        errorEmail.innerText ='';
    }

    let errorfrontEnd = document.getElementById('errorfrontEnd');
    let checkedCss = document.getElementById('frontEndCss').checked;
    let checkedCplusPlus = document.getElementById('frontEndc++').checked;
    let checkedJavaScript = document.getElementById('frontEndJs').checked;

    if(checkedCss === false && checkedCplusPlus === false && checkedJavaScript === false) {
        errorfrontEnd.innerText = 'Please select an option';
        errorfrontEnd.style.color = 'red';
                    }
    else {errorfrontEnd.innerText ='';
    }

    let errorFruit = document.getElementById('errorFruit');
    let checkedBlueSunset = document.getElementById('sunsetMarsBlue').checked;
    let checkedArmpit = document.getElementById('sweatArmpit').checked;
    let checkedApple = document.getElementById('fruitApple').checked;
    let checkedAubergine = document.getElementById('fruitAubergine').checked;
    let checkedStrawBerry = document.getElementById('fruitStrawberry').checked;
    let checkedKiwi = document.getElementById('fruitKiwi').checked;
    
    if(checkedApple === false && checkedAubergine === false && checkedStrawBerry === false && checkedKiwi === false) {
        errorFruit.innerText = 'Please select at least one option';
        errorFruit.style.color = 'red';
    }
    else {
        errorFruit.innerText ='';
    }    
    
    let validateFirstName = valueFirstName !== '' && isNaN(valueFirstName);
    let validateLn = valueLn !== '' && isNaN(valueLn);
    let validateEmail = valueEmail !== '' && valueEmail.indexOf('@') !== -1 && valueEmail.indexOf('.') !== -1;
    let validatefrontEnd = checkedCss === true || checkedCplusPlus === true || checkedJavaScript === true;
    let validateFruit = checkedApple === true || checkedAubergine === true || checkedStrawBerry === true || checkedKiwi === true; 

    if(validateFirstName === true && validateLn === true && validateEmail === true && validatefrontEnd === true && validateFruit === true) {
        alert('The quiz was succussfully filled out!');
        let showAnswers = document.getElementById('showAnswers');
        let showAnswersHeader = document.getElementById('showAnswersHeader');
    
        showAnswersHeader.innerText = 'The correct answers are:';
        showAnswers.innerText = 'Blue\nThe armpit\nC++\nApple, strawberry, kiwi';

    let score = 0;
    let showScore = document.getElementById('showScore');

    if(validateFirstName === true && validateLn === true && validateEmail === true && validatefrontEnd === true && validateFruit === true && checkedBlueSunset === true) {
        score = score + 1
        showScore.innerText = 'Your result is ' + score + '/4';
        showScore.style.backgroundColor = 'yellow';
    }
    
    if(validateFirstName === true && validateLn === true && validateEmail === true && validatefrontEnd === true && validateFruit === true && checkedArmpit === true) {
        score = score + 1
        showScore.innerText = 'Your result is ' + score + '/4';
        showScore.style.backgroundColor = 'yellow';
    }

    if(validateFirstName === true && validateLn === true && validateEmail === true && validatefrontEnd === true && validateFruit === true && checkedCplusPlus === true) {
        score = score + 1
        showScore.innerText = 'Your result is ' + score + '/4';
        showScore.style.backgroundColor = 'yellow';
    }
          
    if(validateFirstName === true && validateLn === true && validateEmail === true && validatefrontEnd === true && validateFruit === true && checkedStrawBerry === true && checkedApple === true && checkedKiwi === true && checkedAubergine === false) {
        score = score + 1
        showScore.innerText = 'Your result is ' + score + '/4';
        showScore.style.backgroundColor = 'yellow';
    }

    if(validateFirstName === true && validateLn === true && validateEmail === true && validatefrontEnd === true && validateFruit === true && score < 1) {
        showScore.innerText = 'Your result is 0/4';
        showScore.style.backgroundColor = 'yellow';  
    }
    
    score = 0;
    }

    else {showAnswersHeader.innerText = '';
    showAnswers.innerText = ''; 
    showScore.innerText = ''; 
}


    event.preventDefault();
    return;
   }

   

 

   
   
    
    
    
    
    
        
    


      


  

















