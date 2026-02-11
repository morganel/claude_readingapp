// German Reading Game for Kids
// Word-image matching with levels and scoring

const levels = [
    {
        name: "Tiere",
        words: [
            { word: "Hund",        emoji: "\uD83D\uDC36", distractors: ["\uD83D\uDC31", "\uD83D\uDC2D"] },
            { word: "Katze",       emoji: "\uD83D\uDC31", distractors: ["\uD83D\uDC36", "\uD83D\uDC30"] },
            { word: "Fisch",       emoji: "\uD83D\uDC1F", distractors: ["\uD83D\uDC26", "\uD83D\uDC0D"] },
            { word: "Vogel",       emoji: "\uD83D\uDC26", distractors: ["\uD83D\uDC1F", "\uD83E\uDD8B"] },
            { word: "Maus",        emoji: "\uD83D\uDC2D", distractors: ["\uD83D\uDC30", "\uD83D\uDC36"] },
            { word: "Hase",        emoji: "\uD83D\uDC30", distractors: ["\uD83D\uDC2D", "\uD83D\uDC31"] },
            { word: "Pferd",       emoji: "\uD83D\uDC34", distractors: ["\uD83D\uDC2E", "\uD83D\uDC36"] },
            { word: "Kuh",         emoji: "\uD83D\uDC2E", distractors: ["\uD83D\uDC34", "\uD83D\uDC37"] },
            { word: "Schwein",     emoji: "\uD83D\uDC37", distractors: ["\uD83D\uDC2E", "\uD83D\uDC30"] },
            { word: "Schlange",    emoji: "\uD83D\uDC0D", distractors: ["\uD83D\uDC1F", "\uD83D\uDC38"] },
        ]
    },
    {
        name: "Essen",
        words: [
            { word: "Apfel",       emoji: "\uD83C\uDF4E", distractors: ["\uD83C\uDF4C", "\uD83C\uDF53"] },
            { word: "Banane",      emoji: "\uD83C\uDF4C", distractors: ["\uD83C\uDF4E", "\uD83C\uDF47"] },
            { word: "Brot",        emoji: "\uD83C\uDF5E", distractors: ["\uD83C\uDF70", "\uD83C\uDF55"] },
            { word: "Kuchen",      emoji: "\uD83C\uDF70", distractors: ["\uD83C\uDF5E", "\uD83C\uDF66"] },
            { word: "Eis",         emoji: "\uD83C\uDF66", distractors: ["\uD83C\uDF70", "\uD83C\uDF4E"] },
            { word: "Pizza",       emoji: "\uD83C\uDF55", distractors: ["\uD83C\uDF5E", "\uD83C\uDF2E"] },
            { word: "Erdbeere",    emoji: "\uD83C\uDF53", distractors: ["\uD83C\uDF4E", "\uD83C\uDF47"] },
            { word: "Traube",      emoji: "\uD83C\uDF47", distractors: ["\uD83C\uDF53", "\uD83C\uDF4C"] },
            { word: "Karotte",     emoji: "\uD83E\uDD55", distractors: ["\uD83C\uDF4E", "\uD83C\uDF3D"] },
            { word: "Mais",        emoji: "\uD83C\uDF3D", distractors: ["\uD83E\uDD55", "\uD83C\uDF4C"] },
        ]
    },
    {
        name: "Natur",
        words: [
            { word: "Sonne",       emoji: "\u2600\uFE0F",  distractors: ["\uD83C\uDF19", "\u2B50"] },
            { word: "Mond",        emoji: "\uD83C\uDF19",  distractors: ["\u2600\uFE0F", "\u2601\uFE0F"] },
            { word: "Stern",       emoji: "\u2B50",        distractors: ["\uD83C\uDF19", "\u2600\uFE0F"] },
            { word: "Blume",       emoji: "\uD83C\uDF3B",  distractors: ["\uD83C\uDF33", "\uD83C\uDF35"] },
            { word: "Baum",        emoji: "\uD83C\uDF33",  distractors: ["\uD83C\uDF3B", "\uD83C\uDF35"] },
            { word: "Berg",        emoji: "\u26F0\uFE0F",  distractors: ["\uD83C\uDF0A", "\uD83C\uDF33"] },
            { word: "Wasser",      emoji: "\uD83C\uDF0A",  distractors: ["\u26F0\uFE0F", "\uD83C\uDF27\uFE0F"] },
            { word: "Feuer",       emoji: "\uD83D\uDD25",  distractors: ["\uD83C\uDF0A", "\u2600\uFE0F"] },
            { word: "Pilz",        emoji: "\uD83C\uDF44",  distractors: ["\uD83C\uDF3B", "\uD83C\uDF33"] },
            { word: "Blatt",       emoji: "\uD83C\uDF43",  distractors: ["\uD83C\uDF3B", "\uD83C\uDF44"] },
        ]
    },
    {
        name: "Sachen",
        words: [
            { word: "Ball",        emoji: "\u26BD",        distractors: ["\uD83C\uDFB8", "\uD83D\uDE97"] },
            { word: "Auto",        emoji: "\uD83D\uDE97",  distractors: ["\u26BD", "\uD83D\uDEB2"] },
            { word: "Fahrrad",     emoji: "\uD83D\uDEB2",  distractors: ["\uD83D\uDE97", "\u26BD"] },
            { word: "Haus",        emoji: "\uD83C\uDFE0",  distractors: ["\uD83D\uDEB2", "\uD83D\uDCDA"] },
            { word: "Buch",        emoji: "\uD83D\uDCDA",  distractors: ["\uD83C\uDFE0", "\uD83C\uDFB8"] },
            { word: "Gitarre",     emoji: "\uD83C\uDFB8",  distractors: ["\u26BD", "\uD83D\uDCDA"] },
            { word: "Uhr",         emoji: "\u23F0",        distractors: ["\uD83D\uDCF1", "\uD83D\uDCA1"] },
            { word: "Telefon",     emoji: "\uD83D\uDCF1",  distractors: ["\u23F0", "\uD83D\uDCBB"] },
            { word: "Lampe",       emoji: "\uD83D\uDCA1",  distractors: ["\u23F0", "\uD83D\uDD11"] },
            { word: "Schlüssel",   emoji: "\uD83D\uDD11",  distractors: ["\uD83D\uDCA1", "\uD83D\uDCF1"] },
        ]
    },
    {
        name: "Farben & Wetter",
        words: [
            { word: "Regen",       emoji: "\uD83C\uDF27\uFE0F",  distractors: ["\u2600\uFE0F", "\u2744\uFE0F"] },
            { word: "Schnee",      emoji: "\u2744\uFE0F",        distractors: ["\uD83C\uDF27\uFE0F", "\uD83C\uDF08"] },
            { word: "Regenbogen",  emoji: "\uD83C\uDF08",        distractors: ["\u2744\uFE0F", "\uD83C\uDF27\uFE0F"] },
            { word: "Herz",        emoji: "\u2764\uFE0F",        distractors: ["\uD83C\uDF08", "\u2B50"] },
            { word: "Wolke",       emoji: "\u2601\uFE0F",        distractors: ["\u2600\uFE0F", "\uD83C\uDF19"] },
            { word: "Wind",        emoji: "\uD83C\uDF2C\uFE0F",  distractors: ["\u2601\uFE0F", "\uD83C\uDF27\uFE0F"] },
            { word: "Blitz",       emoji: "\u26A1",              distractors: ["\uD83C\uDF2C\uFE0F", "\u2744\uFE0F"] },
            { word: "Tornado",     emoji: "\uD83C\uDF2A\uFE0F",  distractors: ["\uD83C\uDF2C\uFE0F", "\u26A1"] },
            { word: "Tropfen",     emoji: "\uD83D\uDCA7",        distractors: ["\uD83C\uDF0A", "\uD83C\uDF27\uFE0F"] },
            { word: "Sterne",      emoji: "\uD83C\uDF20",        distractors: ["\u2B50", "\uD83C\uDF19"] },
        ]
    },
    {
        name: "Körper",
        words: [
            { word: "Auge",    emoji: "👁️",  distractors: ["👃", "👂"] },
            { word: "Nase",    emoji: "👃",  distractors: ["👁️", "👄"] },
            { word: "Mund",    emoji: "👄",  distractors: ["👃", "👅"] },
            { word: "Ohr",     emoji: "👂",  distractors: ["👁️", "👃"] },
            { word: "Hand",    emoji: "✋",  distractors: ["🦶", "💪"] },
            { word: "Fuß",     emoji: "🦶",  distractors: ["✋", "🦵"] },
            { word: "Zahn",    emoji: "🦷",  distractors: ["👅", "👄"] },
            { word: "Zunge",   emoji: "👅",  distractors: ["🦷", "👄"] },
            { word: "Muskel",  emoji: "💪",  distractors: ["🦵", "✋"] },
            { word: "Bein",    emoji: "🦵",  distractors: ["💪", "🦶"] },
        ]
    },
    {
        name: "Kleidung",
        words: [
            { word: "Hut",        emoji: "🎩",  distractors: ["👑", "👓"] },
            { word: "Schuh",      emoji: "👟",  distractors: ["🥾", "🧦"] },
            { word: "Kleid",      emoji: "👗",  distractors: ["👕", "👖"] },
            { word: "Hemd",       emoji: "👕",  distractors: ["👗", "👖"] },
            { word: "Hose",       emoji: "👖",  distractors: ["👕", "👗"] },
            { word: "Socke",      emoji: "🧦",  distractors: ["👟", "🥾"] },
            { word: "Brille",     emoji: "👓",  distractors: ["🎩", "👑"] },
            { word: "Handschuh",  emoji: "🧤",  distractors: ["🧦", "👟"] },
            { word: "Krone",      emoji: "👑",  distractors: ["🎩", "👓"] },
            { word: "Stiefel",    emoji: "🥾",  distractors: ["👟", "🧦"] },
        ]
    },
    {
        name: "Fahrzeuge",
        words: [
            { word: "Bus",           emoji: "🚌",  distractors: ["🚂", "🚜"] },
            { word: "Zug",           emoji: "🚂",  distractors: ["🚌", "🚜"] },
            { word: "Schiff",        emoji: "🚢",  distractors: ["⛵", "🚂"] },
            { word: "Flugzeug",      emoji: "✈️",  distractors: ["🚀", "🚁"] },
            { word: "Rakete",        emoji: "🚀",  distractors: ["✈️", "🚁"] },
            { word: "Boot",          emoji: "⛵",  distractors: ["🚢", "🚌"] },
            { word: "Traktor",       emoji: "🚜",  distractors: ["🚌", "🏍️"] },
            { word: "Motorrad",      emoji: "🏍️",  distractors: ["🛴", "🚜"] },
            { word: "Roller",        emoji: "🛴",  distractors: ["🏍️", "🚌"] },
            { word: "Hubschrauber",  emoji: "🚁",  distractors: ["✈️", "🚀"] },
        ]
    },
    {
        name: "Insekten",
        words: [
            { word: "Raupe",         emoji: "🐛",  distractors: ["🪱", "🐌"] },
            { word: "Schmetterling", emoji: "🦋",  distractors: ["🐛", "🐝"] },
            { word: "Biene",         emoji: "🐝",  distractors: ["🦋", "🐞"] },
            { word: "Ameise",        emoji: "🐜",  distractors: ["🕷️", "🐛"] },
            { word: "Marienkäfer",   emoji: "🐞",  distractors: ["🪲", "🐝"] },
            { word: "Grille",        emoji: "🦗",  distractors: ["🐜", "🪲"] },
            { word: "Käfer",         emoji: "🪲",  distractors: ["🐞", "🦗"] },
            { word: "Spinne",        emoji: "🕷️",  distractors: ["🐜", "🦗"] },
            { word: "Schnecke",      emoji: "🐌",  distractors: ["🐛", "🪱"] },
            { word: "Wurm",          emoji: "🪱",  distractors: ["🐛", "🐌"] },
        ]
    },
    {
        name: "Im Haus",
        words: [
            { word: "Stuhl",      emoji: "🪑",  distractors: ["🛋️", "🛏️"] },
            { word: "Bett",       emoji: "🛏️",  distractors: ["🪑", "🛋️"] },
            { word: "Sofa",       emoji: "🛋️",  distractors: ["🪑", "🛏️"] },
            { word: "Tür",        emoji: "🚪",  distractors: ["🪟", "🪞"] },
            { word: "Fenster",    emoji: "🪟",  distractors: ["🚪", "🖼️"] },
            { word: "Kerze",      emoji: "🕯️",  distractors: ["☕", "🪞"] },
            { word: "Spiegel",    emoji: "🪞",  distractors: ["🖼️", "🪟"] },
            { word: "Badewanne",  emoji: "🛁",  distractors: ["☕", "🪑"] },
            { word: "Tasse",      emoji: "☕",  distractors: ["🛁", "🕯️"] },
            { word: "Bild",       emoji: "🖼️",  distractors: ["🪞", "🪟"] },
        ]
    },
];

