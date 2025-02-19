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
    for(let a = 0; a < string.length; a++){
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

function storePassword(user, string1, string2){
    if(validatePassword(string1, string2) == true){
        let a = reverse(string1); 
        let object = {name: user, newpassword: a}
        return object; 
    }else{
        let object = {name: user, newpassword: string1}; 
        return object; 
    }
}


console.log(storePassword("John", "Pass1234", "Pass1234"));  // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // returns {name: "John", newpassword:"Pass123"}





