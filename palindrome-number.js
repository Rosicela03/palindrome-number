/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let half = 0;

    if (x < 0 || (x != 0 && x % 10 === 0)){
        return false;
    } 
        while ( x > half){
            half = (half * 10) + (x % 10);

            x = Math.floor(x / 10)
        }
            return x == half || x == Math.floor(half/ 10);
        
    
};
