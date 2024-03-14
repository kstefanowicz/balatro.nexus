$(document).ready(function () {
    let $seedDisplay = $('#seed-display')
    let $seedButton  = $('#seed-button')

    let $deckDisplay = $('#deck-display')
    let $deckButton  = $('#deck-button')

    
    let $stakeDisplay  = $('#stake-display')
    let $stakeButton  = $('#stake-button')
    
    let $deckImageDisplay = $('#deck-image')
    let $stakeImageDisplay = $('#stake-image')


    $seedButton.on('click', function(){
        displayNewRandomSeed($seedDisplay)
    })
    displayNewRandomSeed($seedDisplay)

    $deckButton.on('click', function(){
        displayNewRandomDeck($deckDisplay, $deckImageDisplay, 16)
    })
    displayNewRandomDeck($deckDisplay,$deckImageDisplay)

    $stakeButton.on('click', function(){
        displayNewRandomStake($stakeDisplay, $stakeImageDisplay, 7)
    })
    displayNewRandomStake($stakeDisplay, $stakeImageDisplay)


    // Create power seed table
    let $testTable = $('#table-root')
    let testSeeds = []
    testSeeds.push(new PowerSeed('AJPU86Z2', 'Poly Card Sharp Start', 'KStep'))
    testSeeds.push(new PowerSeed('BR5RSD3D', 'Midas + Vampire early', 'OK'))
    testSeeds.push(new PowerSeed('D38IYHIA', 'Max econ + double legendary joker start', 'x2'))
    testSeeds.push(new PowerSeed('7LB2WVPK', 'Walkie Talkie Search, turned into flush five', 'Aksu'))
    testSeeds.push(new PowerSeed('IK74Y8DL', 'OP FIRST SHOP TRIBOULET', 'Spar10'))
    testSeeds.push(new PowerSeed('11A8CHK2', 'Blueprint + Perkeo + Poly Red Seal King', 'Ugleh'))
    buildPowerSeedTable(testSeeds, $testTable)

    // Add "Click to copy!" tooltip to seeds
    let $seedCopies = $('.seed-copy');
    $seedCopies.each(function () {
        $(this).attr({
            'data-bs-toggle': 'tooltip',
            'data-bs-placement': 'left',
            'data-bs-title': 'Click to copy!'
        })
        $(this).tooltip()

        $(this).on('click', function () {
            toClipboard($(this).text())
            
            $(this).tooltip('hide')
            $(this).attr('data-bs-title', 'Copied!').tooltip('dispose').tooltip();
            $(this).tooltip('show')
        })

        $(this).on('mouseleave', function () {
            $(this).tooltip('hide')
            $(this).attr('data-bs-title', 'Click to copy!').tooltip('dispose').tooltip();
        })
    })

    // Build Deck dropdown
    $selectDeck = $('#deck-dropdown-root')

    allDecks = []
    allDecks.push(new DropdownOption('Red Deck', 'Red_Deck.png'))
    allDecks.push(new DropdownOption('Blue Deck', 'Blue_Deck.png'))
    allDecks.push(new DropdownOption('Yellow Deck', 'Yellow_Deck.png'))
    allDecks.push(new DropdownOption('Green Deck', 'Green_Deck.png'))
    allDecks.push(new DropdownOption('Black Deck', 'Black_Deck.png'))
    allDecks.push(new DropdownOption('Magic Deck', 'Magic_Deck.png'))
    allDecks.push(new DropdownOption('Nebula Deck', 'Nebula_Deck.png'))
    allDecks.push(new DropdownOption('Ghost Deck', 'Ghost_Deck.png'))
    allDecks.push(new DropdownOption('Abandoned Deck', 'Abandoned_Deck.png'))
    allDecks.push(new DropdownOption('Checkered Deck', 'Checkered_Deck.png'))
    allDecks.push(new DropdownOption('Zodiac Deck', 'Zodiac_Deck.png'))
    allDecks.push(new DropdownOption('Painted Deck', 'Painted_Deck.png'))
    allDecks.push(new DropdownOption('Anaglyph Deck', 'Anaglyph_Deck.png'))
    allDecks.push(new DropdownOption('Plasma Deck', 'Plasma_Deck.png'))
    allDecks.push(new DropdownOption('Erratic Deck', 'Erratic_Deck.png'))
    
    buildDeckDropDown(allDecks, $selectDeck)

    // Set up Select Deck dropdown functionality
    let $deckSelections = $('.deck-selection')
    $
    $deckSelections.on('click',function(){
        $deckDisplay.text($(this).text())
        $deckImageDisplay.attr('src',`src/img/decks/${toImgFileName($(this).text())}`)
    })

    $selectStake = $('#stake-dropdown-root')

    allStakes = []
    allStakes.push(new DropdownOption('White Stake', 'White_Stake.png'))
    allStakes.push(new DropdownOption('Red Stake', 'Red_Stake.png'))
    allStakes.push(new DropdownOption('Green Stake', 'Green_Stake.png'))
    allStakes.push(new DropdownOption('Black Stake', 'Black_Stake.png'))
    allStakes.push(new DropdownOption('Blue Stake', 'Blue_Stake.png'))
    allStakes.push(new DropdownOption('Purple Stake', 'Purple_Stake.png'))
    allStakes.push(new DropdownOption('Orange Stake', 'Orange_Stake.png'))
    allStakes.push(new DropdownOption('Gold Stake', 'Gold_Stake.png'))

    buildStakeDropDown(allStakes, $selectStake)

    let $stakeSelections = $('.stake-selection')
    $
    $stakeSelections.on('click',function(){
        $stakeDisplay.text($(this).text())
        $stakeImageDisplay.attr('src',`src/img/stakes/${toImgFileName($(this).text())}`)
    })




})


