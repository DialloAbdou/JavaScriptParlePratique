 /**
  *  elle renvoie le ramdom
  * @param {*} max 
  */
 const Max = 10;
 function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function tabRandom() {
    let tab = [];
    for (let i= 0; i< Max; i++){
         tab[i] = getRandomInt(2)
    }
    return tab;
}
function NbrePileFace(tab){
    let nbrePile = 0;
    let nbreFace = 0;
    for(const valeur of tab){
        if(valeur === 1){
           nbreFace++;
        }else{
            nbrePile++;
        }
    }
    let text = `Le nombre de piles est de : ${nbrePile}, le nombre de face est de : ${nbreFace}, le nombre de face: ${nbreFace}`
    console.log(text)
}

const tableau = tabRandom();
console.log(tableau)
 NbrePileFace(tableau)
