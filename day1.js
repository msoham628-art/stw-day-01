//Exercize No.1
const name = "Soham Mondal"
let age = 21
const Isfirstprogramminglanguage = false
console.log(`Hey, I am ${name} and I am ${age} years old. and is javascript your first programming language? ${Isfirstprogramminglanguage}`)

console.log(typeof name)
console.log(typeof age)
console.log(typeof Isfirstprogramminglanguage)

//Exercize No.2
console.log(typeof "7") // string
console.log("7" + 7)    // 77, number is converted to string and concatenated
console.log("7" - 7)    // 0, string is converted to a number and subtracted
console.log(7 === "7")  // false, strict equality checks both value and type
console.log(7 == "7")   // true, loose equality checks only value, type is coerced
console.log(typeof (7 === "7")) // boolean, the result of the comparison is a boolean value

//Exercize No.3
let width = 5
let height = 10
let area = width * height
console.log(`The area of the rectangle is: ${area}`) // Area of rectangle = 50 
let perimeter = 2 * (width + height)
console.log(`The perimeter of the rectangle is: ${perimeter}`) // Perimeter of rectangle = 30

width = 7
height = 3
area = width * height
console.log(`The area of the rectangle is: ${area}`) // Area of rectangle = 21
perimeter = 2 * (width + height)
console.log(`The perimeter of the rectangle is: ${perimeter}`) // Perimeter of rectangle = 20

/* So, the values after changing shows some changes in the area and perimeter of the rectangle. 
The area and perimeter are calculated based on the current values of width and height.
When we change the values of width and height, the area and perimeter are recalculated accordingly. */

//Exercize No.4
let bill = 2847
let tip = 0.08
let totalbill = bill + (bill * tip)
let perPerson = totalbill / 5
//Math.round() is used to round the variable values to the nearest integer for better readability.
console.log(`The total bill amount including tip is: ${Math.round(totalbill)}`)
console.log(`The amount to be paid by each person is: ${Math.round(perPerson)}`)

//Exercize No.5
/*const Total	= 0; 
This line shows that variable total has a value of 0 and it is a constant variable, which means its value cannot be changed later in the code.
 let	price = "250";
 let	quantity = "3";
Both the variables price and quantity are declared as strings, which means they are treated as text rather than numbers.
 Total = price + quantity;
Invalid assignment to constant variable 'Total'. This line attempts to assign a new value to the constant variable Total,also the formula is incorrect because it is trying to concatenate two strings instead of multiplying two numbers.
 console.log("Total is: " + total)
Thus it will throw an error because we are trying to change the value of a constant variable.*/

//Correction:
let price = 250;
let quantity = 3;
let total = price * quantity;
console.log("Total is: " + total);
//This will give the correct output of 750, as we are now using numbers instead of strings and multiplying them to get the total.
