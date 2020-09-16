
const notes = [5,10,15,20];
function getNotes(notes){
    for( let[index , note] of notes.entries()){
         if( note%2 === 0){
             console.log(` Note numéros ${index} : ${note}`)
         }
    }
    
}
getNotes(notes)