// Build emoji → word lookup from all levels
const emojiToWord = {};
levels.forEach(level => {
    level.words.forEach(item => {
        emojiToWord[item.emoji] = item.word;
    });
});

// Text-to-speech with German voice
let germanVoice = null;
function findGermanVoice() {
    const voices = speechSynthesis.getVoices();
    // Prefer exact de-DE, then any de- voice
    germanVoice = voices.find(v => v.lang === 'de-DE') ||
                  voices.find(v => v.lang.startsWith('de'));
}
if ('speechSynthesis' in window) {
    findGermanVoice();
    speechSynthesis.onvoiceschanged = findGermanVoice;
}
function speak(text) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'de-DE';
    utter.rate = 0.85;
    if (germanVoice) utter.voice = germanVoice;
    speechSynthesis.speak(utter);
}

let currentLevel = 0;
let currentWordIndex = 0;
let score = 0;
let levelScore = 0;
let totalQuestions = 0;
let levelQuestions = 0;

// Clear stale progress if word counts changed
const GAME_VERSION = 6;
if (Number(localStorage.getItem('gameVersion')) !== GAME_VERSION) {
    localStorage.removeItem('levelProgress');
    localStorage.setItem('gameVersion', GAME_VERSION);
}

// Load saved progress from localStorage
function loadProgress() {
    try {
        return JSON.parse(localStorage.getItem('levelProgress')) || {};
    } catch (e) {
        return {};
    }
}

