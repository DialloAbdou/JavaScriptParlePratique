
const mots = ["clou","flou","bijou","genou","trou"]
const motsExpe = ["bijou","caillou","genou","hibou","joujou", "pou"]
let newMots =[];
newMots = mots.map(mot=>{
    if(motsExpe.includes(mot)){ 
        return  mot+"x";
    }else{
        return  mot+"s";
    }
})
console.log(newMots)


//  function fnUpdate(mots){
//     let val = ""
//     for (let valeur of mots){
//          if (valeur === "bijou"|| valeur === "genou"){
//               val = valeur+"x"
//               newMots.push(val)
//          }else
//          {
//              val = valeur+"s"
//              newMots.push(val)
//          }
        
//      
//  }
//  fnUpdate(mots)
//  console.log(newMots)


