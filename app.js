const upperset ="ABCDEFGHIJKLMOPQRSTUVWXYZ" 
const lowerset ="abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*_"

//selectors
const passbox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case") 
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")


const getRandomData =(dataSet) =>{

    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password ="")=>{

    if(upperInput.checked){
        password += getRandomData(upperset)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerset)

    }
    if(numberInput.checked){
       password += getRandomData(numberSet)

    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }

    if(password.length < totalChar.value){
        return generatePassword(password)
    }
      
    passbox.innerText = truncateString(password, totalChar.value)

}


   generatePassword();

   document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
   )


   function truncateString(str,num){

    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
   }
