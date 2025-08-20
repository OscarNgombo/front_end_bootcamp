document.addEventListener('DOMContentLoaded', () => {
    const reverseString = (str) => {
        if (typeof str !== 'string') return '';
        return str.split('').reverse().join('');
    };

    const countVowels = (str) => {
        if (typeof str !== 'string') return 0;
        const foundVowels = str.match(/[aeiou]/gi);
        return foundVowels ? foundVowels.length : 0;
    };

    const truncate = (str, maxLength) => {
        if (typeof str !== 'string') return '';
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + '...';
        }
        return str;
    };

    const input = document.getElementById('case_string');
    const select = document.getElementById('case');
    const outputDiv = document.getElementById('output');
    const controlsContainer = document.querySelector('.controls');

    let maxLengthInput = null;
    let maxLengthLabel = null;

    const updateOutput = () => {
        const text = input.value;
        const operation = select.value;
        let result = '';

        if (!text || !operation) {
            outputDiv.textContent = '';
            return;
        }

        switch (operation) {
            case 'reverseString':
                result = reverseString(text);
                break;
            case 'countVowels':
                result = `Vowel count: ${countVowels(text)}`;
                break;
            case 'truncate':
                const maxLength = maxLengthInput ? parseInt(maxLengthInput.value, 10) : 0;
                if (maxLength > 0) {
                    result = truncate(text, maxLength);
                } else {
                    result = 'Please enter a valid max length.';
                }
                break;
            default:
                result = '';
        }
        outputDiv.textContent = result;
    };

    const handleSelectChange = () => {
        const operation = select.value;
        if (operation === 'truncate') {
            if (!maxLengthInput) {
                maxLengthLabel = document.createElement('label');
                maxLengthLabel.htmlFor = 'maxLength';
                maxLengthLabel.textContent = 'Max Length:';

                maxLengthInput = document.createElement('input');
                maxLengthInput.type = 'range';
                maxLengthInput.id = 'maxLength';
                maxLengthInput.min = '1';

                controlsContainer.append(maxLengthLabel, maxLengthInput);

                maxLengthInput.addEventListener('input', updateOutput);
            }
        } else if (maxLengthInput) {
            maxLengthInput.remove();
            maxLengthLabel.remove();
            maxLengthInput = null;
            maxLengthLabel = null;
        }
        updateOutput();
    };

    input.addEventListener('input', updateOutput);
    select.addEventListener('change', handleSelectChange);
});