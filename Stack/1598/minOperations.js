/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let num = 0;
    for (let item of logs) {
        switch(item) {
            case "../":
                num--;
                if (num < 0) num = 0;
                break;
            case "./":
                break;
            default: 
                num++;
        }
    }
    return num;
};

module.exports = minOperations;