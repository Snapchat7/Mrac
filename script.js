
let selectedCharacter = "";
let currentLevel = 1;

function selectCharacter(name) {
    selectedCharacter = name;
    document.getElementById('selectedCharacterTitle').innerText = `لقد اخترت ${name} - المستوى ${currentLevel}`;
    document.getElementById('characters').classList.add('hidden');
    document.getElementById('levelSelection').classList.remove('hidden');
}

function startLevel() {
    const levelTitle = document.getElementById('levelTitle');
    const gameContent = document.getElementById('gameContent');

    levelTitle.innerText = `أنت في المستوى ${currentLevel} مع ${selectedCharacter}`;
    
    if (selectedCharacter === 'محمد') {
        if (currentLevel === 1) {
            gameContent.innerHTML = '<p>تجنب العقبات واجمع النقاط!</p>';
        } else if (currentLevel === 2) {
            gameContent.innerHTML = '<p>واجه خصوم أقوى!</p>';
        } else {
            gameContent.innerHTML = '<p>واجه الزعيم النهائي زينوس!</p>';
        }
    } else if (selectedCharacter === 'براءة') {
        if (currentLevel === 1) {
            gameContent.innerHTML = '<p>اجمع الأزهار وتجنب الأعداء!</p>';
        } else if (currentLevel === 2) {
            gameContent.innerHTML = '<p>قاتل الأعداء المتقدمين!</p>';
        } else {
            gameContent.innerHTML = '<p>حارب زينوس في مواجهة حاسمة!</p>';
        }
    }

    document.getElementById('levelSelection').classList.add('hidden');
    document.getElementById('gameArea').classList.remove('hidden');
}

function completeLevel() {
    if (currentLevel < 3) {
        currentLevel++;
        document.getElementById('selectedCharacterTitle').innerText = `لقد اخترت ${selectedCharacter} - المستوى ${currentLevel}`;
        document.getElementById('gameArea').classList.add('hidden');
        document.getElementById('levelSelection').classList.remove('hidden');
    } else {
        alert(`تهانينا! أكملت جميع المستويات مع ${selectedCharacter}!`);
        resetGame();
    }
}

function resetGame() {
    selectedCharacter = "";
    currentLevel = 1;
    document.getElementById('characters').classList.remove('hidden');
    document.getElementById('levelSelection').classList.add('hidden');
    document.getElementById('gameArea').classList.add('hidden');
}
