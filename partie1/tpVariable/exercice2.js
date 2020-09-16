calculFactorielle(5)

function calculFactorielle(nbre){
    let text = "*";
    let result =1;
    for(let i=1; i<nbre; i++){
        text+= i+ " * "+(i+1)
        result+=result*i

    }
    console.log(text+ " = "+ result)
}