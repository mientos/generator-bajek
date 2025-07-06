// --- BANKI LOSOWYCH SŁÓW ---
const randomAnimals = [
    'odważny lew', 'mądra sowa', 'szybki gepard', 'przyjazny delfin', 'śpiewający słowik',
    'wierny pies', 'sprytny lis', 'wesoła wiewiórka', 'magiczny jednorożec', 'pomocny bóbr',
    'leniwy kot', 'pracowita mrówka', 'dumny orzeł', 'majestatyczny wieloryb'
];
const randomPlaces = [
    'Tęczowy Las', 'Podwodna Kraina Koralowców', 'Latająca Wyspa Chmur', 'Kryształowa Jaskinia Szeptów',
    'Zaczarowany Ogród Pełen Kwiatów', 'Gwiezdna Pustynia', 'Miasto Złotych Wież', 'Dolina Zaginionych Rzek',
    'Wulkan Czekolady', 'Księżycowe Jezioro', 'Wioska na Grzbiecie Olbrzyma'
];
const randomItems = [
    'latający dywan', 'znikająca czapka', 'magiczny kompas', 'ołówek, który rysuje prawdziwe rzeczy',
    'mówiące lusterko', 'butelka z nieskończoną lemoniadą', 'klucz otwierający każde drzwi', 'świecące nasiono',
    'buty pozwalające chodzić po wodzie', 'pióro piszące złotem', 'grająca muszelka'
];

document.addEventListener('DOMContentLoaded', () => {
    // === WAŻNE: Wstaw tutaj swój adres URL z Cloudflare! ===
    const SCRIPT_URL = 'https://fragrant-lake-fd3a.mientos90.workers.dev';

    // --- Pobieranie elementów strony ---
    const generateBtn = document.getElementById('generateBtn');
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const storyTitleEl = document.getElementById('storyTitle');
    const storyContentEl = document.getElementById('storyContent');

    // --- LOGIKA GŁÓWNEGO PRZYCISKU "STWÓRZ BAJKĘ" ---
    const handleGenerateClick = async () => {
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

            if (!response.ok) {
                // Próba odczytania błędu z odpowiedzi, jeśli jest w formacie JSON
                const errorData = await response.json().catch(() => null);
                const errorMessage = errorData?.error || `Błąd serwera: ${response.status} ${response.statusText}`;
                throw new Error(errorMessage);
            }
            
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
            alert(`Wystąpił błąd podczas tworzenia bajki. Sprawdź konsolę (F12) po więcej szczegółów.\n\nBłąd: ${error.message}`);
        } finally {
            loadingDiv.classList.add('hidden');
            generateBtn.disabled = false;
            generateBtn.textContent = "Stwórz kolejną bajkę!";
        }
    };

    // --- LOGIKA INDYWIDUALNYCH PRZYCISKÓW LOSUJĄCYCH ---
    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    const randomAnimalBtn = document.getElementById('randomAnimalBtn');
    const randomPlaceBtn = document.getElementById('randomPlaceBtn');
    const randomItemBtn = document.getElementById('randomItemBtn');

    if (randomAnimalBtn) {
        randomAnimalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('animalHelper').value = getRandomElement(randomAnimals);
        });
    }

    if (randomPlaceBtn) {
        randomPlaceBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('magicPlace').value = getRandomElement(randomPlaces);
        });
    }

    if (randomItemBtn) {
        randomItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('magicItem').value = getRandomElement(randomItems);
        });
    }

    // --- Przypisanie zdarzenia do głównego przycisku ---
    if (generateBtn) {
        generateBtn.addEventListener('click', handleGenerateClick);
    } else {
        console.error("Krytyczny błąd: Nie znaleziono przycisku o ID 'generateBtn'!");
    }
});
