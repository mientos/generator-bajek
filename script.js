// --- MISTRZOWSKI BANK INSPIRACJI (v.2) ---

const randomAnimals = [
    // Klasyczni i szlachetni
    'wierny, stary pies o mądrych oczach', 'odważny lew z grzywą jak słońce', 'dumny orzeł szybujący pod chmurami',
    'elegancki, biały koń z wiatrem w grzywie', 'spokojny, potężny słoń pamiętający stare dzieje', 'tajemniczy wilk, stróż leśnych ścieżek',
    'zwinna pantera poruszająca się jak cień', 'mądra, prastara sowa znająca sekrety nocy', 'majestatyczny jeleń z koroną z gałęzi',
    'niedźwiedź o gołębim sercu',

    // Uroczy i przyjaźni
    'wesoła wiewiórka z puszystym ogonem', 'pomocny bóbr, mistrz inżynierii', 'nieśmiały królik o wielkich uszach',
    'roześmiany delfin tańczący na falach', 'śpiewający słowik, którego głos leczy smutki', 'puszysta alpaka, która uwielbia przytulanie',
    'sympatyczna wydra trzymająca kamyk szczęścia', 'zaciekawiony jeż noszący na grzbiecie listki', 'lojalny szczeniak z merdającym ogonem',
    'mały pingwin w eleganckim fraku',

    // Magiczni i niezwykli
    'feniks odradzający się z gwiezdnego pyłu', 'gryf o sercu lwa i skrzydłach orła', 'smok, który zamiast ogniem zionie bańkami mydlanymi',
    'księżycowy lis o srebrzystym futrze', 'jednorożec, którego róg świeci w ciemności', 'latająca ryba malująca na niebie tęcze',
    'mechaniczny gołąb dostarczający sny', 'koliber tak szybki, że zatrzymuje czas', 'żółw, na którego skorupie rośnie cały świat',
    'ośmiornica potrafiąca pisać wiersze',

    // Dziwaczni i zabawni
    'kret w okularach przeciwsłonecznych', 'hipopotam, który marzy o balecie', 'żyrafa w kolorowym szaliku',
    'pancernik, który używa skorupy jako deskorolki', 'gąsienica w cylindrze', 'ślimak z domkiem w kształcie zamku',
    'flaming grający na trąbce', 'kangur z torbą pełną gwiazd', 'kameleon, który jest malarzem',
    'pawian-bibliotekarz porządkujący książki',

    // Dodatkowe 60 inspiracji
    'świetlik będący latarnią zagubionych dusz', 'konik morski, szeryf koralowego miasteczka', 'rozgadana papuga znająca wszystkie języki świata',
    'pająk tkający mapy z nici', 'mrówka-odkrywca z maleńkim plecakiem', 'nietoperz-astronom obserwujący gwiazdy',
    'pszczoła, która zamiast miodu zbiera śmiech', 'żaba-bard śpiewająca ballady nad stawem', 'dzięcioł-zegarmistrz wybijający rytm czasu',
    'rozważny orangutan, filozof dżungli', 'szybka jaskółka, posłaniec wiosny', 'tajemnicza modliszka, mistrzyni kamuflażu',
    'kura znosząca czekoladowe jajka', 'koza-alpinistka wspinająca się na tęczę', 'krowa dająca mleko o smaku truskawek',
    'świnka morska, która jest piratem', 'chomik budujący miasta z nasion', 'wąż, który potrafi zawiązać się w supeł przyjaźni',
    'rozmarzona meduza unosząca się jak sen', 'krab pustelnik mieszkający w muszli zrobionej z kryształu',
    'skaczący pstrąg, który zna podwodne skróty', 'ważka o skrzydłach z witrażu', 'biedronka przynosząca szczęśliwe wiadomości',
    'motyl, którego wzór na skrzydłach opowiada historię', 'cietrzew grający na bębnach o poranku', 'szop pracz w stroju detektywa',
    'tchórz o zapachu fiołków', 'foka żonglująca śnieżkami', 'mors w eleganckim monoklu', 'dostojny albatros, kapitan morskich wiatrów',
    'kolorowy paw, artysta ogonowego wachlarza', 'zaskoczona surykatka, wieczny wartownik', 'kaczka w kaloszach',
    'gęś, która jest przewodnikiem wycieczek', 'indyk, który myśli, że jest orłem', 'gołąb pocztowy z GPS-em',
    'struś chowający głowę w chmurach', 'zebra, której paski można skanować jak kod kreskowy', 'nosorożec o miękkim sercu',
    'dzik z fryzurą w stylu irokeza', 'łoś z żyrandolem z poroża', 'piżmak budujący tamy z marzeń',
    'sympatyczny kapibara, przyjaciel wszystkich zwierząt', 'zwinny lemur z ogonem w paski', 'przytulna koala śniąca o eukaliptusach',
    'małpka kapucynka, mały psotnik', 'gibon, akrobata dżungli', 'leniwiec, mistrz powolnego życia',
    'mrówkojad z odkurzaczem zamiast nosa', 'tapir, leśny marzyciel', 'potężny goryl, strażnik gór',
    'wombat kopiący tunele do innych wymiarów', 'diabeł tasmański, który jest komikiem', 'dziobak, który jest wynalazcą',
    'kolczatka, która przytula bardzo ostrożnie', 'cudaczek, który rozdaje uśmiechy', 'świetlisty aksolotl, podwodny duch'
];

