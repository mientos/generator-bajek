document.addEventListener('DOMContentLoaded', () => {
    // Adres URL Twojej aplikacji Google Apps Script
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxDdoSpjA3_MmAJGy1zxU-QdQySBEbwjhNNLIUA_qSxIQ9e8fTnyhQHcZNu0sXX5oZ_/exec';

    // Elementy strony
    const generateBtn = document.getElementById('generateBtn');
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const storyTitleEl = document.getElementById('storyTitle');
    const storyContentEl = document.getElementById('storyContent');

    // Pola formularza
    const childNameInput = document.getElementById('childName');
    const animalHelperInput = document.getElementById('animalHelper');
    const magicPlaceInput = document.getElementById('magicPlace');
    const magicItemInput = document.getElementById('magicItem');

    const handleGenerateClick = async () => {
        const childName = childNameInput.value.trim();
        const animalHelper = animalHelperInput.value.trim();
        const magicPlace = magicPlaceInput.value.trim();
        const magicItem = magicItemInput.value.trim();

        if (!childName || !animalHelper || !magicPlace || !magicItem) {
            alert('Proszę wypełnić wszystkie pola!');
            return;
        }

        // Pokaż animację ładowania, ukryj stary wynik i przycisk
        loadingDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        generateBtn.disabled = true;
        generateBtn.textContent = "Cierpliwości...";

        try {
            // Przygotuj dane do wysłania
            const payload = {
                childName,
                animalHelper,
                magicPlace,
                magicItem
            };

            // Wyślij zapytanie do naszego "mini-serwera"
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            // Przetwarzamy otrzymaną bajkę
            const fullStory = data.story;
            // Dzielimy tekst na tytuł (pierwsza linijka) i resztę
            const storyParts = fullStory.split('\n');
            const title = storyParts.shift().replace(/[\"#*]/g, ''); // Usuwamy znaki formatujące z tytułu
            const content = storyParts.join('<br>'); // Łączymy resztę, zachowując podziały linii

            // Wyświetlamy bajkę
            storyTitleEl.textContent = title;
            storyContentEl.innerHTML = content; // Używamy innerHTML, aby <br> działały
            resultDiv.classList.remove('hidden');

        } catch (error) {
            console.error('Błąd:', error);
            alert('Wystąpił błąd podczas tworzenia bajki. Spróbuj ponownie później.');
        } finally {
            // Ukryj animację ładowania i przywróć przycisk
            loadingDiv.classList.add('hidden');
            generateBtn.disabled = false;
            generateBtn.textContent = "Stwórz kolejną bajkę!";
        }
    };

    generateBtn.addEventListener('click', handleGenerateClick);
});
