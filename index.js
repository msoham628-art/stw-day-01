console.log("Hello, World!");
console.log(32)
console.log("The value of 32 is:"+ 32)
console.log(5>3)
console.log(5+3)
console.log("The sum of 5 and 3 is: "+ (5+3))
console.log(`Hare Krishna
    This is Gurukulam STW`)
console.log('5'+'3')
console.log('5'-'3')
console.log('5'===5)//strictly equality operatorc
/*
value of 5 is: 5
*/
console.log(`This is a text, this is the value of 5+3: ${5+3}`)//strictly equality operatorc

const name = "Gurukulam STW"
console.log(`Hey ${name}, How are you?`)

let a = 5
let b = 3
var c = 10
console.log(a+b)

a = 10
console.log(a+b)
console.log(typeof a)
console.log(typeof name)
let typeOfA = typeof a
console.log(typeOfA)
console.log(c+5)

a = "Hello"
//name = 32
const array = [1,2,3,4,5]
console.log(array)
//const input = prompt("Enter your name:")
//console.log("Your name is: ", input)
console.log(typeof array)
const obj ={
    name:{
        firstName: "Soham",
        lastName: "Mondal"
    },
    age: 25,
    school: "ABC School",
    isStudent: false
}
//new comment
console.log(typeof obj == typeof array)

const abc = null
const def = undefined
console.log(abc===def)
console.log(typeof def)
console.log(obj.name.firstName)
console.log(obj.name.lastName)
//console.log(obj.school.name)
console.log('5'!==5)
console.log('5'!=5)
console.log('5'!==5||obj.school.name)

if(2>5){
    console.log("Mathematics is wrong")
}   
else{
    console.log("This will print")
    const str = ''
    let confusion = 5/0
    console.log(confusion)
    if(str || confusion){
        console.log("Will it print?")
    }
}

const marks = {
    maths: 120,
    physics: 80,
    chemistry: 70,
    practical: {
        physics: 60,
    }
}

let total = marks.maths + marks.physics + marks.chemistry
total += (marks.practical && marks.practical.physics)||0
console.log(total)

console.log(true+1)
console.log(true==1)

console.log(5+parseInt('4a'))
console.log((0.1+0.2).toFixed(2))

const newChar = 'Arnab'
console.log(newChar.toLowerCase()=='arnab')
