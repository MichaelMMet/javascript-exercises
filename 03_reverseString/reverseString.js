const reverseString = function(reverseThis) {
let letters = [reverseThis.length];
let reversed = "";
for(let i = reverseThis.length; i >= 0; i--){
reversed += reverseThis.charAt(i);
}
return reversed;
};

// Do not edit below this line
module.exports = reverseString;
