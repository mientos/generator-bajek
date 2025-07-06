document.addEventListener('DOMContentLoaded', () => {
    // Pobieramy elementy z którymi będziemy pracować
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const resultDiv = document.getElementById('result');
    const promptOutput = document.getElementById('promptOutput');

    // Pobieramy pola formularza
    const childNameInput = document.getElementById('childName');
    const animalHelperInput = document.getElementById('animalHelper');
    const magicPlaceInput = document.getElementById('magicPlace');
    const magicItemInput = document.getElementById('magicItem');

    // Funkcja generująca prompt
    const generatePrompt = () => {
        // Pobieramy wartości z pól, usuwając białe znaki z początku i końca
        const childName = childNameInput.value.trim();
        const animalHelper = animalHelperInput.value.trim();
        const magicPlace = magicPlaceInput.value.trim();
        const magicItem = magicItemInput.value.trim();

        // Prosta walidacja - sprawdzamy czy wszystkie pola są wypełnione
        if (!childName || !animalHelper || !magicPlace || !magicItem) {
            alert('Proszę wypełnić wszystkie pola, aby stworzyć magiczną opowieść!');
            return;
        }

        // --- SERCE TWOJEGO NARZĘDZIA: SZABLON PROMPTU ---
        const promptTemplate = `
Jesteś światowej klasy autorem bajek dla dzieci w stylu Disneya - ciepłym, mądrym i pełnym magii. Twoim zadaniem jest napisać wyjątkową, spersonalizowaną bajkę.

Parametry bajki:
- Główny bohater: ${childName}
- Zwierzęcy pomocnik: ${animalHelper}
- Miejsce akcji: ${magicPlace}
- Magiczny przedmiot: ${magicItem}

Instrukcje:
1.  Napisz bajkę o długości około 400-500 słów.
2.  Historia musi być pozytywna, budująca i zawierać wyraźny, ale subtelny morał (np. o odwadze, przyjaźni, ciekawości świata, pomaganiu innym).
3.  Zacznij od pięknego, chwytliwego tytułu.
4.  Wpleć w historię wszystkie podane parametry w naturalny sposób.
5.  Zakończ bajkę ciepłym i pokrzepiającym zdaniem.
6.  Pisz w sposób zrozumiały dla dziecka w wieku 4-8 lat.
`;

        // Wstawiamy wygenerowany prompt do pola tekstowego
        promptOutput.value = promptTemplate.trim();
        // Pokazujemy sekcję z wynikiem
        resultDiv.classList.remove('hidden');
    };

    // Funkcja kopiowania do schowka
    const copyPrompt = () => {
        promptOutput.select();
        document.execCommand('copy');
        
        // Zmieniamy tekst przycisku na chwilę, aby dać znać, że się udało
        copyBtn.textContent = 'Skopiowano!';
        setTimeout(() => {
            copyBtn.textContent = 'Kopiuj Prompt';
        }, 2000);
    };

    // Podpinamy funkcje pod kliknięcia przycisków
    generateBtn.addEventListener('click', generatePrompt);
    copyBtn.addEventListener('click', copyPrompt);
});
