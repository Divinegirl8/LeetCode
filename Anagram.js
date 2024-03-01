/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}
    let list = []


    for(let index = 0; index < strs.length; index++){
        
        const sortValue =  strs[index].split('').sort().join('');
        
        if(!(sortValue in obj)){
            obj[sortValue] = []
           
        }
        obj[sortValue].push(strs[index])
       
    }

    return Object.values(obj)
};

module.exports = groupAnagrams;


