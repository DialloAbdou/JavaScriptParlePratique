
//======Utilisation de For ...In======

function moyenne(tab){
    let moyenne = 0;
    let total = 0;
    for(const index in tab){
        total += tab[index]
    }
    moyenne = total/tab.length;
    return moyenne;
}
const tab=[5,10,15,20]
// console.log(`la Moyenne est de : ${moyenne(tab)}`)
//======Utilisation de For ...OF======

function moyenneOF(tab) {
    let moyenne= 0;
    let total = 0;
    for(const value of tab){
       total += value;
    }
    moyenne = total / tab.length;
   return moyenne;
}
 console.log(`la Moyenne est de : ${moyenneOF(tab)}`)
