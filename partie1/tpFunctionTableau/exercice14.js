
// function estPalindrome(mot) {

//     let tabs = mot.split('')
//     let i = 0; let j = tabs.length -1;
//     let estpalindrome = true;
//      while (i < tabs.length && estpalindrome){
//          if(tabs[i]== tabs[j]){
//             estpalindrome = true
//          }else {
//              estpalindrome =false;
//          }
//          i++;
//          j--;
//      }
//      return estpalindrome
// }
// let mot = "bonjour";
//  if(estPalindrome(mot))
//  {
//      console.log("estpalindrome")
//  }else{
//     console.log("nom pas palindrome")
//  }


function estPalindrome(mot){
    const tabs = mot.split('');
    const tabInv = tabs.slice().reverse();
    for(let index in tabs){
        if(tabs[index] !==tabInv[index]){
            return false;
        }
    }
    return true;
}

const mot = "bonjours"

console.log(estPalindrome(mot))
