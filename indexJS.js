function countVowels() {
    var inputText = document.getElementById("word-input").value;
    var vowelCount = 0;

    for (var i = 0; i < inputText.length; i++) {
        var currentChar = inputText.charAt(i);
        if (isVowel(currentChar)) {
            vowelCount++;
        }
    }

    document.getElementById("result").innerHTML = `Vowel Count: ${vowelCount}`;
}

function isVowel(char) {
    
    var vowels = ["a", "e", "i", "o", "u" , "A", "E", "I", "O", "U"];

    if (vowels.indexOf(char) >= 0) {
        return true;
    } else {
        return false;
    }
}