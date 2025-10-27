//Objects
const mySymbol=Symbol("Debu")

const myObj={
    name:"Debdulal",
    [mySymbol]:"debu1",
    age:23,
    "full name":"Debdulal Mahata",
    emai:"debdulalmahata06@gmail.com",
    location:"Jhargram"

}
// console.log(myObj.age);
// console.log(myObj.name);
// console.log(myObj["full name"])
// console.log(myObj[mySymbol])

const obj1={a:1,b:2}
const obj2={c:1,d:2}
const obj3={e:1,f:2}
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);
const facebookUser={
    id:"123abc",
    name:"Debdulal Mahata",
    email:"debdulalmahata31@gmail.com",
    single:true

}
// console.log(facebookUser);
// console.log(typeof facebookUser.single);
// console.log(Object.keys(facebookUser));
// console.log(Object.values(facebookUser));
// console.log(Object.entries(facebookUser));
// const{name}=facebookUser
const {name:n} = facebookUser
// console.log(name);
console.log(n);