const randomPlaces = [
    // Krainy pełne magii i natury
    'Las, w którym drzewa szepczą stare baśnie', 'Dolina Śpiewających Wodospadów', 'Archipelag Latających Wysp',
    'Kryształowa Puszcza, gdzie wszystko lśni', 'Ogród, w którym rosną gwiazdy', 'Wzgórza Wiecznej Tęczy',
    'Podziemne Jezioro Lustrzanych Snów', 'Równina, po której przechadzają się chmury', 'Kanion Echa, który powtarza zapomniane słowa',
    'Mglista Kraina, gdzie czas płynie inaczej',

    // Miasta i cywilizacje
    'Miasto Złotych Zegarów, które nigdy się nie spieszą', 'Podwodna Metropolia Syren i Trytonów', 'Wioska w Koronach Gigantycznych Drzew',
    'Port Powietrznych Statków o żaglach z jedwabiu', 'Cytadela zbudowana na skorupie kosmicznego żółwia', 'Targ, gdzie walutą są wspomnienia',
    'Biblioteka zawierająca każdą książkę, jaka kiedykolwiek została napisana', 'Akademia, w której uczy się języka zwierząt', 'Most zbudowany z księżycowej poświaty',
    'Dworzec kolejowy, z którego pociągi odjeżdżają do snów',

    // Miejsca niezwykłe i fantastyczne
    'Wulkan, z którego zamiast lawy wypływa czekolada', 'Pustynia, gdzie piasek jest złotym pyłem', 'Lodowiec, w którym zamrożone są marzenia',
    'Fabryka Chmur o różnych kształtach i smakach', 'Pracownia Zegarmistrza Czasu', 'Sklep z zaginionymi skarpetkami',
    'Wesołe miasteczko prowadzone przez duchy', 'Szczyt góry, z którego widać początek świata', 'Jaskinia, której ściany malują przyszłość',
    'Morze Szeptów, gdzie każda fala ma swoją historię',

    // Miejsca przytulne i tajemnicze
    'Opuszczona latarnia morska na skraju świata', 'Przytulna norka pod korzeniami starego dębu', 'Strych pełen zapomnianych zabawek i tajemnic',
    'Tajemniczy ogród za ukrytymi drzwiami', 'Mała księgarnia na rogu ulicy Snów', 'Ciepła kuchnia babci, gdzie pachnie ciastem i magią',
    'Stara studnia, która spełnia jedno życzenie', 'Polana, na której tańczą świetliki', 'Obserwatorium astronomiczne na szczycie wieży',
    'Ukryta przystań dla papierowych łódek',

    // Dodatkowe 60 inspiracji
    'Kraina, gdzie wszystko jest do góry nogami', 'Pole bitwy pluszowych misiów', 'Miasto zbudowane z klocków LEGO',
    'Kopalnia, w której wydobywa się śmiech', 'Las, w którym liście są stronami z książek', 'Rzeka płynąca lemoniadą',
    'Wyspa, na której rosną drzewa cukierków', 'Zamek z lodu, który nigdy nie topnieje', 'Wieża, która sięga ponad chmury',
    'Dolina, w której echo śpiewa piosenki', 'Jezioro, w którym można zobaczyć swoje sny', 'Wodospad spływający do innego wymiaru',
    'Kraina wiecznej jesieni', 'Zatoka piratów o dobrych sercach', 'Królestwo gigantycznych grzybów', 'Miasteczko, gdzie wszyscy poruszają się tanecznym krokiem',
    'Pole maków, które usypiają zmartwienia', 'Szklana góra, na którą trzeba się wspiąć', 'Labirynt zrobiony z luster',
    'Cmentarzysko starych statków kosmicznych', 'Oaza na środku pustyni z piasku', 'Świątynia czterech wiatrów',
    'Wioska, w której domy mają skrzydła', 'Rynek, na którym można kupić pogodę w słoiku', 'Teatr, w którym grają cienie',
    'Przełęcz górską strzeżoną przez kamienne golemy', 'Podniebna autostrada dla latających dywanów', 'Kraina, w której nie ma kolorów',
    'Wyspa, która pojawia się tylko podczas pełni księżyca', 'Cyrk pcheł-akrobatów', 'Muzeum rzeczy niemożliwych',
    'Hotel dla podróżujących w czasie', 'Restauracja, która serwuje uczucia na talerzu', 'Ogród zoologiczny z mitycznymi stworzeniami',
    'Uniwersytet magii i iluzji', 'Kraina, gdzie słońce i księżyc są przyjaciółmi', 'Pole, na którym rosną śmiejące się kwiaty',
    'Rzeka atramentu płynąca przez krainę poetów', 'Miasto, w którym budynki są instrumentami muzycznymi', 'Las, w którym drzewa rodzą owoce w kształcie gwiazd',
    'Jaskinia, w której zamarzło echo', 'Wyspa, na której żyją tylko dzieci', 'Kraina, gdzie spełniają się wszystkie obietnice',
    'Miasto, w którym nie ma schodów, tylko zjeżdżalnie', 'Pustynia, po której pływają piaskowe statki', 'Góry zrobione z książek',
    'Las, w którym ścieżki same prowadzą do celu', 'Morze atłasowe', 'Wybrzeże kości słoniowej (ale z marcepanu)',
    'Zaginiona kraina Oz (ale bardziej zielona)', 'Świat wewnątrz płatka śniegu', 'Kraina wiecznej północy',
    'Wyspa Wielkanocna (ale z czekolady)', 'Stumilowy Las', 'Nigdylandia', 'Kraina Czarów',
    'Kraina Lodu', 'Zaczarowana kraina', 'Bajkowy świat', 'Świat fantazji'
];

