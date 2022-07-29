let objAsciiUppercase = [
    {"A":	"01000001"},
    {"B":	"01000010"},
    {"C":	"01000011"},
    {"D":	"01000100"},
    {"E":	"01000101"},
    {"F":	"01000110"},
    {"G":	"01000111"},
    {"H":	"01001000"},
    {"I":	"01001001"},
    {"J":	"01001010"},
    {"K":	"01001011"},
    {"L":	"01001100"},
    {"M":	"01001101"},
    {"N":	"01001110"},
    {"Ñ":	"11010001"},
    {"O":	"01001111"},
    {"P":	"01010000"},
    {"Q":	"01010001"},
    {"R":	"01010010"},
    {"S":	"01010011"},
    {"T":	"01010100"},
    {"U":	"01010101"},
    {"Ú":	"11011010"},
    {"V":	"01010110"},
    {"W":	"01010111"},
    {"X":	"01011000"},
    {"Y":	"01011001"},
    {"Z":	"01011010"},
    {" ":   "00100000"}
];

// console.log(objAsciiUppercase);

const form = document.querySelector('#formText');
const input = document.querySelector('#inputText');
const containerResult = document.querySelector('.result')

const convertTextToBinary = () => {
    let value = input.value.toUpperCase();
    let valueToArray = value.split("")
    let result = [];
    
    for (let i = 0; i < valueToArray.length; i++) {
        let keys = objAsciiUppercase.filter(letter => letter[valueToArray[i][0]])
        result.push(keys)
    }
    console.log(result);
    containerResult.innerHTML = ""

    for (let j = 0; j < result.length; j++) {
        let resultBinary = result[j][0][valueToArray[j]]
        containerResult.innerHTML += `${resultBinary} `
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    convertTextToBinary()
})


