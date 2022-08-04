const repeatString = function(repeat, numTimes) {
    let repeatedString = "";
    if(numTimes >= 0){
        for(let i = 0; i < numTimes; i++){
            repeatedString += repeat;
            }
    } else {
        return "ERROR"
    }

return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

