/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) { 
    let intAndRoman = {
         1000: 'M',
           500: 'D',
           100: 'C',           
         50: 'L',    
           10: 'X',
           5: 'V',      
        1:  'I',
    };
    let romanString = '';
    const keys = [1000, 500, 100, 50, 10, 5, 1];

    for(let key of keys){
        while(num >= key){
            num -= key;
            romanString += intAndRoman[key];
        }
    }    
    return romanString.replace('DCCCC','CM')
    .replace('CCCC', 'CD')
    .replace('LXXXX', 'XC')
    .replace('XXXX', 'XL')
    .replace('VIIII', 'IX')
    .replace('IIII', 'IV');
};