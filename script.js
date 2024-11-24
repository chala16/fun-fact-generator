// const facts = [
//     "Octopuses have three hearts.",
//     "Dolphins have names for each other.",
//     "Cows have best friends.",
//     "Honeybees can recognize human faces.",
//     "Elephants mourn their dead.",
//     "Sea otters hold hands while sleeping.",
//     "Penguins propose with a pebble.",
//     "Sloths can hold their breath longer than dolphins.",
//     "Crows are incredibly intelligent.",
//     "Butterflies taste with their feet."
// ];

// function generateFact() {
//     const randomIndex = Math.floor(Math.random() * facts.length);
//     document.getElementById('fact').textContent = facts[randomIndex];
// }

// function copyFact() {
//     const factText = document.getElementById('fact').textContent;
//     navigator.clipboard.writeText(factText).then(() => {
//         alert('Fun fact copied to clipboard!');
//     }).catch(err => {
//         console.error('Failed to copy text: ', err);
//     });
// }
const facts = [
    "Octopuses have three hearts.",
    "Dolphins have names for each other.",
    "Cows have best friends.",
    "Honeybees can recognize human faces.",
    "Elephants mourn their dead.",
    "Sea otters hold hands while sleeping.",
    "Penguins propose with a pebble.",
    "Sloths can hold their breath longer than dolphins.",
    "Crows are incredibly intelligent.",
    "Butterflies taste with their feet."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
}

function copyFact() {
    const factText = document.getElementById('fact').textContent;
    if (factText !== "Click the button to see a fun fact!") { // Ensure a fact is displayed
        navigator.clipboard.writeText(factText).then(() => {
            alert('Fun fact copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    } else {
        alert('Please generate a fun fact first!');
    }
}
