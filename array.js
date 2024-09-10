const array=[0,1,2,3]
array.push(4)
array.push(5)
array.push(6)
//array.pop()
// array.unshift(9)
// array.shift()
// console.log(array.includes(5))
// console.log(array.indexOf(5))
// const Newarray=array.join()
// console.log(array)
// console.log(typeof(array))
// console.log(typeof(Newarray))

// slice or splice

// const array2= ["A" ,array.slice(1,3)]
// console.log(array)
// console.log(array2)
// const array3= ["A" ,array.splice(1,3)]
// console.log(array)
// console.log(array3)

const MarvelHeros=["IronMan","Thor","CaptainAmerica"]
const DcHeros=["BatMan","SuperMan","WonderWoman"]
//  MarvelHeros.push(DcHeros)
//  console.log(MarvelHeros)
// const allHeros=MarvelHeros.concat(DcHeros)
// console.log(allHeros)
const allNewHeros= [...MarvelHeros,...DcHeros]
// console.log(allNewHeros)

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))