$(document).ready(function () {
    let $seedDisplay = $('#seed-display')
    let $seedButton  = $('#seed-button')

    let $deckDisplay = $('#deck-display')
    let $deckButton  = $('#deck-button')

    
    let $stakeDisplay  = $('#stake-display')
    let $stakeButton  = $('#stake-button')


    $seedButton.on('click', function(){
        newSeed($seedDisplay)
    })
    newSeed($seedDisplay)

    $deckButton.on('click', function(){
        newDeck($deckDisplay, 16)
    })
    newDeck($deckDisplay)

    $stakeButton.on('click', function(){
        newStake($stakeDisplay, 7)
    })
    newStake($stakeDisplay)


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


})

function toClipboard(text){
    navigator.clipboard.writeText(text)

}

function newSeed(display){
    display.text(generateSeed())
}

function newDeck(display, num=5){
    display.text(generateDeck(num))
}

function newStake(display, num=0){
    display.text(generateStake(num))
}

function generateSeed(){
    // Method to get array of all possible seeds 
    // Generated via Higgs, AI tool from covalence.io
    
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
    let possibleDecks = ["Red Deck", "Blue Deck","Yellow Deck","Green Deck","Black Deck","Magic Deck","Nebula Deck","Ghost Deck","Abandoned Deck","Checkered Deck","Zodiac Deck","Painted Deck","Anaglyph Deck","Plasma Deck","Erratic Deck","Challenge Deck"]
    return possibleDecks[genRandom(num)]

}

function generateStake(num){
    let possibleStakes = ["White Stake","Red Stake","Green Stake","Black Stake","Blue Stake,","Purple Stake","Orange Stake","Gold Stake"]
    return possibleStakes[genRandom(num)]
}


function genRandom(max){
    return (Math.floor(Math.random()*max))

}