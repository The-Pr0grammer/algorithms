function convertToRoman(num) {
    let an = '' 
    
    while(num >= 1000){
      num-= 1000;
      an += 'M'
    }
    while(num >= 900){
       num-= 900;
      an += 'CM'
    }
    while(num >= 500){
   num-= 500;
      an += 'D'
    }
    while(num >= 400){
   num-= 400;
      an += 'CD'
    }
    while(num >= 100){
   num-= 100;
      an += 'C'
    }
    while(num >= 90){
   num-= 90;
      an += 'XC'
    }
    while(num >= 50){
   num-= 50;
      an += 'L'
    }
    while(num >= 40){
   num-= 40;
      an += 'XL'
    }
    while(num >= 10){
   num-= 10;
      an += 'X'
    }
    while(num >= 9){
   num-= 9;
      an += 'IX'
    }
    while(num >= 5){
   num-= 5;
      an += 'V'
    }
    while(num >= 4){
   num-= 4;
      an += 'IV'
    }
    while(num >= 1){
   num-= 1;
      an += 'I'
    }
  console.log(an)
  return an;
  }