var textInput = 'helloooo pumpkin';
const vowels = ['e', 'o', 'u', 'i', 'k'];
let resultArray = [];

for (let a=0; a<textInput.length; a++){
    let text = textInput[a];
    console.log('On position: ' + a + ' there is letter ' + text);

    for (let i=0; i<vowels.length; i++){
        var vowel = vowels[i];
        if (text === vowel){
            console.log('vowel in string is: ' + vowel);
            console.log(text , '  position is: ' , i);
        }
            if (text === 'e'){
                text = 'e';
                resultArray.push(text);
            } 
            
            if (text === 'u'){
                text = 'u';
                resultArray.push(text);
            }
    }
}
    
console.log(resultArray);
console.log(textInput.length);
console.log(resultArray.length);

// let resultString = resultArray.toUpperCase();
// console.log(resultString.join('  '));