function saveProgress(levelIndex, pts, maxPts) {
    const progress = loadProgress();
    const prev = progress[levelIndex];
    // Keep the best score
    if (!prev || pts > prev.score) {
        progress[levelIndex] = { score: pts, max: maxPts };
    }
    localStorage.setItem('levelProgress', JSON.stringify(progress));
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function buildLevelPicker() {
    const grid = document.getElementById('level-grid');
    grid.innerHTML = '';
    const progress = loadProgress();
    levels.forEach((level, i) => {
        const card = document.createElement('button');
        const done = progress[i];
        card.className = 'level-card' + (done ? ' level-done' : '');

        let badge = '';
        if (done) {
            const pct = done.score / done.max;
            let stars;
            if (pct >= 0.8) stars = '\u2B50\u2B50\u2B50';
            else if (pct >= 0.5) stars = '\u2B50\u2B50';
            else stars = '\u2B50';
            badge = '<span class="level-card-badge">' + stars + ' ' + done.score + '/' + done.max + '</span>';
        }

        card.innerHTML =
            '<span class="level-card-emoji">' + level.words[0].emoji + '</span>' +
            '<span class="level-card-name">' + level.name + '</span>' +
            '<span class="level-card-num">Level ' + (i + 1) + '</span>' +
            badge;
        card.addEventListener('click', () => pickLevel(i));
        grid.appendChild(card);
    });
}

function showLevelPicker() {
    buildLevelPicker();
    showScreen('level-picker');
}

function pickLevel(index) {
    currentLevel = index;
    score = 0;
    totalQuestions = 0;
    startLevel();
}

function startGame() {
    currentLevel = 0;
    score = 0;
    totalQuestions = 0;
    startLevel();
}

// Build level picker on load
buildLevelPicker();

function startLevel() {
    currentWordIndex = 0;
    levelScore = 0;
    levelQuestions = 0;
    showScreen('game-screen');
    document.getElementById('level-num').textContent = currentLevel + 1;
    document.getElementById('score').textContent = score;
    updateProgress();
    showWord();
}

function updateProgress() {
    const total = levels[currentLevel].words.length;
    const pct = (currentWordIndex / total) * 100;
    document.getElementById('progress-bar').style.width = pct + '%';
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function showWord() {
    const level = levels[currentLevel];
    const item = level.words[currentWordIndex];

    document.getElementById('word-display').textContent = item.word;
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = '';

    const options = shuffle([item.emoji, ...item.distractors]);

    const choicesEl = document.getElementById('choices');
    choicesEl.innerHTML = '';

    options.forEach(emoji => {
        const card = document.createElement('div');
        card.className = 'choice-card';
        card.textContent = emoji;
        card.addEventListener('click', () => handleChoice(card, emoji, item.emoji));
        choicesEl.appendChild(card);
    });
}

function handleChoice(card, chosen, correct) {
    const cards = document.querySelectorAll('.choice-card');
    cards.forEach(c => c.classList.add('disabled'));

    // Say the name of the clicked picture in German
    const clickedWord = emojiToWord[chosen];
    if (clickedWord) speak(clickedWord);

    const feedbackEl = document.getElementById('feedback');

    if (chosen === correct) {
        card.classList.add('correct');
        feedbackEl.textContent = 'Richtig! \uD83C\uDF1F';
        feedbackEl.className = 'feedback-correct';
        score += 10;
        levelScore += 10;
        document.getElementById('score').textContent = score;
    } else {
        card.classList.add('wrong');
        // Highlight the correct one
        cards.forEach(c => {
            if (c.textContent === correct) {
                c.classList.add('correct');
            }
        });
        feedbackEl.textContent = 'Nicht ganz... Versuch es weiter!';
        feedbackEl.className = 'feedback-wrong';
    }

    totalQuestions++;
    levelQuestions++;
    currentWordIndex++;
    updateProgress();

    const delay = chosen === correct ? 1000 : 1800;

    setTimeout(() => {
        if (currentWordIndex < levels[currentLevel].words.length) {
            showWord();
        } else {
            showLevelComplete();
        }
    }, delay);
}

function showLevelComplete() {
    showScreen('level-complete-screen');

    const maxScore = levels[currentLevel].words.length * 10;
    const pct = levelScore / maxScore;

    saveProgress(currentLevel, levelScore, maxScore);

    let stars = '';
    if (pct >= 0.8) stars = '\u2B50\u2B50\u2B50';
    else if (pct >= 0.5) stars = '\u2B50\u2B50';
    else stars = '\u2B50';

    const title = document.getElementById('level-complete-title');
    if (pct === 1) title.textContent = 'Perfekt! \uD83C\uDF89';
    else if (pct >= 0.8) title.textContent = 'Super gemacht!';
    else if (pct >= 0.5) title.textContent = 'Gut gemacht!';
    else title.textContent = 'Weiter so!';

    document.getElementById('stars-container').textContent = stars;
    document.getElementById('level-score-text').textContent =
        levelScore + ' von ' + maxScore + ' Punkten';
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        startLevel();
    } else {
        showLevelPicker();
    }
}

function showGameComplete() {
    showScreen('game-complete-screen');

    const maxTotal = levels.reduce((sum, l) => sum + l.words.length * 10, 0);
    const pct = score / maxTotal;

    let stars = '';
    if (pct >= 0.8) stars = '\u2B50\u2B50\u2B50';
    else if (pct >= 0.5) stars = '\u2B50\u2B50';
    else stars = '\u2B50';

    document.getElementById('final-stars').textContent = stars;
    document.getElementById('final-score-text').textContent =
        'Du hast ' + score + ' von ' + maxTotal + ' Punkten!';
}
