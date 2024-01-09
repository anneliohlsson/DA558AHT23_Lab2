let form = document.getElementById('quiz');
    form.addEventListener('submit', validate);

    function validate (event) {


//Validate first and last name input fields

let letters = /^[A-Za-z]+$/;

    //First name validation

    let valueFirstName = document.getElementById('firstname').value;
    let errorFirstName = document.getElementById('errorFirstName');

    function firstNameValidation() {
    if(valueFirstName === '' || (!isNaN(valueFirstName)) || !valueFirstName.match(letters)) 
    { 
        return false;
    
    } 

    else {
        return true;
    }
}

    //Show error message for First name
    if(firstNameValidation() === false) {

    errorFirstName.innerText ='Please enter your first name (only letters)';
    errorFirstName.style.color = 'red';}

    else {
    errorFirstName.innerText =''; }

    //Last name validation
    let valueLn = document.getElementById('lastname').value;
    let errorLn = document.getElementById('errorLastName');
    
    function lastNameValidation() {
        if(valueLn === '' || (!isNaN(valueLn)) || !valueLn.match(letters)) {
            return false;
        }

        else {
            return true;
        }

    }

    //Show error message for Last name

    if(lastNameValidation() === false) {

        errorLn.innerText = 'Please enter your last name (only letters)';
        errorLn.style.color = 'red';

    }

    else {
        errorLn.innerText ='';

    }
//Validate email input field

let valueEmail = document.getElementById('email').value;
let errorEmail = document.getElementById('errorEmail');

function emailValidation() {

    if( valueEmail === '' || ( valueEmail.indexOf('@') === -1) || (valueEmail.indexOf('.') === -1 ) ) {
        return false;
    }

    else {
        return true;
    }

}

//Show error message for email

if(emailValidation() === false) {

    errorEmail.innerText = 'Please enter a valid email adress';
        errorEmail.style.color = 'red';
}

else {
    errorEmail.innerText ='';

}

//Validate questions
function validateQuestions(questionId) {
    
    if(document.querySelector(`input[name="${questionId}"]:checked`)) {
        return true;
    }

    else {
        return false;

}

}

//Validate Question 3 and show error message if not correct

 let validateQuestion3 = validateQuestions('frontEnd');
 let errorfrontEnd = document.getElementById('errorfrontEnd');

 if(validateQuestion3 === false) {
        errorfrontEnd.innerText = 'Please select an option';
        errorfrontEnd.style.color = 'red';
 }

 else {
    errorfrontEnd.innerText ='';
 }

//Validate Question 4 and show error message if not correct

let validateQuestion4 = validateQuestions('fruit');
let errorFruit = document.getElementById('errorFruit');
if(validateQuestion4 === false) {
    errorFruit.innerText = 'Please select an option';
    errorFruit.style.color = 'red';
}

else {
errorFruit.innerText ='';
}

    
//Check radiobutton questions for correct answer

    function isRadioAnswerCorrect(questionId, correctValue) {
    const userAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
    return userAnswer ? userAnswer.value.toLowerCase() === correctValue.toLowerCase() : false;
}

//Check checkbox questions for correct answers

    function isCheckboxAnswerCorrect(questionId, correctValues) {
        const checkedCheckboxes = []

        document.querySelectorAll(`input[name="${questionId}"]:checked`)
        .forEach(checkbox => {
            checkedCheckboxes.push(checkbox.value.toLowerCase());
            
        });

        return arraysEqual(checkedCheckboxes, correctValues.map(value => value.toLowerCase()));

    }

    function arraysEqual(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }


//Check Question 1 for correct answer
const checkQuestionSunset = isRadioAnswerCorrect('sunsetMars', document.getElementById('sunsetMarsBlue').value);


//Check Question  for correct answer
const checkQuestionSweatGlands = isRadioAnswerCorrect('sweatGlands', document.getElementById('sweatArmpit').value);


//Check Question 3 for correct answer
const checkQuestionFrontend = isRadioAnswerCorrect('frontEnd', document.getElementById('frontEndc++').value);


//Check Question 4 for correct answers
const correctValuesFruit = ["apple", "strawberry", "kiwi"];
const checkQuestionFruit = isCheckboxAnswerCorrect('fruit', correctValuesFruit);


//calculate score

score = 0

if(checkQuestionSunset === true) {
    score = score + 1;
} 

if(checkQuestionSweatGlands === true) {
    score = score + 1;
} 

if(checkQuestionFrontend === true) {
    score = score + 1;
} 

if(checkQuestionFruit === true) {
    score = score + 1;
} 

//If validation is ok, show alert about the form being sucessfully filled out and also show score and answers

if (firstNameValidation() === true && lastNameValidation() === true && emailValidation() === true && validateQuestion3 === true && validateQuestion4 === true) {
    
   //Show sucess message

   document.getElementById('success').innerText = 'The quiz was successfully filled out!';

    //Show score

    let showScore = document.getElementById('showScore');

    showScore.innerText = 'Your result is ' + score + '/4';
    showScore.style.backgroundColor = 'yellow';

    //Show answers

    let showAnswers = document.getElementById('showAnswers');
    showAnswersHeader.innerText = 'The correct answers are:\n';
    showAnswers.innerText = 'Blue\nThe armpit\nC++\nApple, Strawberry, Kiwi';

}

else {
    document.getElementById('success').innerText = '';
    showAnswersHeader.innerText = '';
    showAnswers.innerText = ''; 
    showScore.innerText = '';
}

event.preventDefault();
return;
}