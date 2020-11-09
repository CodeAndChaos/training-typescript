/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

```
'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
```

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

```javascript
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```

*/

/**
 * 
 * @param {string} word 
 * @param {string[]} words 
 */
export function anagrams(word: string, words: string[]) {
    let mappedWord = stringSort(word);
    return words.filter(val => {
        return mappedWord === stringSort(val);
    })
}

/**
 * 
 * @param {string} word 
 */
function stringSort(word: string) {
    return word.split("").sort().join("");
}
