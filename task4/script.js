document.addEventListener('DOMContentLoaded',()=>{
    const nameInput = document.getElementById('initials');
    const initialText = document.querySelector('.initial-text');
    const getInitials = (fullName) => {
        if (!fullName || typeof fullName !== 'string') {
            return '';
        }
        
        let initials = '';
        let isNewWord = true;

        for (let i = 0; i < fullName.length; i++) {
            const char = fullName[i];
            
            if (char === ' ' || char === '\t' || char === '\n') {
                isNewWord = true;
            } else if (isNewWord) {
                initials += char.toUpperCase();
                isNewWord = false;
            }
        }
        return initials;
    };

    nameInput.addEventListener('input', (event) => {
        const initials = getInitials(event.target.value);
        initialText.textContent = initials;

        const len = initials.length;
        if (len < 3) {
            initialText.style.fontSize = '1.5rem';
        } else if (len < 5) {
            initialText.style.fontSize = '1.2rem';
        } else {
            initialText.style.fontSize = '0.9rem';
        }
    });

})