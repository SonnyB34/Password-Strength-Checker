
  const password = prompt('Enter Password!');
  passwordStrength(password);




function passwordStrength(password) {


    // Check strength score
let strengthScore = 0;

    // Check if empty string

   if (!password) {
    alert('INVALID PASSWORD! Please Try Again!');
    window.location.reload();
   }

    // Atleast 10 characters

    if(password.length >= 10) {
        strengthScore++
        document.getElementById('rule-result-1').innerHTML = '<img src="assets/smile.png" width="60px">';
        document.getElementById('list-item-1').style.backgroundColor = "#14A76C";
    } else {
        document.getElementById('rule-result-1').innerHTML = '<img src="assets/thumbs-down.png" width="60px">';
        document.getElementById('list-item-1').style.backgroundColor = "#FF652F";
    }

    //Atleast one lowercase character
    //Atleast one uppercase character
    //Atleast one number

    let lowerChar = false;
    let upperChar = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    let hasWordPassword = false;

    const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "()", "_", "+", "[", "]", "{", "}", "?", ":", ";", "|", '/', '~'];
    const word = 'Password';

    //iterate through password characters

    for(let i = 0; i < password.length; i++) {
        for(let j = 0; j < specialChar.length; j++) {
            
    let special = specialChar[j];
    let char = password[i];
    if(char >= 'a' && char <= 'z') {
        lowerChar = true;
        
    }
    if(char >= 'A' && char <= 'Z') {
        upperChar = true;
       
    }
    if(char >= 0 && char <= 9) {
        hasNumber = true;
        
    }
    if(char === special) {
        hasSpecialChar = true;
        
    }
    if (password.includes(word)) {
        hasWordPassword = true;
   }
 }
}
   // Atleast One lowerCase character

   if (lowerChar) {
    strengthScore++;
    document.getElementById('rule-result-2').innerHTML = '<img src="assets/smile.png" width="60px">';
    document.getElementById('list-item-2').style.backgroundColor = "#14A76C";
   } else {
    document.getElementById('rule-result-2').innerHTML = '<img src="assets/thumbs-down.png" width="60px">';
    document.getElementById('list-item-2').style.backgroundColor = "#FF652F";
   }

   //Atleast One upperCase character

   if (upperChar) {
    strengthScore++
    document.getElementById('rule-result-3').innerHTML = '<img src="assets/smile.png" width="60px">';
    document.getElementById('list-item-3').style.backgroundColor = "#14A76C";
   } else {
    document.getElementById('rule-result-3').innerHTML = '<img src="assets/thumbs-down.png" width="60px">';
    document.getElementById('list-item-3').style.backgroundColor = "#FF652F";
   }

   //Has Atleast One Number

   if (hasNumber) {
    strengthScore++
    document.getElementById('rule-result-4').innerHTML = '<img src="assets/smile.png" width="60px">';
    document.getElementById('list-item-4').style.backgroundColor = "#14A76C";
   } else {
    document.getElementById('rule-result-4').innerHTML = '<img src="assets/thumbs-down.png" width="60px">';
    document.getElementById('list-item-4').style.backgroundColor = "#FF652F";
   }


  // Has Atleast One Special Character

    
    if (hasSpecialChar) {
        strengthScore++
        document.getElementById('rule-result-5').innerHTML = '<img src="assets/smile.png" width="60px">';
        document.getElementById('list-item-5').style.backgroundColor = "#14A76C";
    } else {
        document.getElementById('rule-result-5').innerHTML = '<img src="assets/thumbs-down.png" width="60px">';
        document.getElementById('list-item-5').style.backgroundColor = "#FF652F";
    }

    // Should not have the word 'Password'

    if (hasWordPassword) {
        document.getElementById('rule-result-6').innerHTML = '<img src="assets/thumbs-down.png" width="60px">';
        document.getElementById('list-item-6').style.backgroundColor = "#FF652F";
     } else { 
        strengthScore++
        document.getElementById('rule-result-6').innerHTML = '<img src="assets/smile.png" width="60px">';
        document.getElementById('list-item-6').style.backgroundColor = "#14A76C";
        
        
        
    }

    if (strengthScore <= 3) /*weak*/{
    document.getElementById('strength-image').innerHTML = '<img src="assets/frustrated.png" height="160px">';
    document.getElementById('heading').style.color = "#FF652F";
    document.getElementById('strength-word').innerHTML = '<span>WEAK!</span>';
    document.getElementById('strength-word').style.color = "#FF652F";
    } else if (strengthScore <= 5)/*moderate*/{
    document.getElementById('strength-image').innerHTML = '<img src="assets/face.png" height="160px">';
    document.getElementById('heading').style.color = "#FFE400";
    document.getElementById('strength-word').innerHTML = '<span>MODERATE!</span>';
    document.getElementById('strength-word').style.color = "#FFE400";
    } else if (strengthScore === 6)/*strong*/ {
    document.getElementById('strength-image').innerHTML = '<img src="assets/cool.png" height="160px">';
    document.getElementById('heading').style.color = "#14A76C";
    document.getElementById('strength-word').innerHTML = '<span>STRONG!</span>';
    document.getElementById('strength-word').style.color = "#14A76C";
    }
     console.log(strengthScore)
    
     
  } 

  
//<img src="assets/smile.png" width="60px">
//<img src="assets/thumbs-down.png" width="60px">