// --- BANKI LOSOWYCH SŁÓW ---
const randomAnimals = [
    'odważny lew', 'mądra sowa', 'szybki gepard', 'przyjazny delfin', 'śpiewający słowik',
    'wierny pies', 'sprytny lis', 'wesoła wiewiórka', 'magiczny jednorożec', 'pomocny bóbr'
];
const randomPlaces = [
    'Tęczowy Las', 'Podwodna Kraina Koralowców', 'Latająca Wyspa Chmur', 'Kryształowa Jaskinia Szeptów',
    'Zaczarowany Ogród Pełen Kwiatów', 'Gwiezdna Pustynia', 'Miasto Złotych Wież', 'Dolina Zaginionych Rzek'
];
const randomItems = [
    'latający dywan', 'znikająca czapka', 'magiczny kompas', 'ołówek, który rysuje prawdziwe rzeczy',
    'mówiące lusterko', 'butelka z nieskończoną lemoniadą', 'klucz otwierający każde drzwi', 'świecące nasiono'
];

document.addEventListener('DOMContentLoaded', () => {
    const SCRIPT_URL = 'https://fragrant-lake-fd3a.mientos90.workers.dev'; // Upewnij się, że jest tu Twój adres!

    const generateBtn = document.getElementById('generateBtn');
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const storyTitleEl = document.getElementById('storyTitle');
    const storyContentEl = document.getElementById('storyContent');
    // Pobranie nowego przycisku losującego
    const randomizeBtn = document.getElementById('randomizeBtn');

    const handleGenerateClick = async () => {
        // ... (cała ta funkcja zostaje bez zmian)
        const childName = document.getElementById('childName').value.trim();
        const animalHelper = document.getElementById('animalHelper').value.trim();
        const magicPlace = document.getElementById('magicPlace').value.trim();
        const magicItem = document.getElementById('magicItem').value.trim();

        if (!childName || !animalHelper || !magicPlace || !magicItem) {
            alert('Proszę wypełnić wszystkie pola!');
            return;
        }

        loadingDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        generateBtn.disabled = true;
        generateBtn.textContent = "Cierpliwości...";

        try {
            const payload = { childName, animalHelper, magicPlace, magicItem };
            const response = await fetch(SCRIPT_URL, {
                method: 'POST', mode: 'cors', cache: 'no-cache',
                headers: { 'Content-Type': 'application/json', },
                redirect: 'follow', body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);

            const fullStory = data.story;
            const storyParts = fullStory.split('\n');
            const title = storyParts.shift().replace(/[\"#*]/g, '');
            const content = storyParts.join('<br>');

            storyTitleEl.textContent = title;
            storyContentEl.innerHTML = content;
            resultDiv.classList.remove('hidden');

        } catch (error) {
            console.error('Błąd:', error);
            alert('Wystąpił błąd podczas tworzenia bajki. Spróbuj ponownie później.');
        } finally {
            loadingDiv.classList.add('hidden');
            generateBtn.disabled = false;
            generateBtn.textContent = "Stwórz kolejną bajkę!";
        }
    };

    // --- LOGIKA PRZYCISKU LOSUJĄCEGO ---
    const handleRandomizeClick = (event) => {
        event.preventDefault();
        const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
        document.getElementById('animalHelper').value = getRandomElement(randomAnimals);
        document.getElementById('magicPlace').value = getRandomElement(randomPlaces);
        document.getElementById('magicItem').value = getRandomElement(randomItems);
    };

    if (randomizeBtn) {
        randomizeBtn.addEventListener('click', handleRandomizeClick);
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', handleGenerateClick);
    } else {
        console.error("Krytyczny błąd: Nie znaleziono przycisku o ID 'generateBtn'!");
    }
});
