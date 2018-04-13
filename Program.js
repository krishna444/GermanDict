/**
 * Simple program to gets a permutation of German words.
 * 
 * @author Krishna 
 * 2018.04.13
 */
var woerter=require('all-the-german-words')
var combinatorics=require('js-combinatorics')

var quatschWoerter =woerter.filter(function(w){return  /quatsch/i.test(w)});
let word="asuulr";
let letters=word.split("");
console.log(letters)
let count=5;

let cmb=combinatorics.permutationCombination(letters,count);
while(a=cmb.next()) {
    let combination=a.join("");
    //console.log(combination)
    let list=woerter.filter(function(w){
        if(combination ==w)

          return w;
    });
    if(list.length>0)
        console.log(list);
} 