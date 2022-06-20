function telephoneCheck(str) {
    let cs = str.match(/[-0-9|\()]/g)
    let op = cs.filter(ele => ele == '(')
    let cp = cs.filter(ele => ele == ')')
    let ds = cs.filter(ele => ele == '-')
    let pi = cs.indexOf("(")
    let ns = cs.filter(ele=> ele.match(/[0-9]/g))
    
    // console.log(ns)
  
  
    if (op.length > 1 || cp.length > 1){
      console.log('c1')
  
      return false;
    }
    else if ((op.length !== 0 && cp.length == 0) 
    || (op.length == 0 && cp.length !== 0)){
      console.log('c2')
      
      return false;
    }
    else if (pi > 1){
      console.log('c3')
  
      return false;
    }
    else if(pi > -1 && cs[pi+4] !== ')'){
      console.log('c4')
  
      return false;
    }
    else if (cs.length < 10 || cs.length > 15){
      console.log('c5')
  
      return false;
    }
    else if (pi == 1 && cs[0] !== '1'){
      console.log('c6')
  
      return false
    }
    else if (pi > 0 && cs[0] !== '1'
    ){
      console.log('c7')
  
      return false
    }
    else if (pi < 0 && cs.filter(ele => ele !== '-').length > 10 && cs[0] !== '1'){
      console.log('c8')
  
      return false;
    }
    else if (pi < 0 && ns.length !== 10 && ns.length !== 11){
      console.log('c9') 
  
      return false;
    }
    else if (pi == 0 && (ns.length !== 10 && ns.length !== 11)){
      console.log('c10')
  
      return false;
    }
    else if (pi > -1 && (ns.length !== 10 && ns.length !== 11)){
      console.log('c11')
  
      return false;
    }
    else if (pi == 0 && ns.length > 10 ) {
      console.log('c12') 
      
  
      return false;
    }
    else if (ds.length > 2) {
      console.log('c13') 
      
  
      return false;
    }
    else {
      console.log('c14') 
  
      return true;
    }
  
    
  }
   
  telephoneCheck("55 55-55-555-5")