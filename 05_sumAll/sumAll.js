const sumAll = function (startNum, endNum) {
    let summedNum = 0;
    if ((startNum < 0 || endNum < 0) || (!Number.isFinite(startNum) || !Number.isFinite(endNum))) {
        return "ERROR";
    } else {
        if (startNum < endNum) {
            for (let i = startNum; i <= endNum; i++) {
                summedNum += i;
            }
            return summedNum;
        } else if (endNum < startNum) {
            for (let i = startNum; i >= endNum; i--) {
                summedNum += i;
            }
            return summedNum;
        }
    }

};

// Do not edit below this line
module.exports = sumAll;
