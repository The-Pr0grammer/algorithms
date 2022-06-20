function palindrome(str) {
    let result = true;
  
    let cs = str
    .replace(/[\W_]/gi," ")
    .match(/[\w]/gi)
  
  
    let reverse = [...cs].reverse()
    .join("")
    .toLowerCase()
  
    cs = cs
    .join("")
    .toLowerCase()
    
    console.log(cs)
    
    for(let i = 0; i < cs.length; i++){
      if (cs[i] !== reverse[i]){
        result = false;
      }
    }
  
  
    return result;
  }