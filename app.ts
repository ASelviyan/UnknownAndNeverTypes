//UNKNOWN TYPE
console.log('hello')
//the unknown type is just a type that lets us know that we don't know what kind of type will be in this variable
//this type would be great if you don't know what kind of type of value it will store in the future 
let userInput: unknown;
let userName: string

//we can store any value in the unknown value without getting errors
userInput = 5
userInput = "hi"

//unknown seems like its the same as any type but really its not because ...
//the unknown type is more restricted and that is why the below code doesn't work 
//userName wants a string from userInput but because the value is'nt guaranteed to be a string it shows us an error 
//userName = userInput

//but you can get around this by creating a conditional that checks what is being stored in the unknown variable
if(typeof userInput === 'string'){
    //so if you want to assign an unknown value to a value with a fixed type you need to use a conditional
    userName = userInput
}


//NEVER TYPE
//the never type will never produce a value to return 

//this never type will be great for something like an error function 
//because the error function will crash the script and never return anything 
//this function will generate errors and throws them
function generateError(message: string, code: number): never{
    throw{
        message: message, 
        errorCode: code
    }
}

generateError('An error occurred', 500)

//another function that will never return anything is an infinite loop
//while (true) {}