const randomItems = [
    // Narzędzia magiczne i niezwykłe
    'ołówek, który rysuje prawdziwe rzeczy', 'kompas, który wskazuje drogę do tego, czego szukasz', 'klucz, który otwiera nie drzwi, a serca',
    'latarka, która oświetla ukrytą prawdę', 'lupa, która pokazuje dobro w każdym', 'zegarek, który pozwala przeżyć ulubioną minutę jeszcze raz',
    'mapa, która sama rysuje drogę do przygody', 'lornetka pozwalająca zobaczyć czyjeś marzenia', 'notes, w którym zapisane słowa stają się prawdą',
    'pióro, które pisze najpiękniejsze komplementy',

    // Przedmioty codzienne z odrobiną magii
    'koc, który opowiada historie na dobranoc', 'filiżanka, w której herbata nigdy nie stygnie', 'łyżka, która sprawia, że lekarstwo smakuje jak miód',
    'poduszka, która gwarantuje tylko piękne sny', 'sznurowadła, które same się zawiązują w idealną kokardkę', 'guzik, który potrafi przyszyć zgubione wspomnienie',
    'kalosze, które pozwalają chodzić po kałużach czasu', 'parasol, który chroni nie przed deszczem, a przed smutkiem', 'okulary, które pokazują świat w weselszych barwach',
    'skarbonka, do której wrzuca się uśmiechy',

    // Dary natury i żywiołów
    'kamień, który ogrzewa zmarznięte dłonie', 'muszelka, w której słychać nie szum morza, a śmiech przyjaciół', 'piórko, które pozwala unosić się nad ziemią',
    'kieszonkowa tęcza na deszczowe dni', 'słoik ze światłem gwiazd', 'kawałek chmury miękki jak wata cukrowa',
    'nasiono, z którego w minutę wyrasta drzewo dające schronienie', 'kropla rosy, która gasi każde pragnienie', 'płatek śniegu, który nigdy nie topnieje',
    'szyszka, która odpowiada na jedno pytanie dziennie',

    // Eliksiry, księgi i zwoje
    'butelka ze skondensowaną odwagą', 'księga, która czyta się sama na głos', 'eliksir pozwalający rozmawiać z roślinami',
    'zwój z przepisem na ciasto przyjaźni', 'mikstura zmieniająca kolor włosów w zależności od nastroju', 'atrament widzialny tylko w świetle księżyca',
    'stara księga z dowcipami dla smoków', 'perfumy o zapachu przygody', 'tabletki na zapomnienie o złym dniu',
    'kryształowa kula pokazująca zagubione przedmioty',

    // Dodatkowe 60 inspiracji
    'latająca miotła z automatyczną skrzynią biegów', 'czarodziejska różdżka z funkcją Wi-Fi', 'siedmiomilowe trampki',
    'czapka niewidka (ale tylko dla uszu)', 'magiczny flet, który usypia potwory', 'harfa, której muzyka buduje mosty',
    'pierścień, który tłumaczy mowę niemowląt', 'amulet chroniący przed nudą', 'talizman przyciągający pyszne jedzenie',
    'kamień filozoficzny (ale robi tylko nuggetsy)', 'złote runo (bardzo ciepłe na zimę)', 'róg obfitości (głównie z popcornu)',
    'miecz, który jest też scyzorykiem', 'tarcza, która działa jak trampolina', 'laska pasterza, która wskazuje drogę do domu',
    'magiczne zwierciadło, które zawsze mówi komplementy', 'latający kufer na skarby', 'samopiszące pióro (ale z błędami ortograficznymi)',
    'cudowna lampa (ale dżin jest na urlopie)', 'kłębek nici, który zawsze prowadzi do wyjścia z labiryntu',
    'zaczarowane nożyce, które tną idealnie prosto', 'magiczny młotek, który wszystko naprawia', 'gliniana tabliczka z kodem do gry',
    'srebrne dzwoneczki, które odstraszają koszmary', 'bursztynowy naszyjnik, który świeci w pobliżu prawdy',
    'szkatułka, która pomniejsza przedmioty', 'magiczna fasola prowadząca do zamku w chmurach', 'kryształ, który potrafi nagrywać dźwięki',
    'sakiewka, w której zawsze jest jedna moneta więcej', 'globus, który pokazuje miejsca, gdzie ktoś jest szczęśliwy',

    'magiczny bączek, który wiruje przez tydzień', 'jojo, które potrafi cofnąć czas o 5 sekund', 'latawiec, który potrafi latać bez wiatru',
    'bańki mydlane, które nie pękają', 'kredki, które malują zapachami', 'plastelina, z której można ulepić żywe zwierzątka',
    'puzzle, które same się układają', 'gra planszowa, która przenosi graczy do swojego świata', 'pluszowy miś, który zna odpowiedzi na wszystkie pytania',
    'lalka, która potrafi szeptać sekrety', 'samochodzik, który potrafi jeździć po ścianach', 'robot, który odrabia prace domowe',
    'kalkulator, który liczy gwiazdy na niebie', 'telefon, którym można zadzwonić do postaci z bajek', 'tablet, który wyświetla sny',
    'aparat, który robi zdjęcia przyszłości', 'kamera, która nagrywa wspomnienia', 'słuchawki, w których słychać myśli zwierząt',

    'książka kucharska z przepisami na emocje', 'walizka, która jest lżejsza, im więcej się do niej włoży',
    'kapelusz, z którego można wyciągnąć wszystko, o czym się pomyśli'
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
