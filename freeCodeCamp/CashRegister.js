function checkCashRegister(price, cash, cid) {
    let drawSum = cid.map(currency => currency[1]).reduce((sum, c)=> sum+=c,0)
    let change = cash - price;
    let changeCheck = cash - price;
    let changeArr = [];
    let c_vals = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  
  
    for(let i = 8; i >= 0; i--){
      if (c_vals[i] <= changeCheck){
        let c_amt = 0;
        while (c_amt + c_vals[i] <= changeCheck &&
        c_amt + c_vals[i] <= cid[i][1]){
          c_amt += c_vals[i]
        }
        changeCheck = (changeCheck - c_amt).toFixed(2)
        c_amt > 0 && changeArr.push([cid[i][0], c_amt]) 
      }
    } 
  
    console.log(changeArr) 
    console.log(changeCheck)  
  
    if (drawSum == change){
      return {status: 'CLOSED',change:[...cid]} 
    }
    else if (changeArr.length > 0 && changeCheck == 0){
        console.log("condition met")
        console.log({status: 'OPEN', change:changeArr})
        return {status: 'OPEN', change:changeArr} 
    }
    else {
      return {status: "INSUFFICIENT_FUNDS", change: []} 
    }
  
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])