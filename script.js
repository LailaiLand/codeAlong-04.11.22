let ord = 'Det var en gang en lite spilledåse som het leif';
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let dice5 = 0;
let count = 0;
showContent();
function showContent(){
    document.getElementById('content').innerHTML = /*html*/ `
    <div onclick="lupdilup()">${dice1}${dice2}${dice3}${dice4}${dice5} </div>

    `;
}

function generateRandom(){
    return Math.floor(Math.random() * 6)+ 1;
    
}
function fiveDice(){
    if (dice1 == 0) dice1 = generateRandom();
    else if (dice2 == 0) dice2 = generateRandom();
    else if (dice3 == 0) dice3 = generateRandom();
    else if (dice4 == 0) dice4 = generateRandom();
    else if (dice5 == 0) dice5 = generateRandom();

    showContent()
}

function lupdilup(){
    for (let i = 0; i < ord.length; i++) {
        if (ord[i] == 'e') count++;
        
    }
    console.log(count);
}