function toClipboard(text){
    navigator.clipboard.writeText(text)

}

function toImgFileName(deckName){    
    let outName = (deckName.replace(' ','_'))
    outName = outName + '.png'
    return outName.replace(/ /g,'').replace('\n','')
}

//#region Randomize and update displays

function displayNewRandomSeed(display){
    display.text(generateSeed())
}

function displayNewRandomDeck(displayText, displayImg, num=5){
    let selection = generateDeck(num)
    displayText.text(selection)
    displayImg.attr('src',`src/img/decks/${toImgFileName(selection)}`)
}

function displayNewRandomStake(display, displayImg, num=0){
    let selection = generateStake(num)
    display.text(selection)
    displayImg.attr('src',`src/img/stakes/${toImgFileName(selection)}`)
}

function generateSeed(){
    // Method to get array of all possible seeds 
    // #region Generated via Higgs, AI tool from covalence.io
    
    // Generate all uppercase letters (A-Z)
    const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

    // Generate all numbers (0-9)
    const numbers = Array.from({ length: 10 }, (_, i) => i);

    // Combine both arrays
    const combinedArray = letters.concat(numbers);

    // End of Higgs

    let outSeed = ""

    for (let i = 0; i <= 8; i++){
        outSeed += combinedArray[genRandom(36)]
    }

    return outSeed

    
    //#endregion
}

function generateDeck(num){
    let possibleDecks = ["Red Deck", "Blue Deck","Yellow Deck","Green Deck","Black Deck","Magic Deck","Nebula Deck","Ghost Deck","Abandoned Deck","Checkered Deck","Zodiac Deck","Painted Deck","Anaglyph Deck","Plasma Deck","Erratic Deck"]
    return possibleDecks[genRandom(num)]

}

function generateStake(num){
    let possibleStakes = ["White Stake","Red Stake","Green Stake","Black Stake","Blue Stake","Purple Stake","Orange Stake","Gold Stake"]
    return possibleStakes[genRandom(num)]
}


function genRandom(max){
    return (Math.floor(Math.random()*max))

}

//#endregion

class DropdownOption {
    constructor(deckName, fileName){
        this.name = deckName
        this.fileName = fileName
    }
}
function buildDeckDropDown(deckList, $deckDropdown){
    deckList.forEach(deck => {
        $deckDropdown.append(`<button class="deck-selection btn btn-secondary dropdown-item" href="#"><img class src="src/img/decks/${deck.fileName}"
        height="16px" width="10px" alt="">${deck.name}</a></button>`)
    })
}

function buildStakeDropDown(stakeList, $stakeDropdown) {
    console.log("BUILDING STAKES")
    stakeList.forEach(stake => {
        $stakeDropdown.append(`<button class="stake-selection btn btn-secondary dropdown-item" href="#"><img class src="src/img/stakes/${stake.fileName}"
        height="16px" width="10px" alt="">${stake.name}</a></button>`)
    })
}


class PowerSeed {
    constructor(seed, description, discoverer) {
        this.seed = seed
        this.description = description
        this.discoverer = discoverer
    }
}

function buildPowerSeedTable(powerSeeds, $tableRoot){
    powerSeeds.forEach(seed => {
        $tableRoot.append(`<tr><td class="seed-copy w-auto"><button class="btn btn-secondary" type="button">${seed.seed}</button></td><td>${seed.description}</td><td>${seed.discoverer}</td></tr>`)

    })
}