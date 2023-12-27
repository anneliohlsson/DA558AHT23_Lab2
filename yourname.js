
   const form = document.getElementById('mediaForm');
      form.addEventListener('submit', function (event) { validate( form, event )
   })
   function validate (form, event ) {
    let value = document.getElementById('firstname').value;
    let error = document.getElementById('errorFirstName')
        if(value === '') {
        error.innerText ='Please enter your first name'
        error.style.color = 'red'
    }
    else {
        error.innerText =''
    }

    value = document.getElementById('lastname').value;
    error = document.getElementById('errorLastName')
    if(value === '') {
        error.innerText = 'Please enter your last name'
        error.style.color = 'red'
    }
    else {
        error.innerText =''

    }

    value = document.getElementById('email').value;
    error = document.getElementById('errorEmail')
    if( value === '' || ( value.indexOf('@' === -1)) || 
    ( value.indexOf('.') === -1 ) ) {
        error.innerText = 'Please enter a valid email adress'
        error.style.color = 'red'
    }
    else {
        error.innerText =''
    }

    error = document.getElementById('errorMediaFormat')
    
        let checkedAudio = document.getElementById('audio').checked;
        let checkedVisual = document.getElementById('visual').checked;
        let checkedAudioVisual = document.getElementById('audiovisual').checked;

        if(checkedAudio === false && checkedVisual === false && checkedAudioVisual === false) {
            error.innerText = 'Please select an option';
            error.style.color = 'red';
                    }
        else {
            error.innerText =''
    }

    error = document.getElementById('errorMediaChannels')

    let checkedTv = document.getElementById('tv').checked
    let checkedRadio = document.getElementById('radio').checked
    let checkedVideo = document.getElementById('video').checked
    let checkedSocialMeia = document.getElementById('socialMedia').checked
    let checkedNone = document.getElementById('none').checked

    if(checkedTv === false && checkedRadio === false && checkedVideo === false && checkedSocialMeia === false && checkedNone === false){
        error.innerText = 'Please select at least one option';
        error.style.color = 'red';
    }
    else {
        error.innerText =''
    }    
        event.preventDefault();
    return;
   }

 

   
   
    
    
    
    
    
        
    


      

   
   const lastname = document.getElementById('lastname').value;
   const email = document.getElementById('email').value;


  


















