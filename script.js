document.addEventListener('DOMContentLoaded', () => {
    // UPEWNIJ SIĘ, ŻE JEST TU TWÓJ PRAWDZIWY URL!
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxok2YQycWygL3VpA6PHDCVfd3zvYMVitgCi8Qde2Ouv_MucOUiOlj_LGNQE0Dd8aPo/exec'; 

    const generateBtn = document.getElementById('generateBtn');
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const storyTitleEl = document.getElementById('storyTitle');
    const storyContentEl = document.getElementById('storyContent');

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

    if (generateBtn) {
        generateBtn.addEventListener('click', handleGenerateClick);
    } else {
        console.error("Krytyczny błąd: Nie znaleziono przycisku o ID 'generateBtn'!");
    }
});
