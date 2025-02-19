function validatePassword(x, y){
    var hasNumber = /\d/;   
    if(x == y && x.length >= 8 && hasNumber.test(x)){
       if(checkUpper(x) == true && checkLower(x) == true){return true;} 
    }
    return false; 
}

function checkLower(string){
    for(let a = 0; a < string.length; a++){
        if(string.charCodeAt(a) >= 97 && string.charCodeAt(a) <= 122){
            return true; 
        }
    }
    return false; 
}

function checkUpper(string){
    for(let a = 0; a < string1.length; a++){
        if(string.charCodeAt(a) >= 65 && string.charCodeAt(a) <= 90){
            return true; 
        }
    }
    return false; 
}
function reverse(string){
    var newarray = [];
    for(let x = (string.length - 1); x > -1; x-- ){
        newarray.push(string[x]);
    }   

    var wow = newarray.join(""); 
    return wow; 
}

var string1 = "Password123"; 
var string2 = "Password123"; 


var validation = validatePassword(string1, string2); 
console.log(validation); 

console.log(checkLower(string1)); 
console.log(checkUpper(string1));


reverse(string1);





