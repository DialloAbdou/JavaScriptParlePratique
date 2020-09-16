const villes = [
    ["Paris",48.8534,2.3488],
    ["Toulouse",46.6043,1.4437],
    ["Lyon",45.75,4.85],
]

const [,,n3] = villes;
const ville = n3
//console.log(ville)
//  console.log(`----${n3[0]}----`)
//  console.log(`Latitude: ${n3[1]}`)
//  console.log(`Longitute: ${n3[2]}`)


 affichageCoordonnees(ville)
//===========Fonction A réaliser ====

function affichageCoordonnees(ville){
    let affichage = ` 
     ------- ${ville[0]} ------
     Latitude : ${ville[1]}
     Longitute : ${ville[2]}`;
     console.log(affichage)
}
// function affichageCoordonnees(ville){
//     let affichage = `
//     ------- ${ville[0]} --------
//     Latitude : ${ville[1]}
//     Longitude: ${ville[2]}`;
//     console.log(affichage);

// }
