
const memory = document.querySelector('.memory-screen')
const gameScreen = document.querySelector('.game-screen')
const startPage = document.querySelector('.home')
const languageFlag = document.querySelector('.language')
const userCards = document.querySelector('.userCards')

const testScreen = document.querySelector('.test-screen')
const inputBox = document.querySelector('.input-box')
const startClick = document.querySelector('.start-button')
const learnClick = document.querySelector('.learn-button')
const playClick = document.querySelector('.play-button')
const cardScreen = document.querySelector('.card-screen')
const profile = document.querySelector('.profile')
const tests = document.querySelector('.test')

const url = 'http://localhost:8080/play'

//  Dummy Data Solution
let data = [
    {
        image_url: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        foreignLang: 'nick',
        english: 'eng'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        foreignLang: 'batia',
        english: 'eng'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        foreignLang: 'pouyan',
        english: 'eng'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        foreignLang: 'philip',
        english: 'eng'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        foreignLang: 'foreign',
        english: 'eng'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        foreignLang: 'foreign',
        english: 'eng'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        foreignLang: 'foreign',
        english: 'eng'
    }
]

// memory page
const memoryScreen = function(data) {

    memory.classList.add('hide')
    gameScreen.classList.add('hide')
    startPage.classList.add('hide')
    languageFlag.classList.add('hide')
    userCards.classList.add('hide')

    memory.classList.remove('hide')

    for (let i = 0; i < data.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img')
        img.classList.add('img');
        img.src = data[i].image_url
        card.appendChild(img)

        let foreignLang = document.createElement('h2')
        foreignLang.classList.add('text');
        foreignLang.textContent = data[i].foreignLang
        card.appendChild(foreignLang)

        let englishWord = document.createElement('h3')
        englishWord.classList.add('text');
        englishWord.textContent = data[i].english
        card.appendChild(englishWord)
        cardScreen.appendChild(card);
    }

    let playButton = document.createElement('button');
    playButton.textContent = 'PLAY'
    playButton.classList.add('play-btn');
    playClick.append(playButton);

    playButton.addEventListener('click', function(event){
        event.preventDefault()
        playScreen(data)
    })
}

// start page
const start = function() {

    memory.classList.add('hide')
    gameScreen.classList.add('hide')
    startPage.classList.add('hide')
    languageFlag.classList.add('hide')
    userCards.classList.add('hide')
    startPage.classList.remove('hide')

    let userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('value', '');
    inputBox.appendChild(userInput)
    
    let startButton = document.createElement('button');
    startButton.textContent = 'START'
    startButton.classList.add('start-btn');
    startClick.append(startButton);

    startButton.addEventListener('click', function(event){
        event.preventDefault()

        axios
        .get('')
        .then(res => {
            chooseLanguage(res.data)
        })
    })
}

// language page
const chooseLanguage = function() {

    memory.classList.add('hide')
    gameScreen.classList.add('hide')
    startPage.classList.add('hide')
    languageFlag.classList.add('hide')
    userCards.classList.add('hide')
    languageFlag.classList.remove('hide')

    let languages = ['german', 'french', 'italian']
    let flags = ['🇩🇪', '🇫🇷', '🇮🇹']

    languages.forEach((language, index) => {
        let chosenLang = document.createElement('div');
        chosenLang.setAttribute('data-lang', `${language}`);
        chosenLang.classList.add('languages');

        let img = document.createElement('h1')
        img.classList.add('flag-language');
        img.textContent = flags[index]
        chosenLang.appendChild(img)
        languageFlag.appendChild(chosenLang)

        img.addEventListener('click', function(event){
            event.preventDefault()

            axios
            .get('')
            .then(res => {
                memoryScreen(res.data)
            })
        })
    })
}

//  Dummy Data Solution
let userLang = [
    {
        image_url: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        english: 'en',
        german: 'ger',
        french: 'fre',
        italian: 'ita'

    },
    {
        image_url: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        english: 'en',
        french: 'fre',
        italian: 'ita'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        english: 'en',
        italian: 'ita'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        english: 'en',
        german: 'ger',
    },
    {
        image_url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        english: 'en',
        french: 'fre',
        italian: 'ita'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        english: 'en',
        german: 'ger',
        french: 'fre',
    }
]

// add if statement user is on database to run the function
const makeProfile = function(data) {

    memory.classList.add('hide')
    gameScreen.classList.add('hide')
    startPage.classList.add('hide')
    languageFlag.classList.add('hide')
    userCards.classList.add('hide')
    userCards.classList.remove('hide')

    for (let i = 0; i < data.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img')
        img.classList.add('img');
        img.src = data[i].image_url
        card.appendChild(img)

        let germanLang = document.createElement('h2')
        germanLang.classList.add('text');
        germanLang.textContent = data[i].german
        card.appendChild(germanLang)

        let frenchLang = document.createElement('h2')
        frenchLang.classList.add('text');
        frenchLang.textContent = data[i].french
        card.appendChild(frenchLang)

        let italianLang = document.createElement('h2')
        italianLang.classList.add('text');
        italianLang.textContent = data[i].italian
        card.appendChild(italianLang)

        let englishWord = document.createElement('h2')
        englishWord.classList.add('text');
        englishWord.textContent = data[i].english
        card.appendChild(englishWord)
        profile.appendChild(card);

    }

    let learnButton = document.createElement('button');
    learnButton.textContent = 'LEARN'
    learnButton.classList.add('start-btn');
    learnClick.append(learnButton);

    learnButton.addEventListener('click', function(event){
        event.preventDefault()
    
        axios
        .get('')
        .then(res => {
            chooseLanguage(res.data)
        })
    })
}

makeProfile(userLang)
start()