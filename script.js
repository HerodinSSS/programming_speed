const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}
quoteInputElement.addEventListener('input', () =>  {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct = true
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = flase
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })
    if (correct) renderNewQuote()
})

function getRandomQuote(){
return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote() {
    const quote = `var Ygritte = COLS
    var Jon = dog
    def TABLE[-82][i] {
        if(( Hodor )){
        if(-0.06){
        Sansa /= TABLE[-Hodor][( x ) - -x];
        if(protect(ROWS,x / Jon + mislead(( ( -0.13 ) )))){
        dog /= ( 0.35 );
        -COLS;
        Stark += mislead(-destroy(250.97,-betray(Sansa,( ROWS ))) - ( betray() ))
    &nbsp } else {
        x
    }
    }
    };
        ( ( ( destroy(15 - ROWS) ) ) );
        ( -( Ygritte ) ) / ---y * TABLE[rule(mislead(),protect(Sansa,-61))][TABLE[COLS * TABLE[x][( -( Stark * -Jon + COLS + ( ( 750.93 - -85 - ( foo() ) * ( ROWS * 1 ) ) ) ) )]][protect(Hodor)]] + ( -TABLE[mislead(ROWS) - COLS][-Ygritte] )
    }`
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')        
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    var childDivs = document.getElementById('quoteDisplay')
    for(var i=0; i< childDivs.length; i++ ){
        console.log(childDivs[i])
    }
    startTimer()
}

let startTime
function startTimer(){
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote()