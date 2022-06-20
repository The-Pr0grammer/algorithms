'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    let count_h = {}
    for(let i = 0; i < s.length; i++){
        if (Object.keys(count_h).includes(s[i])){
             count_h[s[i]] += 1;
        }
        else{
            count_h[s[i]] = 1;
        }
      }
    
    let values = Object.values(count_h).sort((a,b)=> a<b?1:-1)
    
    if(values.length <= 1){return "YES"}
    else if (values.every(v=> values[0] === v)){return "YES"}
    else{
        console.log(values)
        let right = [...values.slice(1)] 
        let rc = right.every(v=> v == values[0] - 1)
        let left = [...values.slice(0,-1)]
        let lc = values[values.length -1] == 1 && left.every(v=> v == values[0])
        return rc || lc?"YES":"NO" 

    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = isValid(s);

    ws.write(result + '\n');

    ws.end();
}