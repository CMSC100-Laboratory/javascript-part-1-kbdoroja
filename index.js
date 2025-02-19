function validatePassword(x, y){
    var hasNumber = /\d/;   
    if(string1 == string2 && string1.length >= 8 && hasNumber.test(string1)){
        console.log("true"); 
        return true; 
    }else{
       return false; 
    }
}

function checkUpper(string){
    for(let a = 0; a < string1.length; a++){
        if(string[a] == string[a].toLowerCase){
            return true; 
        }
    }
}

function reverse(string){
    var newarray = [];
    for(let x = (string.length - 1); x > -1; x-- ){
        newarray.push(string[x]);
    }   

    var wow = newarray.join(""); 
    return wow; 
}
var string1 = "password123"; 
var string2 = "password123"; 


var validation = validatePassword(string1, string2); 
console.log(validation); 
reverse(string1);





