const obj1 = {
    name:"Adam"
}

//with caching
// const obj2 = obj1

obj1.name = "jhon"

// console.log(obj2.name)

//without caching
const obj2 = {
    name:"jhon"
}
console.log(obj2.name)

