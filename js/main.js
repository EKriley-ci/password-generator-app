const passwordInput = document.getElementById('passwordInput');
const copyBtn = document.getElementById('copy');
const showLength = document.getElementById('lenght'); // Correction ici
const lengthInput = document.getElementById('rangeInput');
const message = document.querySelector('.copy-message');
const inputs = [...document.querySelectorAll('input:not([type="text"])')];
const generateBtn = document.getElementById('generateBtn');

// Caractères à inclure
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['#', '$', '@', '%'];

// Caractères à exclure (trop similaires visuellement)
const similarNumbers = [0, 1];
const similarLowerCase = ['i', 'l', 'o'];
const similarUpperCase = ['I', 'L', 'O'];

// Générer les lettres minuscules de a à z
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);

// On supprime i (8), l (11), o (14)
const skip = [8, 11, 14];
const lowerCase = characterCodes
  .map(code => String.fromCharCode(code))
  .filter((_, i) => !skip.includes(i));

// Lettres majuscules correspondantes
const upperCase = lowerCase.map(letter => letter.toUpperCase());

// Met à jour l'affichage de la longueur
lengthInput.addEventListener('input', () => {
  showLength.textContent = lengthInput.value;
  updatePassword();

});

const generatePassword = (passwordLength, hasUpperCase, hasLowerCase, hasNumber, hasSymbols, hasSimilar) => {
  let arrayWithAvailableCharacters = [
    ...(hasUpperCase ? upperCase : []),
    ...(hasLowerCase ? lowerCase : []),
    ...(hasNumber ? numbers : []),
    ...(hasSymbols ? symbols : [])
  ];

  if (hasSimilar) {
    if (hasNumber) {
      arrayWithAvailableCharacters = [...arrayWithAvailableCharacters, ...similarNumbers];
    }
    if (hasLowerCase) {
      arrayWithAvailableCharacters = [...arrayWithAvailableCharacters, ...similarLowerCase];
    }
    if (hasUpperCase) {
      arrayWithAvailableCharacters = [...arrayWithAvailableCharacters, ...similarUpperCase];
    }
  }

  if (arrayWithAvailableCharacters.length === 0) {
    return '';
  }

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * arrayWithAvailableCharacters.length);
    password += arrayWithAvailableCharacters[randomIndex];
  }
  return password;
};

const updatePassword = () => {
  const passwordLength = parseInt(lengthInput.value);
  const checkboxes = inputs.slice(1).map(input => input.checked);
  const password = generatePassword(passwordLength, ...checkboxes);
  passwordInput.value = password;
};

generateBtn.addEventListener('click', () => {
  updatePassword();
});



copyBtn.addEventListener('click', () => {
    // Réinitialiser l'animation en modifiant la position 'top' à -1000px
    message.style.display = 'flex';
    message.style.top = '-1000px';

    // Copie le mot de passe dans le presse-papier
    navigator.clipboard.writeText(passwordInput.value);

    // Lancer l'animation de manière forcée
    setTimeout(() => {
        message.style.animation = 'none';  // Annuler l'animation en cours
        message.offsetHeight; // Forcer un reflow pour que l'animation soit réinitialisée
        message.style.animation = ''; // Réinitialiser l'animation
    }, 10);  // Temps nécessaire pour forcer le reflow

    // Laisser le message visible pendant l'animation (environ 3s)
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);  // Disparition après 3 secondes (durée de l'animation)
});
