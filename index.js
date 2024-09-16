function runProgram(){
let choices = prompt ("Welcome to Another Calculator app! Press 1 to try the Calculator or 2 to try the Unit conversions")

if (choices == 1){
let numb1 = prompt("Hi please input the first number")
if (numb1 == "0" || numb1 == "1" || numb1 == "2" || numb1 == "3" || numb1 == "4" || numb1 == "5" || numb1 == "6" || numb1 == "7" ||numb1 == "8" ||numb1 == "9" ){
    console.log ("Your first Number works")
}else console.log("Please reinput the first number :|")

let opperation1 = prompt ("The opperation goes here. please use any of these signs +,-,x,*,/ or a ^ to square a number")
if (opperation1 == "-" || opperation1 == "^" || opperation1 == "+" || opperation1 == "*" || opperation1 == "x") {
    console.log ("Opperation successful")
}else console.log("Please reinput the opperation sign")

let numb2 = prompt ("Please input the second number")
if (numb2 == "0" || numb2 == "1" || numb2 == "2" || numb2 == "3" || numb2 == "4" || numb2 == "5" || numb2 == "6" || numb2 == "7" ||numb2 == "8" ||numb2 == "9" ){
    console.log ("Your second Number works")
}else console.log("Please reinput the second number :|")



if (opperation1 == "-"){
    console.log(numb1 - numb2)
}else if (opperation1 == "+") {
    console.log(numb1 - numb2 * (-1)) // Dont no how plus works heres a work around
}else if (opperation1 == "x") {
    console.log(numb1 * numb2) 
}else if (opperation1 == "*") {
    console.log( numb1 * numb2)
}else if (opperation1 == "/") {
    console.log( numb1 / numb2)
}else if (opperation1 == "^"){
    console.log(numb1*numb1)
}
} else if (choices == 2){
    let unitChoice = prompt ("Welcome to the Unit Conversion App" )
if (unitChoice == 1){
    let numb3 = prompt ("Please input the inches that you would like converted to cm")
    console.log (numb3 * 2.54)
}else if (unitChoice == 2){
    let numb4 = prompt("Please input the pounds you would like converted into Kg")
    console.log(numb4 * 2.20462)
}else if (unitChoice == 3){
    let numb5 = prompt ("Hi please input the miles you would like converted into Km")
console.log (numb5 * 1.609344)

}else 
console.log("Please input the correct terms ")
}else 
runProgram()
}
runProgram()
