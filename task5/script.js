document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const strengthStatusDiv = document.querySelector('.password-strength_status');
    const togglePassword = document.getElementById('togglePassword');
    const checklistItems = document.querySelectorAll('.password-strength_status_check');

    const criteria = [
        { regex: /.{8,}/, index: 0 },
        { regex: /[A-Z]/, index: 1 },
        { regex: /[a-z]/, index: 2 },
        { regex: /[0-9]/, index: 3 },
        { regex: /[^A-Za-z0-9]/, index: 4 }
    ];

    const checkPasswordStrength = (password) => {
        let score = 0;
        criteria.forEach(criterion => {
            if (criterion.regex.test(password)) {
                score++;
            }
        });

        if (score < 3) return { score, strength: 'Weak' };
        if (score < 5) return { score, strength: 'Medium' };
        return { score, strength: 'Strong' };
    };

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const { strength } = checkPasswordStrength(password);
        strengthStatusDiv.textContent = password ? `Strength: ${strength}` : '';
        strengthStatusDiv.classList.remove('weak', 'medium', 'strong');
        if (password) {
            strengthStatusDiv.classList.add(strength.toLowerCase());
        }

        criteria.forEach(criterion => {
            const listItem = checklistItems[criterion.index];
            if (criterion.regex.test(password)) {
                listItem.classList.add('valid');
            } else {
                listItem.classList.remove('valid');
            }
        });
    });

    togglePassword.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePassword.classList.toggle('fa-eye', !isPassword);
        togglePassword.classList.toggle('fa-eye-slash', isPassword);
    });
});