// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let cp = '';
    
    if(strs.includes("")){return '';}

    if (strs.length == 1){
        cp = strs[0];
    }
    else {
        for(let i = 0;i < strs.length - 1;i++){
            cp = '';
            for (let l in strs[i]){
                if(l == 0 && strs[i][l] !== strs[i+1][l]){return '';}
                else if (!strs.every(s=> s[l] == strs[i][l])){break;}
                else {
                    console.log(l, strs[i][l]);
                    cp+=strs[i][l];
                }
            }
        }
    }
        
    // console.log(cp)
    
    return cp;
};