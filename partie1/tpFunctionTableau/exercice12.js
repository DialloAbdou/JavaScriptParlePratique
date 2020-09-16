let tabs = [
            {nom : "Tya", age : 25},
            {nom : "Toto", age : 22},
            {nom : "Milo", age : 32},
            {nom : "Mina", age : 32},
        ];

 /**
     * 
     * elle recupere l'indice 
  * @param {*} nom 
 */

 const myIndex = tabs.findIndex(function(person){
     return person.nom === "Milo";

 });
 console.log(myIndex)
tabs.splice(myIndex,1);
 console.log(tabs)

// function suppression(tab, nom){
   
//     let tabNew =[]
//     for (const index in tab){
       
//         if(tab[index].nom !== nom)
//             tabNew.push(tab[index])
//     }       
//     console.log(tabNew)
// }

// suppression(tab, "Milo")