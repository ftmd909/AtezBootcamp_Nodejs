const Factorial = (value) => {
    if(typeof value === "number"){
        let output = 1;
        for(let i = 1 ; i < value ; i++){
            output *= i;
        }
        console.log(output);
    }
    else{
        console.log("Please enter value in number type!");
    }
}
Factorial(3);