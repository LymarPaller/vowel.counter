function countVowels() {
    let inputText = document.getElementById("word-input").value;
    let lowerCaseInput = inputText.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < lowerCaseInput.length; i++) {
        let currentChar = lowerCaseInput.charAt(i);
        if (isVowel(currentChar)) {
            vowelCount++;
        }
    }

    document.getElementById("result").innerHTML = `Vowel Count: ${vowelCount}`;
}


function isVowel(char) {
    
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.indexOf(char) >= 0;
}