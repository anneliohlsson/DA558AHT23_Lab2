
   const form = document.getElementById('mediaForm');
      form.addEventListener('submit', function (event) { validate( form, event )
   })
   function validate (form, event ) {
    let valueFirstName = document.getElementById('firstname').value;
    let errorFirstName = document.getElementById('errorFirstName')
        if(valueFirstName === '' || (!isNaN(valueFirstName))) {
        errorFirstName.innerText ='Please enter your first name (only letters)'
        errorFirstName.style.color = 'red'
    }
    else {
        errorFirstName.innerText =''
    }

    valueLn = document.getElementById('lastname').value;
    errorLn = document.getElementById('errorLastName')
    if(valueLn === '' || (!isNaN(valueLn))) {
        errorLn.innerText = 'Please enter your last name (only letters)'
        errorLn.style.color = 'red'
    }
    else {
        errorLn.innerText =''

    }

    valueEmail = document.getElementById('email').value;
    errorEmail = document.getElementById('errorEmail')
    if( valueEmail === '' || ( valueEmail.indexOf('@') === -1) || 
    ( valueEmail.indexOf('.') === -1 ) ) {
        errorEmail.innerText = 'Please enter a valid email adress'
        errorEmail.style.color = 'red'
    }
    else {
        errorEmail.innerText =''
    }

    errorMediaFormat = document.getElementById('errorMediaFormat')
    
        let checkedAudio = document.getElementById('audio').checked;
        let checkedVisual = document.getElementById('visual').checked;
        let checkedAudioVisual = document.getElementById('audiovisual').checked;

        if(checkedAudio === false && checkedVisual === false && checkedAudioVisual === false) {
            errorMediaFormat.innerText = 'Please select an option';
            errorMediaFormat.style.color = 'red';
                    }
        else {
            errorMediaFormat.innerText =''
    }

    errorMediaChannel = document.getElementById('errorMediaChannels')

    let checkedTv = document.getElementById('tv').checked
    let checkedRadio = document.getElementById('radio').checked
    let checkedVideo = document.getElementById('video').checked
    let checkedSocialMeia = document.getElementById('socialMedia').checked
    let checkedNone = document.getElementById('none').checked

    if(checkedTv === false && checkedRadio === false && checkedVideo === false && checkedSocialMeia === false && checkedNone === false){
        errorMediaChannel.innerText = 'Please select at least one option';
        errorMediaChannel.style.color = 'red';
    }
    else {
        errorMediaChannel.innerText =''
    }    
    
    let validateFirstName = valueFirstName !== '' && isNaN(valueFirstName)
    let validateLn = valueLn !== '' && isNaN(valueLn)
    let validateEmail = valueEmail !== '' && valueEmail.indexOf('@') !== -1 && valueEmail.indexOf('.') !== -1
    let validateMediaFormat = checkedAudio === true || checkedVisual === true || checkedAudioVisual === true
    let validateMediaChannels = checkedTv === true || checkedRadio === true || checkedVideo === true || checkedSocialMeia === true || checkedNone === true

   if(validateFirstName === true && validateLn === true && validateEmail === true && validateMediaFormat === true && validateMediaChannels === true) {
        alert('Information succussfully filled out!')
    }
   else {
       alert('Information missing')
    }

      
    
    event.preventDefault();
    return
   }

 

   
   
    
    
    
    
    
        
    


      


  


















