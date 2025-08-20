document.addEventListener('DOMContentLoaded', () => {
    const arrayInput = document.getElementById('arrayInput');
    const operationSelect = document.getElementById('operationSelect');
    const resultDiv = document.getElementById('result');

    const findMin = (arr) => {
        if (arr.length === 0) return 'N/A';
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    };

    const findMax = (arr) => {
        if (arr.length === 0) return 'N/A';
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    };

    const arraySum = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    };

    const removeDuplicates = (arr) => {
        const uniqueArr = [];
        for (let i = 0; i < arr.length; i++) {
            let isDuplicate = false;
            for (let j = 0; j < uniqueArr.length; j++) {
                if (arr[i] === uniqueArr[j]) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) {
                uniqueArr[uniqueArr.length] = arr[i];
            }
        }
        return uniqueArr;
    };

    const parseInputToArray = () => {
        const inputText = arrayInput.value;
        if (!inputText) return [];

        const parts = inputText.split(',');
        const numbers = [];
        for (let i = 0; i < parts.length; i++) {
            const trimmedPart = parts[i].trim();
            if (trimmedPart !== '') {
                const num = Number(trimmedPart);
                if (!isNaN(num)) {
                    numbers[numbers.length] = num;
                }
            }
        }
        return numbers;
    };

    const updateResult = () => {
        const numbers = parseInputToArray();
        const operation = operationSelect.value;
        let resultText = 'Result will be displayed here.';

        if (operation && numbers.length > 0) {
            let result;
            switch (operation) {
                case 'findMin':
                    result = `Minimum: ${findMin(numbers)}`;
                    break;
                case 'findMax':
                    result = `Maximum: ${findMax(numbers)}`;
                    break;
                case 'arraySum':
                    result = `Sum: ${arraySum(numbers)}`;
                    break;
                case 'removeDuplicates':
                    const unique = removeDuplicates(numbers);
                    let uniqueStr = '';
                    for (let i = 0; i < unique.length; i++) {
                        uniqueStr += unique[i];
                        if (i < unique.length - 1) {
                            uniqueStr += ', ';
                        }
                    }
                    result = `Unique Values: [${uniqueStr}]`;
                    break;
                default:
                    result = 'Please select a valid operation.';
            }
            resultText = result;
        } else if (operation) {
            resultText = 'Please enter some numbers to perform the operation.';
        }

        resultDiv.innerHTML = `<p>${resultText}</p>`;
    };

    arrayInput.addEventListener('input', updateResult);
    operationSelect.addEventListener('change', updateResult);
});