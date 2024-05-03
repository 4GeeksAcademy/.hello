const cardValue=['A','2','3','4','5','6','7','8','9','10','j','Q','k'];
const cardSuits=['♠',' ♦','   ♣','   ♥'];
4
function randomcard(){
 

 
 

 





    const randomValueIndex = Math.floor(Math.random() * cardValue.length);
    const randomSuitIndex = Math.floor(Math.random() * cardSuits.length);
    

    const randomValue = cardValue[randomValueIndex];
    const randomSuit = cardSuits[randomSuitIndex];



    document.getElementById('card-first').innerText = randomSuit;
    document.getElementById('card-second').innerText = randomValue;
    document.getElementById('card-third').innerText=randomSuit;

}
randomcard()
setInterval(randomcard, 10000);