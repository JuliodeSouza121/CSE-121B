//getting all elements needed

const passwordLengthInput = document.getElementById('passwordLength');
const includeUppercaseCheckbox = document.getElementById('includeUppercase');
const includeNumbersCheckbox = document.getElementById('includeNumbers');
const includeSymbolsCheckbox = document.getElementById('includeSymbols');
const generatePasswordBtn = document.getElementById('generatePasswordBtn');
const passwordDisplay = document.getElementById('passwordDisplay');
const copyPasswordBtn = document.getElementById('copyPasswordBtn');

// adding actions when I click
generatePasswordBtn.addEventListener('click', generatePassword);
copyPasswordBtn.addEventListener('click', copyPassword);

// function to generate password, declaring what i need to use and connecting
function generatePassword() {
    const passwordLength = parseInt(passwordLengthInput.value);
    const includeUppercase = includeUppercaseCheckbox.checked;
    const includeNumbers = includeNumbersCheckbox.checked;
    const includeSymbols = includeSymbolsCheckbox.checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-=_+';

    let validChars = lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    passwordDisplay.value = password;
}

// function to copy the password and alert the user about it
function copyPassword() {
    passwordDisplay.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}