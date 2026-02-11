// German Reading Game for Kids
// Word-image matching with levels and scoring

const levels = [
    {
        name: "Tiere",
        words: [
            { word: "Hund",    emoji: "\uD83D\uDC36", distractors: ["\uD83D\uDC31", "\uD83D\uDC2D"] },
            { word: "Katze",   emoji: "\uD83D\uDC31", distractors: ["\uD83D\uDC36", "\uD83D\uDC30"] },
            { word: "Fisch",   emoji: "\uD83D\uDC1F", distractors: ["\uD83D\uDC26", "\uD83D\uDC0D"] },
            { word: "Vogel",   emoji: "\uD83D\uDC26", distractors: ["\uD83D\uDC1F", "\uD83E\uDD8B"] },
            { word: "Maus",    emoji: "\uD83D\uDC2D", distractors: ["\uD83D\uDC30", "\uD83D\uDC36"] },
        ]
    },
    {
        name: "Essen",
        words: [
            { word: "Apfel",   emoji: "\uD83C\uDF4E", distractors: ["\uD83C\uDF4C", "\uD83C\uDF53"] },
            { word: "Banane",  emoji: "\uD83C\uDF4C", distractors: ["\uD83C\uDF4E", "\uD83C\uDF47"] },
            { word: "Brot",    emoji: "\uD83C\uDF5E", distractors: ["\uD83C\uDF70", "\uD83C\uDF55"] },
            { word: "Kuchen",  emoji: "\uD83C\uDF70", distractors: ["\uD83C\uDF5E", "\uD83C\uDF66"] },
            { word: "Eis",     emoji: "\uD83C\uDF66", distractors: ["\uD83C\uDF70", "\uD83C\uDF4E"] },
        ]
    },
    {
        name: "Natur",
        words: [
            { word: "Sonne",   emoji: "\u2600\uFE0F",  distractors: ["\uD83C\uDF19", "\u2B50"] },
            { word: "Mond",    emoji: "\uD83C\uDF19",  distractors: ["\u2600\uFE0F", "\u2601\uFE0F"] },
            { word: "Stern",   emoji: "\u2B50",        distractors: ["\uD83C\uDF19", "\u2600\uFE0F"] },
            { word: "Blume",   emoji: "\uD83C\uDF3B",  distractors: ["\uD83C\uDF33", "\uD83C\uDF35"] },
            { word: "Baum",    emoji: "\uD83C\uDF33",  distractors: ["\uD83C\uDF3B", "\uD83C\uDF35"] },
        ]
    },
    {
        name: "Sachen",
        words: [
            { word: "Ball",    emoji: "\u26BD",        distractors: ["\uD83C\uDFB8", "\uD83D\uDE97"] },
            { word: "Auto",    emoji: "\uD83D\uDE97",  distractors: ["\u26BD", "\uD83D\uDEB2"] },
            { word: "Fahrrad", emoji: "\uD83D\uDEB2",  distractors: ["\uD83D\uDE97", "\u26BD"] },
            { word: "Haus",    emoji: "\uD83C\uDFE0",  distractors: ["\uD83D\uDEB2", "\uD83D\uDCDA"] },
            { word: "Buch",    emoji: "\uD83D\uDCDA",  distractors: ["\uD83C\uDFE0", "\uD83C\uDFB8"] },
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
        ]
    },
];

let currentLevel = 0;
let currentWordIndex = 0;
let score = 0;
let levelScore = 0;
let totalQuestions = 0;
let levelQuestions = 0;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function buildLevelPicker() {
    const grid = document.getElementById('level-grid');
    grid.innerHTML = '';
    levels.forEach((level, i) => {
        const card = document.createElement('button');
        card.className = 'level-card';
        card.innerHTML =
            '<span class="level-card-emoji">' + level.words[0].emoji + '</span>' +
            '<span class="level-card-name">' + level.name + '</span>' +
            '<span class="level-card-num">Level ' + (i + 1) + '</span>';
        card.addEventListener('click', () => pickLevel(i));
        grid.appendChild(card);
    });
}

function showLevelPicker() {
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
