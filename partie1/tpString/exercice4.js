const V1 = {
    nom: "Paris",
    lat: "48.8534",
    long: "2.3488"
};

const V2 = {
    nom: "Toulouse",
    lat: "46.6043",
    long: "2.3488"
};

const V3 = {
    nom: "Lyon",
    lat: "45.75",
    long: "4.85"
};

function affichageCoordonnees(Ville){
   let reponse = ` - - - - -  ${Ville.nom} - - - - -   \n Latitude : ${Ville.lat} \n Longitude : ${Ville.long}\n`
   console.log(reponse)
}
affichageCoordonnees(V1)
affichageCoordonnees(V2)
affichageCoordonnees(V3)
