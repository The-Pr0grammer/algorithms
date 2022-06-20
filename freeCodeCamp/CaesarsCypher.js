function rot13(str) {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let ss = str.split("")
    let ns = ''
  
    for (let letter of ss){
      let old_i = alpha.indexOf(letter);
      let new_i = alpha.indexOf(letter);  
  
      for(let i = old_i; i < old_i + 13; i++){
        if (new_i >= 25){
          new_i = 0;
        }
        else{
          new_i += 1;
        }
      }
  
      ns = old_i > -1? ns + alpha[new_i]:ns+ letter      
    }
  
  return ns;
  }
  
  rot13("SERR PBQR PNZC");