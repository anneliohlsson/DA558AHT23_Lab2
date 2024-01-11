let form = document.getElementById('quiz');
    form.addEventListener('submit', validate);

    function validate (event) {


//Validate first and last name input fields

let letters = /^[A-Za-z]+$/;

    //Full name validation

        function NameValidation(nameField, errorText) {
    if(document.getElementById(nameField).value === '' || (!isNaN(document.getElementById(nameField).value)) || !document.getElementById(nameField).value.match(letters)) 
    { 
        document.getElementById(errorText).innerText = 'Please use only letters'
        document.getElementById(errorText).style.color = 'red'
        return false;
    
    } 

    else {
        document.getElementById(errorText).innerText = ''
        return true;
    }

}

    //Show error message for First name

    let validateFirstname = NameValidation('firstname', 'errorFirstName');

    //Show error message for Last name

    let validateLastname = NameValidation('lastname', 'errorLastName');
    
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
function validateQuestions(questionId, errorTextQuestions) {
    
    if(document.querySelector(`input[name="${questionId}"]:checked`)) {

        document.getElementById(errorTextQuestions).innerText = ''
        
        return true;
    }

    else {

        document.getElementById(errorTextQuestions).innerText ='Please select an option';
        document.getElementById(errorTextQuestions).style.color = 'red'
        return false;

}

}

//Validate Question 3 and show error message if not correct

 let validateQuestion3 = validateQuestions('frontEnd', 'errorfrontEnd');

//Validate Question 4 and show error message if not correct

let validateQuestion4 = validateQuestions('fruit', 'errorFruit');

score = 0
    
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

function calcScoreRadio(questionId, correctValue) {

    if(isRadioAnswerCorrect(questionId, correctValue) === true) {
    
        score = score + 1;
    }

   
    return score;

}   
function calcScoreCheckbox(questionId, correctValues) {

    if(isCheckboxAnswerCorrect(questionId, correctValues) === true) {
    
        score = score + 1;
    }

   
    return score;

}   

calcScoreCheckbox('fruit', correctValuesFruit);
calcScoreRadio('sunsetMars', document.getElementById('sunsetMarsBlue').value);
calcScoreRadio('sweatGlands', document.getElementById('sweatArmpit').value);
calcScoreRadio('frontEnd', document.getElementById('frontEndc++').value);


//If validation is ok, show message about the form being sucessfully filled out and also show score and answers

if (validateFirstname === true && validateLastname === true && emailValidation() === true && validateQuestion3 === true && validateQuestion4 === true) {
    
   //Show success message

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