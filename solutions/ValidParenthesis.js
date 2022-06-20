// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.




/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s, i=0) {
    // console.log(i);
    let matched = false;
    if (s[i] == '('){
        if (s[i+1] == ')'){ 
            console.log('matched', i)
            s[i] ='';
            s[i+1]='';
            let ns = s.split('')
            ns.splice(i,1)
            ns.splice(i,1)
            s = ns.join('')
            matched = true;
        }
    }
    else if (s[i] == '{'){
        if (s[i+1] == '}'){ 
            console.log('matched', i)
            s[i] ='';
            s[i+1]='';
            let ns = s.split('')
            ns.splice(i,1)
            ns.splice(i,1)
            s = ns.join('')
            matched = true;
        }
    }
    else if (s[i] == '['){
        if (s[i+1] == ']'){ 
            console.log('matched', i)
            s[i] ='';
            s[i+1]='';
            let ns = s.split('')
            ns.splice(i,1)
            ns.splice(i,1)
            s = ns.join('')
            matched = true;
        }
    }    
    
    if(s.length == 0 || i >= s.length){
        console.log(s)
        return s.length == 0
    }
    else{
        i = matched? i-1 : i+1
        return isValid(s, i)   
    }
};