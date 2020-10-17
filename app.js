var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberChar= ['1','2','3','4','5','6','7','8','9','0']
var sCharChar= ['!','@','#','$','%','^','&','*','(',')','-','_','=','+',']','[','{','}',':',';',',','<','.','>','?','/',]
var numOfChars = document.getElementById('numOfChars')
var pwCriteria = document.getElementById('passwordCriteria')
var upperCase = document.getElementById('upperCase')
var numbers = document.getElementById('numbers')
var sChars = document.getElementById('sChars')
var passwordDisplay = document.getElementById('passwordDisplay')


console.log(sChars)

pwCriteria.addEventListener('submit', e =>{
    e.preventDefault()
    var characterAmount = numOfChars.value
    var uppCase = upperCase.Checked
    var nums = numbers.Checked
    var spChars = sChars.Checked
    var password = generatePassword(characterAmount, uppCase, nums, spChars )
    passwordDisplay.innerText = password
})
console.log(characterAmount)

function generatePassword(characterAmount, upperCase, numbers, sChars ){
    let password= lowerCaseChar
}

console.log(lowerCaseChar)