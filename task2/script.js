document.addEventListener("DOMContentLoaded", () => {
    function caseConverter(string, caseElement) {
        const words = string.trim().split(/\s+/);
        if (words.length === 0) return "";

        let newWord = "";
        const cleanWord = (word) => {
            return word.replace(/^[.,]+|[.,]+$/g, '');
        };

        switch (caseElement) {
            case "camelCase":
                newWord = cleanWord(words[0]).toLowerCase();
                for (let i = 1; i < words.length; i++) {
                    const cleanedWord = cleanWord(words[i]);
                    newWord += cleanedWord.charAt(0).toUpperCase() + cleanedWord.slice(1).toLowerCase();
                }
                return newWord;

            case "snake_case":
                newWord = cleanWord(words[0]).toLowerCase();
                for (let i = 1; i < words.length; i++) {
                    newWord += "_" + cleanWord(words[i]).toLowerCase();
                }
                return newWord;

            case "kebab-case":
                newWord = cleanWord(words[0]).toLowerCase();
                for (let i = 1; i < words.length; i++) {
                    newWord += "-" + cleanWord(words[i]).toLowerCase();
                }
                return newWord;

            case "PascalCase":
                newWord = cleanWord(words[0]).charAt(0).toUpperCase() + cleanWord(words[0]).slice(1).toLowerCase();
                for (let i = 1; i < words.length; i++) {
                    const cleanedWord = cleanWord(words[i]);
                    newWord += cleanedWord.charAt(0).toUpperCase() + cleanedWord.slice(1).toLowerCase();
                }
                return newWord;

            case "UPPER_CASE_SNAKE_CASE":
                newWord = cleanWord(words[0]).toUpperCase();
                for (let i = 1; i < words.length; i++) {
                    newWord += "_" + cleanWord(words[i]).toUpperCase();
                }
                return newWord;

            default:
                return string;
        }
    }

    const convertButton = document.getElementById("convertButton");
    const caseOptions = document.getElementById("caseOptions");
    const resultDiv = document.getElementById("result");
    convertButton.addEventListener("click", () => {
        const stringToConvert = document.getElementById("case_string").value;
        const selectedCase = caseOptions.value;
        if (!selectedCase) {
            resultDiv.textContent = "Please select a case option.";
            return;
        }
        resultDiv.textContent = caseConverter(stringToConvert, selectedCase);
    });
});
