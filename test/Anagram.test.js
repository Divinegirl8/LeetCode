const groupAnagram = require('../Anagram')

test('should reurn a llist of list containing anagram words', () => {
    let values = ["ate","eat","tan","tea","tab"];
    let expected = [ [ 'ate', 'eat', 'tea' ], [ 'tan' ], [ 'tab' ] ]
      expect(groupAnagram(values)).toEqual(expected);



})
