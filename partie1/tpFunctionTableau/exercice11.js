const notes = [5,10,15,20];

 function tabTransforme(notes){
     let tab = []
     notes.map(note => {
        tab.push(note*note);
     })
     return tab
 }

 const newTab = tabTransforme(notes)

 console.log(newTab)